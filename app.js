const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname, "dist")));

app.get("*", (req, res) => {
	let url = req.originalUrl.slice(1);
    if (url === "") {
        url = "index.html";
    } else {
        url = url.slice(4);
    }

    res.sendFile(path.join(__dirname, "dist", url));
});

app.listen(process.env.PORT || 8080, () => {
  console.log("Server Started");
});