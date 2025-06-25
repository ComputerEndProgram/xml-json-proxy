const express = require("express");
const axios = require("axios");
const xml2js = require("xml2js");

const app = express();
const PORT = 5000;
const XML_URL = "https://server106admin.duckdns.org/rss.xml";

app.get("/feed.json", async (req, res) => {
  try {
    const response = await axios.get(XML_URL);
    const result = await xml2js.parseStringPromise(response.data, { explicitArray: false });
    res.setHeader("Content-Type", "application/json");
    res.json(result);
  } catch (error) {
    console.error("Failed to fetch/parse XML:", error.message);
    res.status(500).json({ error: "Failed to fetch or convert XML feed." });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 JSON feed server running at http://localhost:${PORT}/feed.json`);
});
