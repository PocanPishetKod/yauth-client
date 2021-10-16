export class Configuration {
    public readonly authority: string;
    public readonly scope: string;
    public readonly clientId: string;
    public readonly redirectUri: string;
    public readonly postLogoutRedirectUri: string;

    constructor(authority: string, scope: string,
        clientId: string, redirectUri: string, postLogoutRedirectUri: string) {
        this.authority = authority;
        this.scope = scope;
        this.clientId = clientId;
        this.redirectUri = redirectUri;
        this.postLogoutRedirectUri = postLogoutRedirectUri;
    }
}