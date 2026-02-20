import puppeteer from "puppeteer";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  const filePath = "file://" + path.join(__dirname, "build/index.html");

  await page.goto(filePath, { waitUntil: "networkidle0" });

  await page.pdf({
    path: "output.pdf",
    format: "A4",
    printBackground: true,
    outline: true,          // ⭐ THIS enables bookmarks
    tagged: true            // optional but recommended
  });

  await browser.close();
})();