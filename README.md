# XML to JSON Live Proxy

A simple Dockerized Node.js service that fetches a remote XML/RSS feed, converts it live to JSON, and serves it over HTTP.

---

## 🛠 Features

- Live XML-to-JSON conversion (no caching)
- Always fetches from:  
  `https://server106admin.duckdns.org/rss.xml`
- Outputs JSON at:  
  `http://localhost:5000/feed.json`
- Lightweight and fully containerized

---

## 🚀 Quick Start

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/xml-json-proxy.git


```bash
cd xml-json-proxy





---

2. Build the Docker image

docker build -t xml-json-proxy .


---

3. Run the container in detached mode with restart enabled

docker run -d --restart unless-stopped -p 5000:5000 xml-json-proxy

-d runs it in the background

--restart unless-stopped ensures it auto-starts on boot or crash



---

4. Access the live JSON feed

Open in your browser or use curl:

curl http://localhost:5000/feed.json


---

🔧 Development Mode (without Docker)

To run locally (Node.js 18+ required):

cd xml-json-proxy
npm install
node index.js

Then open:
http://localhost:5000/feed.json


---

🛠 Configuration

To change the RSS/XML source, edit the XML_URL in index.js:

const XML_URL = "https://your-feed-url.com/rss.xml";


---

📜 License

MIT License


---

🤝 Contributing

Pull requests welcome! If you find a bug or have a feature request, feel free to open an issue.


---

✉️ Contact

Maintained by [Your Name].
Questions or ideas? Reach out via GitHub Issues.
