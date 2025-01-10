"use server"
import fs from "fs/promises";

export const sumbit = async (e) => {
    let a = await fs.writeFile("file.txt", `Name is ${e.get("name")} and Address is ${e.get("add")}`);
}