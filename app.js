const express = require("express");
const morgan = require('morgan');
const dotenv = require("dotenv").config();
const errorHandler = require(`./middleware/errorHandler`)

const app = express();

const port = process.env.PORT || 5000; 

app.use(express.json()); // provides parser to help parse data stream that is received from client on the server side 
app.use("/api/contacts", require("./routes/contactRoutes")); // middleware 
app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

// const express = require("express");
// const dotenv = require("dotenv").config();
// const errorHandler = require("./middleware/errorHandler");
// const HospitalDB = require("./HospitalDB"); // Replace with the correct path to your MongoDB utility module

// const app = express();
// const port = process.env.PORT || 5000;

// app.use(express.json()); // Middleware for parsing JSON requests

// // Define routes
// const hospitalRoutes = require("./routes/hospitalRoutes"); // Import hospital routes
// const patientRoutes = require("./routes/patientRoutes"); // Import patient routes

// // Use routes
// app.use("/api/hospitals", hospitalRoutes);
// app.use("/api/patients", patientRoutes);

// // Error handling middleware
// app.use(errorHandler);

// // Start the server
// app.listen(port, () => {
//   console.log(`Server running on port ${port}`);
// });

// // Database connection (if you're not using Mongoose)
// const db = HospitalDB();

// // Test database connection (optional)
// db.read("hospitals", {})
//   .then((result) => {
//     console.log("Database connection established");
//   })
//   .catch((error) => {
//     console.error("Error connecting to the database:", error);
//   });