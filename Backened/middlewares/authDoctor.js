import jwt from "jsonwebtoken";

const authDoctor = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization; // Expecting "Bearer <token>"
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ success: false, message: "Not Authorized. Login Again" });
    }

    const token = authHeader.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (!decoded.id) {
      return res.status(401).json({ success: false, message: "Invalid token" });
    }

    // ✅ Ensure req.body exists before attaching docId
    if (!req.body) req.body = {};

    // Best practice: attach doctor ID to req.docId
    req.docId = decoded.id;       // Safe for GET, POST, PUT, etc.
    req.body.docId = decoded.id;  // Only if your controller expects it

    next();
  } catch (error) {
    console.error("AuthDoctor Error:", error.message);
    return res.status(401).json({ success: false, message: "Token verification failed" });
  }
};

export default authDoctor;
