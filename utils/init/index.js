
const mongoose = require("mongoose");
const axios = require("axios");
const initdata = require("./data.js");
const Listing = require("../../models/listing.js");

const Mongo_url = "mongodb://127.0.0.1:27017/wanderlust";

async function initdb() {
    try {
        await mongoose.connect(Mongo_url);

        await Listing.deleteMany({});

        const listingsWithGeometry = await Promise.all(
            initdata.data.map(async (obj) => {

                const address = `${obj.location}, ${obj.country}`;

                try {
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

                    let geometry = {
                        type: "Point",
                        coordinates: [0, 0]
                    };

                    if (response.data.length) {
                        const lat = Number(response.data[0].lat);
                        const lng = Number(response.data[0].lon);

                        geometry = {
                            type: "Point",
                            coordinates: [lng, lat]
                        };
                    }

                    return {
                        ...obj,
                        owner: new mongoose.Types.ObjectId(
                            "6a34e55f449a7f52968b39fb"
                        ),
                        geometry
                    };

                } catch (err) {
                    console.log(`Failed: ${address}`);

                    return {
                        ...obj,
                        owner: new mongoose.Types.ObjectId(
                            "6a34e55f449a7f52968b39fb"
                        )
                    };
                }
            })
        );

        await Listing.insertMany(listingsWithGeometry);

        console.log("Data initialized successfully");

        mongoose.connection.close();

    } catch (err) {
        console.log(err);
    }
}

initdb();