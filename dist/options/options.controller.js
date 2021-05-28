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
exports.OptionsController = void 0;
const common_1 = require("@nestjs/common");
const option_1 = require("./shared/option");
const option_service_1 = require("./shared/option.service");
let OptionsController = class OptionsController {
    constructor(optionService) {
        this.optionService = optionService;
    }
    async getAll() {
        return this.optionService.getAll();
    }
    async getById(id) {
        return this.optionService.getById(id);
    }
    async create(option) {
        return this.optionService.create(option);
    }
    async update(id, option) {
        return this.optionService.update(id, option);
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], OptionsController.prototype, "getAll", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], OptionsController.prototype, "getById", null);
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [option_1.Option]),
    __metadata("design:returntype", Promise)
], OptionsController.prototype, "create", null);
__decorate([
    common_1.Put(':id'),
    __param(0, common_1.Param('id')),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, option_1.Option]),
    __metadata("design:returntype", Promise)
], OptionsController.prototype, "update", null);
OptionsController = __decorate([
    common_1.Controller('options'),
    __metadata("design:paramtypes", [option_service_1.OptionService])
], OptionsController);
exports.OptionsController = OptionsController;
//# sourceMappingURL=options.controller.js.map