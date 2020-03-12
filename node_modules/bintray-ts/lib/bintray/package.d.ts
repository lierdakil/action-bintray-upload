import { HasAttrs } from './hasAttrs';
import { Rest } from './rest';
import { Version } from './version';
export interface PackageInfo {
    name: string;
    repo: string;
    owner: string;
    desc: string;
    labels: string[];
    attribute_names: string[];
    licenses: License[];
    custom_licenses: string[];
    followers_count: number;
    created: string;
    website_url: string;
    issue_tracker_url: string;
    github_repo: string;
    github_release_notes_file: string;
    public_download_numbers: boolean;
    public_stats: boolean;
    linked_to_repos: string[];
    versions: string[];
    latest_version: string;
    updated: string;
    rating_count: number;
    system_ids: string[];
    vcs_url: string;
}
export interface PackageData {
    name: string;
    desc?: string;
    labels?: string[];
    licenses: License[];
    custom_licenses?: string[];
    vcs_url: string;
    website_url?: string;
    issue_tracker_url?: string;
    github_repo?: string;
    github_release_notes_file?: string;
    public_download_numbers?: boolean;
    public_stats?: boolean;
}
export declare class Package extends HasAttrs<PackageInfo, PackageData> {
    private subject;
    private repo;
    private pkg;
    constructor(subject: string, repo: string, pkg: string, rest: Rest);
    version: (version?: string) => Version;
}
export declare type License = 'AFL-2.1' | 'AFL-3.0' | 'AGPL-V3' | 'Apache-1.0' | 'Apache-1.1' | 'Apache-2.0' | 'APL-1.0' | 'APSL-2.0' | 'Artistic-License-2.0' | 'Attribution' | 'Bouncy-Castle' | 'BSD' | 'BSD 2-Clause' | 'BSD 3-Clause' | 'BSL-1.0' | 'CA-TOSL-1.1' | 'CC0-1.0' | 'CDDL-1.0' | 'Codehaus' | 'CPAL-1.0' | 'CPL-1.0' | 'CPOL-1.02' | 'CUAOFFICE-1.0' | 'Day' | 'Day-Addendum' | 'ECL2' | 'Eiffel-2.0' | 'Entessa-1.0' | 'EPL-1.0' | 'EPL-2.0' | 'EUDATAGRID' | 'EUPL-1.1' | 'EUPL-1.2' | 'Fair' | 'Facebook-Platform' | 'Frameworx-1.0' | 'Go' | 'GPL-2.0' | 'GPL-2.0+CE' | 'GPL-3.0' | 'Historical' | 'HSQLDB' | 'IBMPL-1.0' | 'IJG' | 'ImageMagick' | 'IPAFont-1.0' | 'ISC' | 'IU-Extreme-1.1.1' | 'JA-SIG' | 'JSON' | 'JTidy' | 'LGPL-2.0' | 'LGPL-2.1' | 'LGPL-3.0' | 'Libpng' | 'LPPL-1.0' | 'Lucent-1.02' | 'MirOS' | 'MIT' | 'Motosoto-0.9.1' | 'Mozilla-1.1' | 'MPL-2.0' | 'MS-PL' | 'MS-RL' | 'Multics' | 'NASA-1.3' | 'NAUMEN' | 'NCSA' | 'Nethack' | 'Nokia-1.0a' | 'NOSL-3.0' | 'NTP' | 'NUnit-2.6.3' | 'NUnit-Test-Adapter-2.6.3' | 'OCLC-2.0' | 'Openfont-1.1' | 'Opengroup' | 'OpenSSL' | 'OSL-3.0' | 'PHP-3.0' | 'PostgreSQL' | 'Public Domain' | 'Public Domain - SUN' | 'PythonPL' | 'PythonSoftFoundation' | 'QTPL-1.0' | 'Real-1.0' | 'RicohPL' | 'RPL-1.5' | 'Scala' | 'SimPL-2.0' | 'Sleepycat' | 'SUNPublic-1.0' | 'Sybase-1.0' | 'TMate' | 'Unicode-DFS-2015' | 'Unlicense' | 'UoI-NCSA' | 'UPL-1.0' | 'VIM License' | 'VovidaPL-1.0' | 'W3C' | 'WTFPL' | 'wxWindows' | 'Xnet' | 'ZLIB' | 'ZPL-2.0';
