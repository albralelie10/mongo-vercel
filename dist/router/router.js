"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const controller_1 = require("../controller/controller");
const router = express_1.default.Router();
router.route("/users").get(controller_1.getAll).post(controller_1.addUser);
router.route("/users/:id").get(controller_1.getOne).delete(controller_1.deleteUser);
exports.default = router;
//# sourceMappingURL=router.js.map