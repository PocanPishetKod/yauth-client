import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { AuthConfiguration, AuthService } from "yhome-auth";
import { RouterService } from "../../../app/router.service";
import { Configuration } from "../../../configuration/configuration";
import { ConfigurationProvider } from "../../../configuration/configuration.provider";

@Component({
    selector: "signin-redirect",
    template: ""
})
export class SignInRedirectComponent implements OnInit {
    private readonly _configuration: Configuration;

    constructor(private _activatedRoute: ActivatedRoute,
        configurationProvider: ConfigurationProvider) {
            this._configuration = configurationProvider.provide();
    }

    public async ngOnInit(): Promise<void> {
        this._activatedRoute.queryParams.subscribe(async params => {
            let code = params["code"];
            if (!code) {
                throw new Error("code is null");
            }

            let authService = new AuthService(
                new AuthConfiguration(
                    this._configuration.clientId,
                    this._configuration.scope,
                    this._configuration.redirectUri,
                    this._configuration.authority));

            let token = await authService.endAuthentication(code);
            console.log(token);
        });
    }
}