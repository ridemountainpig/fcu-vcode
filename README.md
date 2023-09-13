![CleanShot 2023-09-01 at 15 00 30@2x](https://github.com/ridemountainpig/fcu-vcode/assets/92412722/64ed5b69-d5ef-4896-8c7b-6d1213ca6b8b)

# FCU VCode
FCU VCode is an API designed to identify and validate FCU codes accurately.

## Usage
Send your validate code image to vcode api, it will return the validate code number, and you can use it anywhere you want.

#### To use api with `python`, follow these steps:

1. run pip install requests
2. change IMAGE_PATH in code to your validate code image path.

```python

import requests

def vcode(file_path):
    fcu_vcode_url = 'https://fcu-vcode-api.zeabur.app/validate'
    with open(file_path, 'rb') as file:
        image_data = file.read()

    files = {'file': ('image.png', image_data, 'image/png')}

    response = requests.post(fcu_vcode_url, files=files)

    if response.status_code == 200:
        print("Request was successful!")
        print("Response:", response.text)
    else:
        print(f"Request failed with status code: {response.status_code}")
        print("Response:", response.text)

if __name__ == "__main__":
    vcode(IMAGE_PATH)

```

#### To use api with `javascript`, follow these steps:

1. run npm install axios fs form-data
2. change IMAGE_PATH in code to your validate code image path.

```javascript

import axios from 'axios';
import { promises as fs } from 'fs';
import FormData from 'form-data';

async function vcode(file_path) {
    const fcuVcodeUrl = 'https://fcu-vcode-api.zeabur.app/validate';
    try {
        const image_data = await fs.readFile(file_path);

        const formData = new FormData();
        formData.append('file', image_data, 'image.png');

        const response = await axios.post(fcuVcodeUrl, formData, {
            headers: formData.getHeaders(),
        });

        console.log(response.data);
    } catch (error) {
        console.error('Error:', error.message);
    }
}

(async () => {
    await vcode(IMAGE_PATH);
})();
    
```
