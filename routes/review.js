const express  = require("express");
const router = express.Router({mergeParams: true});
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/expressError.js");
const Listing = require("../models/listing");
const Review = require("../models/review");
const { listingSchema, reviewSchema } = require("../schema");


const validatereview = (req, res, next) => {

    let { error } = reviewSchema.validate(req.body);
    // console.log("Result Is ", result);
    if (error) {
        throw new ExpressError(400, error);
    } else {
        next();
    }

}

// Review  Section (Post Route)

router.post("/",validatereview,wrapAsync( async(req,res)=>{
    let listing = await Listing.findById(req.params.id);

    let newReview = new Review(req.body.review);

    listing.reviews.push(newReview._id);

    await newReview.save();
    await listing.save();

    console.log("new Review Saved");
   res.redirect(`/listings/${listing._id}`);

}));

// DElETE Section

router.delete("/:reviewId", wrapAsync(async(req,res)=>{
    let {id, reviewId} = req.params;

    await Listing.findByIdAndUpdate(id, {
        $pull: { reviews: reviewId }
    });

    await Review.findByIdAndDelete(reviewId);

    res.redirect(`/listings/${id}`);
}));

module.exports = router;
