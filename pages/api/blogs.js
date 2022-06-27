import fs from "fs";
// All blogs are stored in the blog-data folder.
export default function handler(req, res) {
  fs.readdir("blog-data", "utf8", (err, data) => {
    console.log(data);
    if (err) {
      console.error(err);
      return;
    }
    res.status(200).json({ data });
  });
}
