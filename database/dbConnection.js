import mongoose from "mongoose";
export function connection() {
  mongoose
    .connect(process.env.CONNECTION, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("database connected successfully");
    })
    .catch((err) => {
      console.log("database error", err);
    });
}
