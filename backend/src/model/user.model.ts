import mongoose, { Schema, Document, Types } from "mongoose";

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
        password: { type: String, required: true,select:false },
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

export default mongoose.model<IUser>("User", UserSchema);
