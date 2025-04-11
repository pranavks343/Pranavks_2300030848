const jwt = require("jsonwebtoken");

// Generate a new random secret key (or use the one from above)
const secretKey = "a3f1c23d5e1b9a5c91d812f5e4c3d7b2"; // Example secret key

// Create a payload
const payload = {
    id: 12345,
    role: "user",
    name: "John Doe"
};

// Sign a JWT token
const token = jwt.sign(payload, secretKey, { expiresIn: "1h" });

console.log("Generated JWT Token:", token);

// Verify the token
try {
    const decoded = jwt.verify(token, secretKey);
    console.log("Decoded Token:", decoded);
} catch (error) {
    console.error("Invalid Token:", error.message);
}