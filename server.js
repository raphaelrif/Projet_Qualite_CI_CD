const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("Hello CI/CD !");
});

// Ne démarre pas le serveur directement si c'est un test
if (require.main === module) {
    app.listen(port, () => {
        console.log(`Serveur en écoute sur le port ${port}`);
    });
}

module.exports = app;