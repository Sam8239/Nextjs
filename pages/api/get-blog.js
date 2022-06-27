import fs from "fs";

// http://localhost:3000/api/get-blog?slug=ne

export default function handler(req, res) {
  fs.readFile(
    `blog-data/how-to-learn-${req.query.slug}.json`,
    "utf8",
    (err, data) => {
      // console.log(req.query.slug);
      if (err) {
        res.status(404).json({ Error: "Blog Not found" });
        return;
      }
      res.status(200).json(JSON.parse(data));
    }
  );
}
