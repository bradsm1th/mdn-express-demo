// Import the mongoose module
const mongoose = require("mongoose");

// Set `strictQuery: false` to globally opt into filtering by properties that aren't in the schema
// Included because it removes preparatory warnings for Mongoose 7.
// See: https://mongoosejs.com/docs/migrating_to_6.html#strictquery-is-removed-and-replaced-by-strict
mongoose.set("strictQuery", false);

// Define the database URL to connect to.
const mongoDB = "mongodb://127.0.0.1/my_database";

// Wait for database to connect, logging an error if there is a problem
main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect(mongoDB);
}

// console.log("/////  mongoose.connection \\\\\\\\\\");
// console.log(mongoose.connection);
// console.log("I am groot");
// console.log("\\\\\\\\\\  mongoose.connection /////");


// create and define a basic Schema
const Schema = mongoose.Schema;
const someSchemaToModel = new Schema({
    some_property: String, // name: Type
    some_other_prop: Date,
})

// compile that schema into a model
const someModel = mongoose.model("SomeModel", someSchemaToModel); // ("name of model", schema to use)

async function test() {
    // create an instance (in JS) before saving it to DB
    const awesome = new someModel({ some_property: "boobs" });
    // save it
    console.log(awesome.some_property, "<- logged property before");
    await awesome.save();
    awesome.some_property = "bigger boobs";
    console.log(awesome.some_property, "<- logged property after");
}
test();