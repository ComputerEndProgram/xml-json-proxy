# XML to JSON Live Proxy

Live-convert any RSS/XML feed into JSON using Docker.

---

## ✅ What it does

- Fetches an XML feed (e.g. RSS)
- Converts it live to JSON
- Serves it via `/feed.json`

---

## 🧰 Requirements

- A system with [Docker installed](https://docs.docker.com/get-docker/)

---

## 🚀 Setup Guide

### 0. Install Docker (if not already installed)

Follow the official guide:  
👉 https://docs.docker.com/get-docker/

---

### 1. Clone this repo

```bash
git clone https://github.com/ComputerEndProgram/xml-json-proxy.git
```

---

### 2. Enter the folder

```bash
cd xml-json-proxy
```

---

### 3. Edit the XML feed URL

```bash
sudo nano index.js
```

- Go to **line 7**:
  ```js
  const XML_URL = "https://example.com/feed.xml";
  ```

- Change the URL to your own XML/RSS feed  
- Then press: `Ctrl + X`, type `Y`, then `Enter` to save

---

### 4. Build the Docker image

```bash
docker build -t xml-json-proxy .
```

---

### 5. Run it in detached mode (auto-restarts on reboot)

```bash
docker run -d --restart unless-stopped -p 5000:5000 xml-json-proxy
```

---

### 6. Access your live JSON feed

```bash
curl http://<your-server-ip>:5000/feed.json
```

Or open it in a browser:  
`http://<your-server-ip>:5000/feed.json`

---

### 7. ✅ Enjoy your auto-converted JSON feed!

---

## 🛠 Notes

- To stop the container:
  ```bash
  docker ps    # get the container ID
  docker stop <container-id>
  ```

- To update the feed URL again, repeat step 3 and then re-run steps 4 and 5.

---

## 📄 License

MIT License
