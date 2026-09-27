const express = require('express');
const multer = require('multer');
const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');

const app = express();
// Configure multer to preserve the .html extension
const storage = multer.diskStorage({
    destination: 'uploads/',
    filename: (req, file, cb) => {
        // Create a unique name but keep .html extension
        const unique = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, unique + '.html');
    }
});
const upload = multer({ storage: storage });

app.use(express.static('public'));

app.post('/deobfuscate', upload.single('htmlFile'), (req, res) => {
    const inputFile = req.file.path;  // e.g., uploads/1234567890.html
    const originalName = req.file.originalname;
    const outputFileName = originalName.replace(/\.html?$/i, '_decrypted.html');
    // The deobfuscator.js will create output next to input with same name + '_decrypted.html'
    const outputFile = inputFile.replace(/\.html$/i, '_decrypted.html');

    // Run your working deobfuscator.js on the uploaded file
    exec(`node deobfuscator.js "${inputFile}"`, { cwd: __dirname }, (error, stdout, stderr) => {
        if (error) {
            console.error(`exec error: ${error}`);
            console.error(stderr);
            if (fs.existsSync(inputFile)) fs.unlinkSync(inputFile);
            return res.status(500).json({ error: stderr || error.message });
        }
        console.log(stdout);

        // Check if output file was created
        if (fs.existsSync(outputFile)) {
            res.download(outputFile, outputFileName, (err) => {
                // Cleanup
                if (fs.existsSync(inputFile)) fs.unlinkSync(inputFile);
                if (fs.existsSync(outputFile)) fs.unlinkSync(outputFile);
                if (err) console.error('Download error:', err);
            });
        } else {
            console.error(`Output file not found: ${outputFile}`);
            if (fs.existsSync(inputFile)) fs.unlinkSync(inputFile);
            res.status(500).json({ error: 'Output file not created. Check deobfuscator.js errors.' });
        }
    });
});

// Ensure uploads folder exists
if (!fs.existsSync('uploads')) fs.mkdirSync('uploads');

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Webapp running at http://localhost:${PORT}`));