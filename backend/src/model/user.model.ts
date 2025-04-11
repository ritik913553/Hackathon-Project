import mongoose, { Schema, Document, Types } from "mongoose";
import { IProfile } from "./profile.model"; // don't import model directly to avoid circular deps

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  isVerified: boolean;
  profile: Types.ObjectId;
}

const UserSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, select: false },
    isVerified: { type: Boolean, default: false },
    profile: {
      type: Schema.Types.ObjectId,
      ref: "Profile",
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

// Automatically create a profile after user is created
UserSchema.post("save", async function (doc, next) {
  try {
    const Profile = mongoose.model<IProfile>("Profile");
    if (!doc.profile) {
      const profile = await Profile.create({});
      doc.profile = profile._id;
      await doc.save(); // Save the updated user with profile linked
    }
    next();
  } catch (err) {
    next(err as any);
  }
});

export default mongoose.model<IUser>("User", UserSchema);
