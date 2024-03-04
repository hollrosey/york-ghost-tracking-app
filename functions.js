import fs from "node:fs/promises";
import { v4 as uuidv4 } from "uuid";

const ghostFile = "ghosts.json";

// Get all ghosts from ghosts.json
export async function getGhosts(ghostFile) {
  try {
    const data = await fs.readFile(fileName, "utf-8");
    const jsonData = JSON.parse(data);
    return jsonData;
  } catch (error) {
    console.error("Error reading file:", error);
  }
}

// Get a ghost by ID 
export async function getGhostByID(id) {
  try {
    const data = await fs.readFile(fileName, "utf-8");
    const jsonData = JSON.parse(data);
    const find = jsonData.find(({ id }) => id === id);
    if (find) {
        return find;
    } else {
        throw new Error(`Ghost with id ${id} not found.`);
    }
  } catch (error) {
    console.error("Error reading file:", error);
  }
}

// Create a new ghost
export async function createGhost(newGhost, ghostFile) {
  try {
  } catch (error) {
    console.error("Error creating ghost:", error);
  }
}

// Update a ghost by ID
export async function updateGhostByID(id, updatedGhost, ghostFile) {
  try {
  } catch (error) {
    console.error("Error updating ghost:", error);
  }
}

// Delete a ghost by ID
export async function deleteGhostByID(id) {
  try {
  } catch (error) {
    console.error("Error deleting ghost:", error);
  }
}
