//for custom server path url

const express = require('express');
const next = require('next');

const port = parseInt(process.env.PORT) || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({dev});

const handle = app.getRequestHandler();

app.prepare().then(() => {
    const server = express();

    server.get("/blog/detail/:id", (req, res) => {
        return app.render(req, res, "details", { id: req.params.id });
    });

    server.get("*", (req, res) => {
        return handle(req, res);
    })

    server.listen(port, err => {
        if (err) throw err;
        console.log(`ready on port ${port}`);
    })
});