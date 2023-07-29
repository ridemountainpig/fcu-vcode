import axios from "axios";
import fs from "fs";
import path from "path";

async function downloadImageFromURL(url, destination) {
    try {
        const directoryPath = "./public/vcodeImage"; // Change this to the path of your image directory

        fs.readdir(directoryPath, (err, files) => {
            if (err) {
                console.error("Error reading directory:", err);
                return;
            }

            files.forEach((file) => {
                const filePath = path.join(directoryPath, file);

                fs.unlink(filePath, (err) => {
                    if (err) {
                        console.error("Error deleting file:", err);
                        return;
                    }

                    console.log(`${file} was deleted successfully.`);
                });
            });
        });

        const response = await axios.get(url, { responseType: "arraybuffer" });
        fs.writeFileSync(destination, response.data);
        console.log("Image saved successfully.");
    } catch (error) {
        console.error("Error saving image:", error);
    }
}

export default downloadImageFromURL;
