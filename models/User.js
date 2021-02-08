import mongoose from "mongoose";
import passportLocalMongoose from "passport-local-mongoose";

const UserSchema = new mongoose.Schema({
    appId: String,
    avatarUrl: String,
    facebookId: Number,
    googleId: Number
}); //

UserSchema.plugin(passportLocalMongoose, { usernameField: "appid" });

const model = mongoose.model("User", UserSchema);

export default model;