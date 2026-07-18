const express  = require("express");
const router = express.Router({mergeParams: true});
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/expressError.js");
const Listing = require("../models/listing.js");
const Review = require("../models/review");
const { listingSchema, reviewSchema } = require("../schema");
const reviewController = require("../controllers/reviews");
const { isLoggedIn, saveRedirectUrl, validateListing } = require("../middleware.js");


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

router.post("/",validatereview,wrapAsync( async (req, res) => {
    const { id } = req.params;

    const listing = await Listing.findById(id);

    if (!listing) {
        req.flash("error", "Listing not found!");
        return res.redirect("/listings");
    }

    
    const newReview = new Review(req.body.review);

    // Save review author
    newReview.author = req.user._id;

    // Save review
    await newReview.save();

    // Add review reference to listing
    listing.reviews.push(newReview._id);
    await listing.save();

    req.flash("success", "Review posted successfully!");
    res.redirect(`/listings/${id}`);
}));

// DElETE Section

router.delete("/:reviewId", wrapAsync(async (req, res) => {
    const { id, reviewId } = req.params;

    // Remove review reference from listing
    await Listing.findByIdAndUpdate(id, {
        $pull: { reviews: reviewId }
    });

    // Delete review document
    await Review.findByIdAndDelete(reviewId);

    req.flash("success", "Review deleted successfully!");
    res.redirect(`/listings/${id}`);
}));

module.exports = router;
