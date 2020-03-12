/// <reference types="node" />
import { Rest } from './rest';
import { Stream } from 'stream';
import { HasAttrs } from './hasAttrs';
export interface VersionData {
    name: string;
    desc?: string;
    released?: string;
    github_release_notes_file?: string;
    github_use_tag_release_notes?: boolean;
    vcs_tag?: string;
}
export interface VersionInfo {
    name: string;
    desc: string;
    package: string;
    repo: string;
    owner: string;
    labels: string[];
    published: boolean;
    attribute_names: string[];
    created: string;
    updated: string;
    released: string;
    ordinal: number;
    github_release_notes_file: string | null;
    github_use_tag_release_notes: boolean;
    vcs_tag: string | null;
    rating_count: number;
}
export declare class Version extends HasAttrs<VersionInfo, VersionData> {
    private contentBase;
    constructor(subject: string, repo: string, pkg: string, version: string, rest: Rest);
    publishContent: () => Promise<{
        files: number;
    }>;
    discardContent: () => Promise<{
        files: number;
    }>;
    uploadContent: (filePath: string, remotePath?: string, publish?: boolean, explode?: boolean) => Promise<import("./rest").SuccessMessage>;
    uploadContentBuffer: (data: string | Buffer | ArrayBuffer | Stream, remotePath: string, publish?: boolean, explode?: boolean) => Promise<import("./rest").SuccessMessage>;
}
