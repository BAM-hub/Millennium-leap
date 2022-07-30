// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import connectDB from "../../utils/connectDB";

export default async function handler(req, res) {
  await connectDB();
  res.status(200).json({ message: "Connected" });
}
