import fs from "fs";
// All blogs are stored in the blog-data folder.
export default async function handler(req, res) {
  let data = await fs.promises.readdir("blog-data"); // Read all files in the blog-data folder.
  let allBlogs = [];
  for (let index = 0; index < data.length; index++) {
    let myfile = await fs.promises.readFile("blog-data/" + data[index], "utf8");
    allBlogs.push(JSON.parse(myfile));
  }

  res.status(200).json(allBlogs);
}
