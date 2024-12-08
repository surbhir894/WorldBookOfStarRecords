const express = require('express');
const multer = require('multer');
const cors = require('cors');
const path = require('path');
const userModel = require('./models/userModel')


// Initialize the app and set up middleware
const app = express();
app.use(cors()); // Allow cross-origin requests
app.use(express.json()); // Parse JSON request bodies

// Set up multer for handling file uploads
const upload = multer({ dest: 'uploads/' }); // Files will be stored in the 'uploads' directory

// POST route for handling registration form submission
app.post('/register', upload.fields([
    { name: 'qualificationDocuments', maxCount: 1 },
    { name: 'passportPhoto', maxCount: 1 }
]), async (req, res) => {
    const { name, guardianName, email, phone, dob, organization, qualification, specialQualification, streetAddress, city, state, zipCode, country, consent } = req.body;

    const qualificationDocuments = req.files['qualificationDocuments'] ? req.files['qualificationDocuments'][0] : null;
    const passportPhoto = req.files['passportPhoto'] ? req.files['passportPhoto'][0] : null;

    try{
        
    // Create model in 1 Dec 2024 by Rinky Rathore :)
    let createdUser = await userModel.create({ name, guardianName, email, phone, dob, organization, qualification, specialQualification, streetAddress, city, state, zipCode, country, consent });

    // You can save the form data to a database or process it here
    // console.log('Received form data:', createdUser);

    // Send success response
    res.status(200).json({ message: 'Registration successful!' });

    }
    catch(err){
        console.log('err---------', err);

    }

});

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
