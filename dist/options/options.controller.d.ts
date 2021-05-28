import { Option } from './shared/option';
import { OptionService } from './shared/option.service';
export declare class OptionsController {
    private optionService;
    constructor(optionService: OptionService);
    getAll(): Promise<Option[]>;
    getById(id: string): Promise<Option>;
    create(option: Option): Promise<Option>;
    update(id: string, option: Option): Promise<Option>;
}
