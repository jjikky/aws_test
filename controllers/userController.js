import passport from "passport";
import routes from "../routes";
import User from "../models/User";

export const getJoin = (req, res) => {
    res.render("join", { pageTitle: "Join" });
};

export const postJoin = async (req, res, next) => {
    const {
        body: { appid, password, password2 }
    } = req;
    if (password !== password2) {
        res.status(400);
        res.render("join", { pageTitle: "Join" });
    } else {
        try {
            const user = await User({
                appid
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
    //console.log(profile);
    //console.log(profile, cb);
    console.log(req.body.appid);
    try {
        const user = await User.findOne({ facebookId: id });     //이부분 APPid로 바꿔야함 기준이 그거니까
        //console.log(user);     // show user information
        if (user) {                // Since it was found above, it is a registered user.
            user.facebookId = id;      //  So, set the github id to the user's id
            user.save();
            //console.log(user);
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
    res.redirect(routes.appid);
};
export const appId = (req, res) => res.render("appId");
export const postappId = async (req, res) => {
    const id = req.user._id
    try {
        const user = await User.findOne({ _id: id });
        //console.log(user);
        user.appId = req.body.appid;
        user.save();
        res.redirect(routes.home);
    } catch (error) {
        console.log(error);
    }

    //console.log(user);
}; // 해당 유저 테이블에 appid추가.. 그걸 위해 세션

export const logout = (req, res) => {
    req.logout();
    res.redirect(routes.home);
};

export const editProfile = (req, res) => res.render("editProfile");
export const changePassword = (req, res) => res.render("changePassword");
export const userDetail = (req, res) => res.render("userDetail");
export const currentPosition = (req, res) => res.render("currentPosition");
export const bookmark = (req, res) => res.render("bookmark");