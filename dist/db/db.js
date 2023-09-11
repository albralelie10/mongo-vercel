"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectionDB = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const connectionDB = async (uri) => {
    return mongoose_1.default.connect(uri)
        .then(() => console.log("CONNECT TO DB...."))
        .catch(err => console.log(err));
};
exports.connectionDB = connectionDB;
//# sourceMappingURL=db.js.map