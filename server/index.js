"use strict";
exports.__esModule = true;
var fastify_1 = require("fastify");
var dotenv_1 = require("dotenv");
var routes_1 = require("./routes/routes");
var path_1 = require("path");
var fs_1 = require("fs");
var fastify_static_1 = require("fastify-static");
dotenv_1["default"].config();
var PORT = process.env.PORT || 3001;
var app = (0, fastify_1["default"])({ logger: false });
app.register(fastify_static_1["default"], {
    root: path_1["default"].join(__dirname, '../ui/build')
});
app.register(routes_1.routes, { prefix: '/api' });
app.get('*', function (req, res) {
    var stream = fs_1["default"].createReadStream(path_1["default"].resolve(__dirname, '../ui/build', 'index.html'));
    res.type('text/html').send(stream);
});
app.listen(PORT).then(function () {
    console.log('Listening on port', PORT);
});
