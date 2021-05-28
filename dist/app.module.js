"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const tests_module_1 = require("./tests/tests.module");
const mongoose_1 = require("@nestjs/mongoose");
const options_module_1 = require("./options/options.module");
const questions_module_1 = require("./questions/questions.module");
const forms_module_1 = require("./forms/forms.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [
            mongoose_1.MongooseModule.forRoot('mongodb+srv://db_user:xGZyuYYWkprJ17Yu@cluster0.h9bhi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'),
            tests_module_1.TestsModule,
            options_module_1.OptionsModule,
            questions_module_1.QuestionsModule,
            forms_module_1.FormsModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map