import { Repository } from './repo';
export interface RepositoryShort {
    name: string;
    owner: string;
    lastUpdated: string;
}
export declare class Bintray {
    private subject;
    private rest;
    constructor(username: string, apikey: string, subject?: string, apiBaseUrl?: string, customBent?: typeof import('bent'));
    getRepositories: () => Promise<RepositoryShort[]>;
    repository: (repo: string) => Repository;
}
