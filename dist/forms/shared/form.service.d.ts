import { Model } from 'mongoose';
import { Form } from './form';
export declare class FormService {
    private readonly formModel;
    constructor(formModel: Model<Form>);
    getAll(): Promise<Form[]>;
    getById(id: string): Promise<Form>;
    create(form: Form): Promise<Form>;
    update(id: string, form: Form): Promise<Form>;
}
