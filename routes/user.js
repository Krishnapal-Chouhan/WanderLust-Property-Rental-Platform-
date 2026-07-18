const express = require("express");
const router = express.Router();
const User = require("../models/users.js");
const passport = require("passport");
const { saveRedirectUrl } = require("../middleware.js");
const userController = require("../controllers/user.js");


//Compact way
router.route("/signup")
.get( userController.renderSignup)
.post( userController.userSignup);

// ORR----------------------------

// router.get("/signup", userController.renderSignup);

// router.post("/signup", userController.userSignup);

// ---------------------------------------------------------------------------------------


// compact way

router.get("/", (req, res) => {
    res.redirect("/listings");
});

router.route("/login")
.get(userController.renderLogin)
.post(
    
    saveRedirectUrl,
    passport.authenticate("local", {
        failureRedirect: "/login",
        failureFlash: true
    }),
    userController.userLogin
);
// OR----

// ------------------------------------------------------------------------


router.get("/logout",userController.userLogout);

module.exports = router;

