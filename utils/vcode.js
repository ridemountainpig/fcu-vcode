import axios from 'axios';
import { promises as fs } from 'fs';
import FormData from 'form-data';

async function send_image_to_url(filePath) {
    const fcuVcodeUrl = 'https://fcu-vcode-api.ridemountainpig.repl.co/validate';

    try {
        const image_data = await fs.readFile(filePath);

        const formData = new FormData();
        formData.append('file', image_data, 'image.png');

        const response = await axios.post(fcuVcodeUrl, formData, {
            headers: formData.getHeaders(),
        });

        return response.data.vcode;

    } catch (error) {
        console.error('Error:', error.message);
    }
}

export default send_image_to_url;