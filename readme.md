## ECDSA Node

use this keys for tests:

**_private_key1_**=b5eb14905cc959d51556535dabb1b3fa716f41fda82ad09b2fc048a40a137aa9
**_public_key1_**=044df461abd8b9f1f52653c1b4038663c5209994307304a6085baa36860c6fee92a1ab2bd9b6bd057cd683c796b48f50dcdd9f96dc8f9f8b0c2e1ef1430ff19227

**_private_key2_**=19dae9d4879cdd3bf9c9f4b88a443b33800099f3b6600f576cb8c4bcc4fdcb0e
**_public_key2_**=04353e6b3d54907ddaa5aca730a2c6e6f53537bc7d66cdf9bb28140149744576959f0e9825fae20bad6f56dc96a31f12edd0d5d44c3fb92b8215284d29b2861831

**_private_key3_**=f52b4c6e98646456ab36b4394104c616e080360efe3cf8d03b97a9a868e8438c
**_public_key3_**=04e2dfc6efc4e5baa943cb63edc17ab5a6b4c38201e78bec3695f67350f412fac8c772ddfa675b6aee2abad1750c77d3d6cdfd0259fcb49f78ad84f4a0b3a9c5d4

**_private_key4_**=e4ebdfe9cdf78dee73452343ed2afcf0ce10b6b6f180617414920719475a66a1
**_public_key4_**=0482a3aece58ac18740c229416c1b525c08340f589842b08c26f5434a410c2569d926fcc2ad8de394e430fb31fc8875827d0b4712805d72d0205d5548e82d9bffe

the **_sender_** is a private key and the **_receipient_** is a public key

### Client

The client folder contains a [react app](https://reactjs.org/) using [vite](https://vitejs.dev/). To get started, follow these steps:

1. Open up a terminal in the `/client` folder
2. Run `npm install` to install all the depedencies
3. Run `npm run dev` to start the application
4. Now you should be able to visit the app at http://127.0.0.1:5173/

### Server

The server folder contains a node.js server using [express](https://expressjs.com/). To run the server, follow these steps:

1. Open a terminal within the `/server` folder
2. Run `npm install` to install all the depedencies
3. Run `node index` to start the server

The application should connect to the default server port (3042) automatically!

_Hint_ - Use [nodemon](https://www.npmjs.com/package/nodemon) instead of `node` to automatically restart the server on any changes.
