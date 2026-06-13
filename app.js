const express = require("express");
const mongoose = require("mongoose");
const Listing = require("./models/listing");
const path = require("path");
const app = express();
const port = 8080;
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const wrapAsync = require("./utils/wrapAsync.js");
const ExpressError = require("./utils/expressError.js");
const Review = require("./models/review");
const { listingSchema, reviewSchema } = require("./schema");


const listingRoute = require("./routes/listings.js");
const reviewRouter = require("./routes/review.js");

app.use(express.static(path.join(__dirname, "public")));
const Mongo_url = "mongodb://127.0.0.1:27017/wanderlust"


app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
// app.use(express.static("public"));
app.use(methodOverride("_method"));
app.engine("ejs", ejsMate);

const cookieParser = require("cookie-parser");
app.use(cookieParser());

app.get("/getcookies", (Req,res)=>{
    res.cookie("greet", "namaste");
    res.cookie("madeIn", "India");
    res.cookie("nmae", "ketan");
    res.send("sent you some cookies !");

});

app.get("/", (req,res)=>{
    console.dir(req.cookies);
    res.send("Hii, I am root");
});

app.get("/greet", (req,res)=>{
    let {name = "anonymous"} = req.cookies;
    res.send(`Hii ${name}`);
})



// Routes FIRST
app.get("/", (req, res) => {
    res.send("This is Root");
});



app.use("/listings",listingRoute);
app.use("/listings/:id/reviews", reviewRouter);

// ERROR Handling MIDDLEWARE

app.use((err, req, res, next) => {
    let { statusCode = 409, message = "Something Went Wrong" } = err;
   
    console.dir(err);
    res.render("./listings/error.ejs", { message });
});


// Start server AFTER setup
async function startServer() {
    try {
        await mongoose.connect(Mongo_url);
        console.log("DB Connected");

        app.listen(port, () => {
            console.log("Server running on", port);
        });

    } catch (err) {
        console.log(err);
    }
}

startServer();

