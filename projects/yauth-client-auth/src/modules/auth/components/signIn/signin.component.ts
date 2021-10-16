import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { SignInRequest, YAuthApiService } from "yauth-api";
import { SignInModel } from "./signin.model";
import { AuthService, AuthConfiguration } from "yhome-auth";
import { Configuration } from "../../../configuration/configuration";
import { ConfigurationProvider } from "../../../configuration/configuration.provider";

@Component({
    selector: "signin",
    templateUrl: "./signin.component.html"
})
export class SignInComponent {
    private _returnUrl: string | null;
    private _authService: AuthService | null;
    private readonly _configuration: Configuration;

    public signInModel: SignInModel;

    constructor(private _authApi: YAuthApiService,
        private activatedRoute: ActivatedRoute,
        configurationProvider: ConfigurationProvider) {
        this._authService = null;
        this.signInModel = new SignInModel();
        this._configuration = configurationProvider.provide();
        this._returnUrl = null;

        activatedRoute.queryParams
            .subscribe(params => {
                this._returnUrl = params["ReturnUrl"];
            });
    }

    private async internalSignIn(): Promise<void> {
        if (!this._authService) {
            this._authService = new AuthService(
                new AuthConfiguration(
                    this._configuration.clientId,
                    this._configuration.scope,
                    this._configuration.redirectUri,
                    this._configuration.authority));
        }

        await this._authService.startAuthentication();
    }

    private async externalSignIn(): Promise<void> {
        window.location.href = this._returnUrl as string;
    }

    public async signIn(): Promise<void> {
        if (!this.signInModel.isValid()) {
            return;
        }

        try {
            await this._authApi
                .signIn(new SignInRequest(this.signInModel.email,
                    this.signInModel.password));

            if (this._returnUrl) {
                await this.externalSignIn();
            }
            else {
                await this.internalSignIn();
            }
        }
        catch (e) {
            console.log(e);
            throw e;
        }
    }
}