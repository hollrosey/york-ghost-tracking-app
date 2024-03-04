import express from "express";

import { createGhost, deleteGhostByID, getGhostByID, getGhosts, updateGhostByID } from "./functions.js";

const app = express();
const PORT = 3000;
const ghostFile = "ghosts.json";

app.use(express.static("public"));
app.use(express.json());


// Middleware to log to the console every request we get
// HTTP method and the requested path WORKING
app.use(function (req, res, next) {
    console.log(`Request received as ${req.method} request to ${req.path}`);
    next();
  });

// Write a get request for all ghosts WORKING
app.get("/ghosts", async function (req, res) {

    let ghosts = await getGhosts(ghostFile);

    res.status(200).json({ success: true, payload: ghosts })
});

// Write a get request for get ghost by ID (not working correctly)
app.get("/ghosts/:id", async function (req, res) {

    const id = req.params.id;

    const getByID = await getGhostByID(id);

    res.status(200).json({ success: true, payload: getByID })
});

// Write a post request to add a new ghost
app.post("/ghosts", async function (req, res) {

    const newGhost = req.body;

    const createdGhost = await createGhost(newGhost, "ghosts.json");

    res.status(200).json({ success: true, payload: createdGhost})
});

// Write a patch request to update ghost by ID (not working correctly)
app.patch("/ghosts/:id", async function (req, res) {

    const ghostID = req.params.id;

    const updatedData = req.body;

    const updatedGhost = await updateGhostByID(
        ghostID,
        updatedData,
        "ghosts.json"
    );

    res.status(200).json({ success: true, payload: updatedData })
});

// Write a delete request to delete a recipe WORKING
app.delete("/ghosts/:id", async function (req, res) {

    const ghostID = req.params.id;

    const deletedGhost = await deleteGhostByID(ghostID, "ghosts.json");

    res.status(200).json({ success: true, payload: deletedGhost })
});


app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });

  // TODO:
  // Debug get by ID and patch by ID (only getting same ghost)