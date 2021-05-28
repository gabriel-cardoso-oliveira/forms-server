"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OptionSchema = void 0;
const mongoose = require("mongoose");
exports.OptionSchema = new mongoose.Schema({
    description: String,
    response: Boolean,
    question_id: String,
});
//# sourceMappingURL=option.schema.js.map