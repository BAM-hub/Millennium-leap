import connectDB from "../../../utils/connectDB";
import * as jwt from "jsonwebtoken";
import * as bcrypt from "bcryptjs";
import User from "../../../models/User";

export default async function handler(req, res) {
  if (req.method === "POST") {
    await connectDB();
    const { name, email, isCompany, password } = req.body;

    try {
      // see if the user exists

      let user = await User.findOne({ email });

      if (user) {
        return res
          .status(400)
          .json({ errors: [{ msg: "user already exists" }] });
      }

      user = new User({
        name,
        email,
        password,
        isCompany,
      });

      // encrypt the password

      const salt = await bcrypt.genSalt(10);

      user.password = await bcrypt.hash(password, salt);

      await user.save();

      // return jwt

      const payload = {
        user: {
          id: user.id,
        },
      };

      jwt.sign(
        payload,
        process.env.jwtSecret,
        { expiresIn: 36000 },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      return res.status(500).send("server error");
    }
  } else {
    res.status(405).send("method not allowed");
  }
}
