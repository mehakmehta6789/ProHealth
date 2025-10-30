import jwt from "jsonwebtoken";

// User authentication middleware
const authUser = async (req, res, next) => {
  try {
    const { token } = req.headers;

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Not Authorized. Login Again",
      });
    }

    const token_decode = jwt.verify(token, process.env.JWT_SECRET);

    // ✅ Ensure req.body exists before setting userId
    if (!req.body) req.body = {};

    // Attach userId safely
    req.userId = token_decode.id;    // best for GET requests
    req.body.userId = token_decode.id; // still available for POST/PUT

    next();
  } catch (error) {
    console.error("error:", error);
    res.status(401).json({ success: false, message: "Unauthorized" });
  }
};

export default authUser;
