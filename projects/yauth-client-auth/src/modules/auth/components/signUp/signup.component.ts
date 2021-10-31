import { Component } from "@angular/core";
import { SignUpRequest, YAuthApiService } from "yauth-api";
import { RouterService } from "../../../app/router.service";
import { SignUpModel } from "./signup.model";

@Component({
    selector: "signup",
    templateUrl: "./signup.component.html"
})
export class SignUpComponent {
    public signUpModel: SignUpModel;

    constructor(private _yauthApiService: YAuthApiService,
        private _routerService: RouterService) {
        this.signUpModel = new SignUpModel();
    }

    public async signUp(): Promise<void> {
        if (!this.signUpModel.isValid()) {
            return;
        }

        await this._yauthApiService
            .signUp(new SignUpRequest(this.signUpModel.email, this.signUpModel.password));

        await this._routerService.goToSignIn();
    }

    public async goToSignIn(): Promise<void> {
        await this._routerService.goToSignIn();
    }
}