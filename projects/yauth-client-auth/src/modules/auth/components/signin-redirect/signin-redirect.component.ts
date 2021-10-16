import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { environment } from "projects/yauth-client-auth/src/environments/environment";
import { AuthConfiguration, AuthService } from "yhome-auth";
import { RouterService } from "../../../app/router.service";

@Component({
    selector: "signin-redirect",
    template: ""
})
export class SignInRedirectComponent implements OnInit {
    constructor(private _routerService: RouterService,
        private _activatedRoute: ActivatedRoute) {
    }

    public async ngOnInit(): Promise<void> {
        this._activatedRoute.queryParams.subscribe(async params => {
            let code = params["code"];
            if (!code) {
                throw new Error("code is null");
            }

            let authService = new AuthService(
                new AuthConfiguration(
                    environment.clientId,
                    environment.scope,
                    environment.redirectUri,
                    environment.authority));

            let token = await authService.endAuthentication(code);
            console.log(token);
        });
    }
}