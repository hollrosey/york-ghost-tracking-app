import express from "express";

import {
    // functions
  } from "./functions.js";

const app = express();
const PORT = 3000;

app.use(express.static("public"));
app.use(express.json());

// Middleware to log to the console every request we get
// HTTP method and the requested path
app.use(function (req, res, next) {
    console.log(`Request received as ${req.method} request to ${req.path}`);
    next();
  });

// Write a get request for all ghosts

// Write a get request for get ghost by ID

// Write a post request to add a new ghost

// Write a patch request to update ghost by ID

// Write a delete request to delete a recipe

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });