const mongoose = require("mongoose");
const Review = require("./review.js");

const listingSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,

    },
   image: {
    url: {
        type: String,
        default: "https://images.pexels.com/photos/29511872/pexels-photo-29511872.jpeg"
    },
    filename: String
},
    price: {
        type: Number,
        default: 0

    },
    location: {
        type: String
    },
    country: {
        type: String
    },

    reviews : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : "Review"
    }]

});

listingSchema.post("findOneAndDelete", async (listing) => {
    console.log("Deleted Listing:", listing);

    if (listing) {
        let result = await Review.deleteMany({
            _id: { $in: listing.reviews }
        });

        console.log("Deleted Reviews:", result);
    }
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;


//  default :"https://www.pexels.com/photo/sunset-over-university-of-wroclaw-poland-29243214/"