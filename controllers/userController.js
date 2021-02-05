import passport from "passport";
import routes from "../routes";
import User from "../models/User";

export const getJoin = (req, res) => {
    res.render("join", { pageTitle: "Join" });
};

export const postJoin = async (req, res, next) => {
    const {
        body: { name, email, password, password2 }
    } = req;
    if (password !== password2) {
        res.status(400);
        res.render("join", { pageTitle: "Join" });
    } else {
        try {
            const user = await User({
                name,
                email
            });
            await User.register(user, password);
            next();
        } catch (error) {
            console.log(error);
            res.redirect(routes.home);
        }
    }
};

export const getLogin = (req, res) =>
    res.render("login", { pageTitle: "Log In" });
export const postLogin = passport.authenticate("local", {
    failureRedirect: routes.login,
    successRedirect: routes.home
});

export const facebookLogin = passport.authenticate('facebook', {
    authType: 'rerequest', scope: ['public_profile', 'email']
});

export const facebookLoginCallback = async (req, accessToken, refreshToken, profile, cb) => { // 다시 작성
    const { _json: { id, name, email } } = profile;
    console.log(profile);
    //console.log(profile, cb);
    try {
        const user = await User.findOne({ email });     // email : email (User with the same email as the email from GitHub)
        //console.log(user);     // show user information
        if (user) {                // Since it was found above, it is a registered user.
            user.facebookId = id;      //  So, set the github id to the user's id
            user.save();
            return cb(null, user);
        }                  // Create a new user because he has never signed up
        const newUser = await User.create({
            email,
            name,
            facebookId: id,
        });
        return cb(null, newUser);
    } catch (error) {
        return cb(error);
    }
};

export const postFacebookLogIn = (req, res) => {
    res.redirect(routes.home);
};

export const logout = (req, res) => res.render("logout");
export const editProfile = (req, res) => res.render("editProfile");
export const changePassword = (req, res) => res.render("changePassword");
export const userDetail = (req, res) => res.render("userDetail");
export const currentPosition = (req, res) => res.render("currentPosition");
export const bookmark = (req, res) => res.render("bookmark");