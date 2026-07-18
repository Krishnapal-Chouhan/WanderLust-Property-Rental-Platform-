const Listing = require("../models/listing");
const axios = require("axios");

// Index Route that Rendering the All Listing


module.exports.index = async (req, res) => {
    const allListing = await Listing.find({});

    res.render("./listings/index.ejs", { allListing });

}


module.exports.renderNewForm = (req, res) => {
    res.render("./listings/newForm.ejs");
}

module.exports.addListingItem = async (req, res) => {
    let url = req.file.path;
    let filename = req.file.filename;





    console.log(url, "...", filename);
    const { title, description, price, location, country } = req.body;


    const address = `${location}, ${country}`;
    console.log(location);
    console.log(country);


    const response = await axios.get(
        "https://nominatim.openstreetmap.org/search",
        {
            params: {
                q: address,
                format: "json",
                limit: 1
            },
            headers: {
                "User-Agent": "WanderLust"
            }
        }
    );

    console.log(response.data);


    if (!response || !response.data.length) {
        req.flash("error", "Location not found");
        return res.redirect("/listings/new");
    }

    const lat = Number(response.data[0].lat);
    const lng = Number(response.data[0].lon);

    console.log(lat, lng);





    const newList = new Listing({
        title,
        description,
        image: {
            url,
            filename
        },
        price,
        location,
        country,
        geometry: {
            type: "Point",
            coordinates: [lng, lat]
        },
        owner: req.user._id
    });




    await newList.save();

    console.log("newlist", newList);

    req.flash("success", "Listing Created Successfully");
    res.redirect("/listings");
}




module.exports.getEditForm = async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id);
    if (!listing) {
        req.flash("error", "Listing does not exist!");
        return res.redirect("/listings");
    }
    let modifiedImageUrl = "";

    if (listing.image && listing.image.url) {
        modifiedImageUrl = listing.image.url.replace(
            "/upload",
            "/upload/h_300,w_250"
        );
    }
    res.render("./listings/update.ejs", { listing, modifiedImageUrl });
};


module.exports.updateForm = async (req, res) => {
    let { id } = req.params;

    let listing = await Listing.findByIdAndUpdate(
        id,
        { ...req.body.listing },
        { new: true }
    );

    if (typeof req.file !== "undefined") {
        let url = req.file.path;
        let filename = req.file.filename;
        listing.image = { url, filename };

    }



    await listing.save();
    req.flash("success", "Listing updated successfully!");
    res.redirect(`/listings/${id}`);
}

module.exports.deleteListing = async (req, res) => {
    let { id } = req.params;
    await Listing.findByIdAndDelete(id);
    req.flash("success", "Listing has been removed.");
    res.redirect("/listings");
}

module.exports.showListing = async (req, res) => {
    let { id } = req.params;
    const list = await Listing.findById(id)
        .populate(
            {
                path: "reviews",
                populate: {
                    path: "author"
                },
            }
        )
        .populate("owner");

    if (!list) {

        req.flash("error", "Listing does not exist!");
        return res.redirect("/listings");
    }


    res.render("./listings/show.ejs", { list });
}