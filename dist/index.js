"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const PORT = process.env.PORT || 3000;
const dotenv_1 = __importDefault(require("dotenv"));
const db_1 = require("./db/db");
const router_1 = __importDefault(require("./router/router"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use("/", router_1.default);
app.get("/", (req, res) => {
    return res.send("Home page");
});
app.listen(PORT, async () => {
    console.log("SERVER RUNNING");
    if (process.env.MONGO_URI) {
        await (0, db_1.connectionDB)(process.env.MONGO_URI);
    }
});
exports.default = app;
//# sourceMappingURL=index.js.map