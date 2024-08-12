const express = require("express"); // Express is used to create the server and manage routing.
const mongoose = require("mongoose"); // Mongoose is used for connecting to and interacting with MongoDB.
const cors = require("cors"); // CORS middleware to allow requests from different origins.
require("dotenv").config(); // dotenv is used to load environment variables from a .env file.

const teamRoutes = require('./routes/TeamRoutes'); //Added team routes
const roleRoutes = require('./routes/RoleRoutes'); 
const employeeRoutes = require('./routes/EmployeeRoutes');
const UserRoutes = require('./routes/UserRoutes');
const LeaveRequestRoutes = require('./routes/LeaveRequestRoutes');

// Create an instance of Express
const app = express();
const PORT = process.env.PORT || 5000; // Set the port from environment variables or default to 5000.

// Middleware
app.use(express.json()); // Middleware to parse JSON requests.
app.use(cors()); // Middleware to handle Cross-Origin Resource Sharing (CORS).

// app.get("/", (req,res)=> {
//     res.send("Server is working fine");
// });

app.use('/api', teamRoutes); // Use team routes
app.use('/api', roleRoutes); // use role routes
app.use('/api', employeeRoutes);
app.use('/api', UserRoutes);
app.use('/api', LeaveRequestRoutes);

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB is connected")) // Log success message if connected.
    .catch(err => console.log(err)); // Log error if there's a problem connecting to MongoDB.

// Routes
// app.use("/api", routes); // Use the imported routes for any requests to /api endpoint.

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}...`); // Log the port the server is running on.
});


//api.use() :  For example: app.use('/apple', ...) will match “/apple”, “/apple/images”, “/apple/images/news”, and so on.