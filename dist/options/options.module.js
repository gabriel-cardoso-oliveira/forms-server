"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OptionsModule = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const common_1 = require("@nestjs/common");
const options_controller_1 = require("./options.controller");
const option_service_1 = require("./shared/option.service");
const option_schema_1 = require("./schemas/option.schema");
let OptionsModule = class OptionsModule {
};
OptionsModule = __decorate([
    common_1.Module({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: 'Option', schema: option_schema_1.OptionSchema }]),
        ],
        controllers: [options_controller_1.OptionsController],
        providers: [option_service_1.OptionService],
    })
], OptionsModule);
exports.OptionsModule = OptionsModule;
//# sourceMappingURL=options.module.js.map