import fs from "node:fs/promises";
import { v4 as uuidv4 } from "uuid";

const ghostFile = "ghosts.json";

// Get all ghosts from ghosts.json
export async function getGhosts(ghostFile) {
  try {
    const data = await fs.readFile(ghostFile, "utf-8");
    const jsonData = JSON.parse(data);
    return jsonData;
  } catch (error) {
    console.error("Error reading file:", error);
  }
}

// Get a ghost by ID
export async function getGhostByID(id) {
  try {
    const data = await fs.readFile(ghostFile, "utf-8");
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
    const data = await fs.readFile(ghostFile, "utf-8");

    const jsonData = JSON.parse(data);

    const newGhostID = uuidv4();

    newGhost.id = newGhostID;
    jsonData.push(newGhost);

    await fs.writeFile(ghostFile, JSON.stringify(jsonData, null, 2));

    return newGhost;
  } catch (error) {
    console.error("Error creating ghost:", error);
  }
}

// Update a ghost by ID
export async function updateGhostByID(id, updatedGhost, ghostFile) {
  try {
    const data = await fs.readFile(ghostFile, "utf-8");

    const jsonData = JSON.parse(data);

    const index = jsonData.findIndex((ghost) => ghost.id === id);

    if (index !== -1) {
        jsonData[index] = { ...jsonData[index], ...updatedGhost };

        await fs.writeFile(ghostFile, JSON.stringify(jsonData, null, 2));

        return jsonData[index];
    } else {
        throw new Error(`Ghost with ID ${id} not found.`);
    }
  } catch (error) {
    console.error("Error updating ghost:", error);
  }
}

// Delete a ghost by ID
export async function deleteGhostByID(id) {
  try {
    const data = await fs.readFile(ghostFile, "utf-8");

    const jsonData = JSON.parse(data);

    const index = jsonData.findIndex((ghost) => ghost.id === id);

    if (index !== -1) {
        const deletedGhost = jsonData.splice(index, 1)[0];

        await fs.writeFile(ghostFile, JSON.stringify(jsonData, null, 2));

        return deletedGhost;
    } else {
        throw new Error(`Ghost with ID ${id} not found.`);
    }
  } catch (error) {
    console.error("Error deleting ghost:", error);
  }
}
