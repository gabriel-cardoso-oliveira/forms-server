"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuestionService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let QuestionService = class QuestionService {
    constructor(questionModel) {
        this.questionModel = questionModel;
    }
    async getAll() {
        return await this.questionModel.find().exec();
    }
    async getById(id) {
        return await this.questionModel.findById(id).exec();
    }
    async create(question) {
        const createdQuestion = new this.questionModel(question);
        return await createdQuestion.save();
    }
    async update(id, question) {
        await this.questionModel.updateOne({ _id: id }, question).exec();
        return this.getById(id);
    }
};
QuestionService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel('Question')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], QuestionService);
exports.QuestionService = QuestionService;
//# sourceMappingURL=question.service.js.map