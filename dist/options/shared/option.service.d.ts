import { Model } from 'mongoose';
import { Option } from './option';
export declare class OptionService {
    private readonly optionModel;
    constructor(optionModel: Model<Option>);
    getAll(): Promise<Option[]>;
    getById(id: string): Promise<Option>;
    create(option: Option): Promise<Option>;
    update(id: string, option: Option): Promise<Option>;
}
