import { Test } from './test';
import { Model } from 'mongoose';
export declare class TestService {
    private readonly testModel;
    constructor(testModel: Model<Test>);
    getAll(): Promise<Test[]>;
    getById(id: string): Promise<Test>;
    create(test: Test): Promise<Test>;
    update(id: string, test: Test): Promise<Test>;
}
