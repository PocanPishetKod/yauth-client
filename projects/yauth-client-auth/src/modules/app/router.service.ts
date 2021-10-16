import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { RoutesProvider } from "./routes-provider";

@Injectable({
    providedIn: "root"
})
export class RouterService {
    constructor(private _router: Router) {

    }

    public async goToSignUp(): Promise<void> {
        await this._router.navigate([`/${RoutesProvider.signUpUri}`]);
    }

    public async goToSignIn(): Promise<void> {
        await this._router.navigate([`/${RoutesProvider.signUpUri}`]);
    }
}