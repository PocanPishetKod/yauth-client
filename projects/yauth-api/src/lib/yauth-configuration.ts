export class YAuthApiConfiguration {
    public readonly baseUrl: string;
    public readonly signUpUri: string;
    public readonly signInUri: string;

    constructor(baseUrl: string) {
        this.baseUrl = baseUrl;
        this.signUpUri = `${baseUrl}/account/signup`;
        this.signInUri = `${baseUrl}/account/signin`;
    }
}