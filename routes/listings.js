const express  = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const Listing = require("../models/listing");
const { listingSchema, reviewSchema } = require("../schema");
const ExpressError = require("../utils/expressError.js");


// Validate Listing
const validateListing = (req, res, next) => {

    let { error } = listingSchema.validate(req.body);
    // console.log("Result Is ", result);
    if (error) {
        throw new ExpressError(400, error);
    } else {
        next();
    }

}




// Index Route
router.get("/", wrapAsync(async (req, res) => {
    const allListing = await Listing.find({});

    res.render("./listings/index.ejs", { allListing });

}));

// NEW form Creation
// NEW Route
router.get("/new", (req, res) => {
    res.render("./listings/newForm.ejs");
});

// ADD List item
router.post("/new", validateListing, wrapAsync(async (req, res) => {
   
    let { title, description, url, price, location, country } = req.body;

    // if (!title || !description || !url || !price || !location || !country) {
    //     throw new ExpressError(400, "All fields are required");
    // }
    const newList = new Listing({
        title,
        description,
        image: {
            url: url
        },
        price,
        location,
        country
    });

    await newList.save();

    res.redirect("/listings");

}));

// Edit and Update Route
// Get Route
router.get("/:id/edit",wrapAsync( async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id);

    res.render("./listings/update.ejs", { listing });
}));


// Update Route

router.put("/:id", wrapAsync(async (req, res) => {
    let { id } = req.params;
    let { title: newt, description: newd, image: newi, price: newp, location: newl, country: newc } = req.body;
    await Listing.findByIdAndUpdate(id, { ...req.body.listing }, { new: true });

    res.redirect("/listings");
}));


// Delete Route
router.delete("/:id", wrapAsync(async (req, res) => {
    let { id } = req.params;
    await Listing.findByIdAndDelete(id);
    res.redirect("/listings");
}))


// Show indi. listing route
router.get("/:id", wrapAsync(async (req, res) => {
    let { id } = req.params;
    const list = await Listing.findById(id).populate("reviews");
    res.render("./listings/show.ejs", { list });
}));


module.exports = router;