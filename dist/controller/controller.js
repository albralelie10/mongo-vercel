"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.addUser = exports.getOne = exports.getAll = void 0;
const user_1 = __importDefault(require("../model/user"));
const getAll = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield user_1.default.find();
        return res.json(users);
    }
    catch (err) {
        return res.status(500).json(err);
    }
});
exports.getAll = getAll;
const getOne = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const user = yield user_1.default.findById({ _id: id });
        return res.status(200).json(user);
    }
    catch (err) {
        return res.status(500).json(err);
    }
});
exports.getOne = getOne;
const addUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newUser = yield user_1.default.create(req.body);
        return res.status(201).json(newUser);
    }
    catch (err) {
        return res.status(500).json(err);
    }
});
exports.addUser = addUser;
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const deleteUser = yield user_1.default.findOneAndDelete({ _id: id });
        return res.status(200).json(deleteUser);
    }
    catch (err) {
        return res.status(500).json(err);
    }
});
exports.deleteUser = deleteUser;
//# sourceMappingURL=controller.js.map