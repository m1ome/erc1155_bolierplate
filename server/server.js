const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const tokens = {
    0: {
        image: "https://cataas.com/cat",
        external_url: "https://cataas.com",
        description: "Random cat ERC1155 NFT",
        name: "Random cat token #0"
    },
    1: {
        image: "https://cataas.com/cat",
        external_url: "https://cataas.com",
        description: "Random cat ERC1155 NFT",
        name: "Random cat token #1"
    }
}

app.get('/api/:token.json', function(req, res) {
    const token = parseInt(req.params.token);
    const metadata = tokens[token];

    res.json({
        image: metadata.image,
        external_url: metadata.external_url,
        description: metadata.description,
        name: metadata.name,
    });
});

app.listen(port || 3000, () => {
    console.log(`Example app listening on port ${port}`)
})