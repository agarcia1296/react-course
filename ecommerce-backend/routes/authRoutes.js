import express from "express";
import crypto from "crypto";

import { users } from "../data/users.js";
import { sendVerificationEmail } from "../scripts/sendVerificationEmail.js";

const router = express.Router();

/* =========================
   Signup
========================= */

router.post("/signup", async (req, res) => {
  try {
    const {
      email,
      password,
      artistAccount,
      artistName,
      genre,
    } = req.body;

    const existingUser = users.find(
      (user) => user.email === email
    );

    if (existingUser) {
      return res.status(400).json({
        message: "Email already exists",
      });
    }

    const verificationCode = crypto
      .randomInt(100000, 999999)
      .toString();

    const newUser = {
      id: crypto.randomUUID(),

      email,
      password,

      artistAccount: artistAccount || false,

      artistProfile: artistAccount
        ? {
            artistName,
            genre,
          }
        : null,

      verified: false,

      verificationCode,

      createdAt: new Date(),
    };

    users.push(newUser);

    await sendVerificationEmail(
      email,
      verificationCode
    );

    res.json({
      message:
        "Account created. Verification email sent.",
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Server error",
    });
  }
});

/* =========================
   Verify Email
========================= */

router.post("/verify", (req, res) => {
  const { email, code } = req.body;

  const user = users.find(
    (user) => user.email === email
  );

  if (!user) {
    return res.status(404).json({
      message: "User not found",
    });
  }

  if (user.verificationCode !== code) {
    return res.status(400).json({
      message: "Invalid verification code",
    });
  }

  user.verified = true;

  user.verificationCode = null;

  res.json({
    message: "Email verified successfully",
  });
});

export default router;