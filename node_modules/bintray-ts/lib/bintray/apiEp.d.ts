import { Rest, SuccessMessage } from './rest';
export declare class ApiEP<InfoType, DataType> {
    protected createBase: string;
    protected itemName: string;
    protected rest: Rest;
    protected apiBase: string;
    constructor(createBase: string, itemName: string, rest: Rest);
    info: () => Promise<InfoType>;
    create: (data: Pick<DataType, Exclude<keyof DataType, "name">>) => Promise<InfoType>;
    delete: () => Promise<SuccessMessage>;
    update: (pkg: Partial<DataType>) => Promise<SuccessMessage>;
}
