# 🔓 HTML Deobfuscator Web App

A simple, self-hosted web application that removes obfuscation from HTML files (like those protected by PhpKobo) and returns a clean, readable, and fully functional HTML file.

This tool uses a headless browser (via Puppeteer) to render the page, execute the obfuscated scripts, and then strip out all the garbage code, leaving only the final clean output.

## ✨ Features

- **Drag & Drop UI**: Simple web interface to upload your obfuscated `.html` files.
- **Headless Browser Execution**: Uses Puppeteer (Chromium) to accurately render and deobfuscate complex JavaScript.
- **Clean Output**: Removes obfuscated `<script>` tags, HTML comments, encrypted strings, and duplicate meta tags.
- **Local & Private**: Runs entirely on your own machine. No files are sent to a third-party server.
- **Cross-Platform**: Works on Windows, macOS, and Linux.

---

## 🛠️ Prerequisites

Before you begin, ensure you have the following installed:

1. **Node.js** (v18 or later recommended)  
   👉 [Download Node.js](https://nodejs.org/)
2. **Google Chrome** or **Chromium**  
   Puppeteer will download a compatible version of Chromium automatically during installation, but having Chrome installed can help.
3. **Git** (Optional, for cloning the repository)  
   👉 [Download Git](https://git-scm.com/)

---

## 🚀 Installation & Setup

### Step 1: Get the Code
You can either clone the repository or download the ZIP and extract it.

```bash
git clone https://github.com/YOUR_USERNAME/html-deobfuscator-webapp.git
cd html-deobfuscator-webapp

(Replace YOUR_USERNAME with your actual GitHub username).
''''
Step 2: Install Dependencies
Open your terminal (Command Prompt, PowerShell, or Terminal) in the project folder and run:

bash
npm install
Note: This might take a minute or two because it will download Chromium for Puppeteer (approx. 150MB).

Step 3: Start the Server
Once the installation is complete, start the local server:

bash
node server.js
You should see a message in your terminal:

text
Webapp running at http://localhost:3000
🖥️ How to Use
Open your web browser (Chrome, Edge, Firefox, etc.) and go to:
http://localhost:3000

You will see the HTML Deobfuscator interface.

Drag and drop your obfuscated .html file into the dashed box (or click the box to select a file).

Click the "🚀 Deobfuscate & Download" button.

Wait a few seconds while the bot processes the file.

Your browser will automatically download a new file named yourfile_decrypted.html.

Open that downloaded file in your browser, and it should now be clean, readable, and free of any obfuscation code!

🧰 Troubleshooting
Problem	Solution
Error: Cannot find module 'express'	You forgot to run npm install. Run it in the project folder.
Error: listen EADDRINUSE: address already in use :::3000	Another app is using port 3000. Change the port in server.js (e.g., const PORT = 3001;) and restart.
Puppeteer fails to launch Chrome	Ensure Google Chrome is installed. If it still fails, try running the terminal as Administrator.
The output file is empty or corrupted	The obfuscation might be too complex or use a different method. Open an issue with a sample file.
npm install hangs or fails	Ensure you have a stable internet connection. The download is large.
🏗️ Project Structure
text
html-deobfuscator-webapp/
├── public/
│   └── index.html          # Frontend UI (HTML/CSS/JS)
├── uploads/                # Temporary folder for uploaded files (auto-created)
├── deobfuscator.js         # Core logic: launches browser, cleans HTML
├── server.js               # Express server: handles uploads & downloads
├── package.json            # Project dependencies & scripts
└── README.md               # This file
🤝 Contributing
Contributions are welcome! If you have a better way to clean the HTML or want to add features:

Fork the repository.

Create a new branch (git checkout -b feature/AmazingFeature).

Commit your changes (git commit -m 'Add some AmazingFeature').

Push to the branch (git push origin feature/AmazingFeature).

Open a Pull Request.

📜 License
This project is licensed under the MIT License. You are free to use, modify, and distribute it as you see fit.

⚠️ Disclaimer
This tool is for educational and personal use only. Always respect the terms of service of the websites you are interacting with. The developers are not responsible for any misuse of this tool.

Enjoy clean code! 🎉


