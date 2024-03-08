const Author = require("../models/author");
const asyncHandler = require("express-async-handler");

// Show list of all authors
const author_list = asyncHandler(async function(req, res, next) {
    const allAuthors = await Author.find().sort({ family_name: 1 }).exec();

    res.render("author_list", {
        title: `Author List (${allAuthors.length})`,
        author_list: allAuthors,
    })
});

// Show detail page for one author
const author_detail = asyncHandler(async function (req, res, next) {
    res.send(`<NOT DONE YET>: Author detail: ${req.params.id}`);
});

// Show "create new author" form (off GET req)
const author_create_get = asyncHandler(async function(req, res, next) {
    res.send("<NOT DONE YET>: Author create / GET");
});

// Create new author (off POST)
const author_create_post = asyncHandler(async function (req, res, next) {
    res.send("<NOT DONE YET>: Author create / POST");
});

// Show "delete author" form (off GET)
const author_delete_get = asyncHandler(async function(req, res, next) {
    res.send("<NOT DONE YET>: Author delete / GET");
});

// Delete author (off POST)
const author_delete_post = asyncHandler(async function (req, res, next) {
    res.send("<NOT DONE YET>: Author delete / POST");
});

// Update author (GET)
const author_update_get = asyncHandler(async function (req, res, next) {
    res.send("<NOT DONE YET>: Author update / GET");
});

// Update author (POST)
const author_update_post = asyncHandler(async function (req, res, next) {
    res.send("<NOT DONE YET>: Author update / POST");
});

module.exports = {
    author_list,
    author_detail,
    author_create_get,
    author_create_post,
    author_delete_get,
    author_delete_post,
    author_update_get,
    author_update_post,
}