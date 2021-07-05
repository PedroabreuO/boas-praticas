"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
app.use(express_1.default.json());
app.get('/', (request, response) => {
    response.json({
        message: 'Hello World!',
    });
});
app.listen(3333, () => {
    console.log('App running on port 3333!');
});
