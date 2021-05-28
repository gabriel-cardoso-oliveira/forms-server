import { Form } from './shared/form';
import { FormService } from './shared/form.service';
export declare class FormsController {
    private formService;
    constructor(formService: FormService);
    getAll(): Promise<Form[]>;
    getById(id: string): Promise<Form>;
    create(form: Form): Promise<Form>;
    update(id: string, form: Form): Promise<Form>;
}
