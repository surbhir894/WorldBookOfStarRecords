const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/registrationDB")

// Create a schema for the registration form data
const userSchema = mongoose.Schema({
    name: { type: String, required: true },
    guardianName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String },
    dob: { type: Date, required: true },
    organization: { type: String },
    qualification: { type: String, required: true },
    qualificationDocuments: { type: String },
    specialQualification: { type: String },
    streetAddress: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    zipCode: { type: String },
    country: { type: String, required: true },
    passportPhoto: { type: String },
    consent: { type: Boolean, required: true },
});

module.exports = mongoose.model('User', userSchema);

