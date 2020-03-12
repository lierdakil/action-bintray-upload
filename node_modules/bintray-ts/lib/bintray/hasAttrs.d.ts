/// <reference types="bent" />
import { Rest } from './rest';
import { ApiEP } from './apiEp';
export declare type Attributes = Attribute[];
export declare type Attribute = {
    name: string;
    values: string[];
    type: 'string';
} | {
    name: string;
    values: string[];
    type: 'date';
} | {
    name: string;
    values: number[];
    type: 'number';
} | {
    name: string;
    values: boolean[];
    type: 'boolean';
} | {
    name: string;
    values: string[];
    type: 'version';
};
export declare class HasAttrs<ItemType, DataType> extends ApiEP<ItemType, DataType> {
    constructor(createBase: string, itemName: string, rest: Rest);
    getAttrs: (attributes: string[]) => Promise<import("bent").Json>;
    setAttrs: (data: Attributes) => Promise<import("bent").Json>;
    deleteAttrs: (attributes: string[]) => Promise<import("./rest").SuccessMessage>;
    updateAttrs: (data: Attributes) => Promise<import("./rest").SuccessMessage>;
}
