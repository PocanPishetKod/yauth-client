import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { YAuthApiConfigurationProvider } from './yauth-config-provider';
import { SignUpRequest } from './dtos/sign-up-request';
import { YAuthApiConfiguration } from './yauth-configuration';
import { SignInRequest } from './dtos/sign-in-request';

@Injectable({
    providedIn: 'root'
})
export class YAuthApiService {
    private yauthConfiguration: YAuthApiConfiguration;

    constructor(private httpClient: HttpClient,
        configProvider: YAuthApiConfigurationProvider) {
            this.yauthConfiguration = configProvider.provide();
    }

    public async signUp(request: SignUpRequest): Promise<void> {
        await this.httpClient
            .post(this.yauthConfiguration.signUpUri, { account: request})
            .toPromise();
    }

    public async signIn(request: SignInRequest): Promise<void> {
        await this.httpClient
            .post(this.yauthConfiguration.signInUri, request, {withCredentials: true})
            .toPromise();
    }
}
