const User = require("../models/users");
module.exports.renderSignup = (req,res)=>{
   res.render("./users/signup.ejs")
}

module.exports.userSignup = async (req,res,next)=>{
try{
        let {username, email, password} = req.body;

    let newUser = new User({email, username});

   const registeruser=  await User.register(newUser, password);
   req.login(registeruser, (err)=>{
    if(err){
        next(err);
    }

    req.flash("success", "WelCome To WanderLust");
    res.redirect("/listings");

   });
//    console.log(registeruser);
   
}catch(e){
    req.flash("error",e.message);
    res.redirect("/signup");
}

};


module.exports.renderLogin = (req,res)=>{
    res.render("./users/login.ejs")
}


module.exports.userLogin =     async (req, res) => {
        req.flash("success", "Welcome Back to WanderLust");

        // let redirectUrl = res.locals.redirectUrl || "/listings";

        res.redirect("/listings");
    }


module.exports.userLogout = (req,res,next)=>{
    req.logout((err)=>{
        if(err){
            next(err);
        }
        req.flash("success", "User Logout Succesfully");
        res.redirect("/listings");
    })
}