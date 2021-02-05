import passport from "passport";
import User from "./models/User";
import GoogleStrategy from "passport-google-oauth20";
import FacebookStrategy from "passport-facebook";
import { facebookLoginCallback } from "./controllers/userController";
import routes from "./routes";

passport.use(User.createStrategy());   //local

passport.use(
    new FacebookStrategy(
        {
            clientID: process.env.FB_ID,
            clientSecret: process.env.FB_SECRET,
            callbackURL: `http://localhost:5004${routes.facebookCallback}`,
            passReqToCallback: true
        },
        facebookLoginCallback
    )
);

passport.serializeUser(function (user, done) {
    done(null, user);
});

passport.deserializeUser(function (id, done) {
    User.findById(id, function (err, user) {
        done(err, user);
    });
});