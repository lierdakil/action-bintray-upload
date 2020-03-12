import { Package } from './package';
import { Rest } from './rest';
import { ApiEP } from './apiEp';
declare type RepositoryType = 'maven' | 'debian' | 'conan' | 'rpm' | 'docker' | 'npm' | 'opkg' | 'nuget' | 'vagrant' | 'generic';
export interface RepositoryData {
    name: string;
    desc: string;
    type?: RepositoryType;
    private?: boolean;
    business_unit?: string;
    labels?: string[];
    gpg_sign_metadata?: boolean;
    gpg_sign_files?: boolean;
    gpg_use_owner_key?: boolean;
    version_update_max_days?: number;
}
export interface RepositoryInfo {
    name: string;
    owner: string;
    type: RepositoryType;
    private: boolean;
    premium: boolean;
    desc: string;
    labels: string[];
    created: string;
    package_count: number;
    gpg_use_owner_key: boolean;
    gpg_sign_files: boolean;
    gpg_sign_metadata: boolean;
}
export interface PackageShort {
    name: string;
    linked: boolean;
}
export declare class Repository extends ApiEP<RepositoryInfo, RepositoryData> {
    private subject;
    private repo;
    constructor(subject: string, repo: string, rest: Rest);
    package: (pkg: string) => Package;
    getPackages: (start?: number, startName?: string | undefined) => Promise<PackageShort[]>;
}
export {};
