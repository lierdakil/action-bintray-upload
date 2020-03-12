import bent = require('bent');
declare type JsonR = bent.RequestFunction<bent.Json>;
declare type SMR = bent.RequestFunction<SuccessMessage>;
export declare type SuccessMessage = {
    message: 'success';
};
export declare class Rest {
    readonly get: JsonR;
    readonly post: JsonR;
    readonly postOK: JsonR;
    readonly del: SMR;
    readonly patch: SMR;
    readonly put: SMR;
    constructor(baseUrl: string, username: string, apiKey: string, customBent?: typeof bent);
}
export {};
