"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.addUser = exports.getOne = exports.getAll = void 0;
const user_1 = __importDefault(require("../model/user"));
const getAll = async (req, res) => {
    try {
        const users = await user_1.default.find();
        return res.json(users);
    }
    catch (err) {
        return res.status(500).json(err);
    }
};
exports.getAll = getAll;
const getOne = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await user_1.default.findById({ _id: id });
        return res.status(200).json(user);
    }
    catch (err) {
        return res.status(500).json(err);
    }
};
exports.getOne = getOne;
const addUser = async (req, res) => {
    try {
        const newUser = await user_1.default.create(req.body);
        return res.status(201).json(newUser);
    }
    catch (err) {
        return res.status(500).json(err);
    }
};
exports.addUser = addUser;
const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        const deleteUser = await user_1.default.findOneAndDelete({ _id: id });
        return res.status(200).json(deleteUser);
    }
    catch (err) {
        return res.status(500).json(err);
    }
};
exports.deleteUser = deleteUser;
//# sourceMappingURL=controller.js.map