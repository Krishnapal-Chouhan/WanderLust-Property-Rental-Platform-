const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const Listing = require("../models/listing.js");
const { listingSchema, reviewSchema } = require("../schema");
const ExpressError = require("../utils/expressError.js");
const { isLoggedIn, saveRedirectUrl, validateListing } = require("../middleware.js");
const listingController = require("../controllers/listings.js");
const multer = require("multer");
const { storage } = require("../cloudConfig.js");
// const { isLoggedIn, saveRedirectUrl, validateListing } = require("../middleware.js");

const upload = multer({ storage });

// Index Route
// router.get("/", wrapAsync(listingController.index));

router.get("/", wrapAsync(async (req, res) => {

    const { search } = req.query;

    let allListings;

    if (search) {

        allListings = await Listing.find({

            $or: [

                {
                    title: {
                        $regex: search,
                        $options: "i"
                    }
                },

                {
                    location: {
                        $regex: search,
                        $options: "i"
                    }
                },

                {
                    country: {
                        $regex: search,
                        $options: "i"
                    }
                },

                {
                    description: {
                        $regex: search,
                        $options: "i"
                    }
                }

            ]

        });

    } else {

        allListings = await Listing.find({});

    }

    res.render("listings/index", {

        allListings,
        search

    });

}));

// NEW form Creation
//Compact Way to Write  ("/new");

router.route("/new")
    .get(isLoggedIn, listingController.renderNewForm)
    .post(
        isLoggedIn,
        upload.single("listing-image"),
        wrapAsync(listingController.addListingItem)
    )



// / \
//  |
//  |
//  |



// NEW Route

// router.get("/new", isLoggedIn, listingController.renderNewForm);

// // ADD List item
// router.post(
//     "/new",isLoggedIn, wrapAsync(listingController.addListingItem)
// );




// Edit and Update Route
// Get Route
router.get("/:id/edit", wrapAsync(listingController.getEditForm));


// // Update Route
// router.put("/:id", saveRedirectUrl, wrapAsync(listingController.updateForm));




// // Delete Route
// router.delete("/:id", wrapAsync(listingController.deleteListing))




// // Show indi. listing route
// router.get("/:id", wrapAsync(listingController.showListing));


// Compact way to erite ":id"
router.route("/:id")
    .put(saveRedirectUrl, upload.single("listing-image"), wrapAsync(listingController.updateForm))
    .delete(wrapAsync(listingController.deleteListing))
    .get(wrapAsync(listingController.showListing));


module.exports = router;