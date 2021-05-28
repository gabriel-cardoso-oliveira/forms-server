import { Test } from './shared/test';
import { TestService } from './shared/test.service';
export declare class TestsController {
    private testService;
    constructor(testService: TestService);
    getAll(): Promise<Test[]>;
    getById(id: string): Promise<Test>;
    create(test: Test): Promise<Test>;
    update(id: string, test: Test): Promise<Test>;
}
