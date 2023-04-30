# random-joke-and-AI-image-generator
React Native mobile app that shows a list of random jokes from jokes API and then with openAI API generates image based on the joke of your choice




## Deployment

Instruction to deploy this project:

1. run:
```bash
  git clone https://github.com/akatsay/random-joke-and-AI-image-generator.git
```
```bash
  npm i
```
2. you'll need to install expo-cli:
```bash
   npm install expo-cli --global
```

## 3. configuring API key

go to https://platform.openai.com/account/api-keys and reserve your API key

```javascript
/*
you can create folder secret and file secret.ts
and then import it like this:
*/

// src/secret/secret.ts demo:
const API: string = // Pass your open AI API key
export default API
//

import API from '../secret/secret';

const fetchImage = useCallback( async () => {
  const configuration = new Configuration({
    apiKey: API, // or you can simply pass API key here
    })
...

/* 
IMPORTANT NOTICE, it's better to handle this logic
on the server and keep API keys in env variables but since it's just a demo not intended for production I decided to omit it. 
*/
```


### Running the app

You can either install SDKs from: https://expo.dev/tools

Or install expoGo app on your device

then run:
```bash
  npx expo start
```

and either scan the code in the console with expoGo app on your device or use SDKs
