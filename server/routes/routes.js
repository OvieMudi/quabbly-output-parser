"use strict";
exports.__esModule = true;
exports.routes = void 0;
var parserController_1 = require("../controllers/parserController");
function routes(fastify, options, done) {
    try {
        fastify.post('/', parserController_1.parserController.getOutputFromInterface);
        fastify.get('/', parserController_1.parserController.getSample);
        done();
    }
    catch (error) {
        console.error(error);
        done(error);
    }
}
exports.routes = routes;
;
