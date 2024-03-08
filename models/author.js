const mongoose = require('mongoose');

// add luxon module for help formatting dates
const { DateTime } = require("luxon");

const Schema = mongoose.Schema;

const AuthorSchema = new Schema({
    first_name: { type: String, required: true, maxLength: 100 },
    family_name: { type: String, required: true, maxLength: 100 },
    date_of_birth: { type: Date },
    date_of_death: { type: Date },
})

// virtual prop to create full author name
AuthorSchema.virtual('name').get(function () {
    let fullName = "";
    // logical short-circuit: don't do this if either name field is empty
    if (this.first_name && this.family_name) {
        fullName = `${this.family_name}, ${this.first_name}`;
    }
    return fullName;
})

// virtual for author's URL
AuthorSchema.virtual('url').get(function () {
    return `/catalog/author/${this._id}`;
});

// virtual for formatted date string
// "yyyy" for "2024", "1932", etc.
AuthorSchema.virtual('birth_year').get(function () {
    return this.date_of_birth 
    ? DateTime.fromJSDate(this.date_of_birth).toFormat("yyyy")
    : "n/a"
  });
AuthorSchema.virtual('death_year').get(function () {
    return this.date_of_death 
    ? DateTime.fromJSDate(this.date_of_death).toFormat("yyyy")
    : "n/a"
  });


// export new model
module.exports = mongoose.model('Author', AuthorSchema);