import { Routes } from "@angular/router";
import { SignInRedirectComponent } from "../auth/components/signin-redirect/signin-redirect.component";
import { SignInComponent } from "../auth/components/signIn/signin.component";
import { SignUpComponent } from "../auth/components/signUp/signup.component";

export class RoutesProvider {
    public static readonly baseUri: string = "";
    public static readonly signUpUri: string = "signup";
    public static readonly signInUri: string = "signin";
    public static readonly signInRedirect: string = "signin/redirect"

    public static provide(): Routes {
        return [
            { path: this.baseUri, redirectTo: `/${this.signInUri}`, pathMatch: "full" },
            { path: this.signUpUri, component: SignUpComponent },
            { path: this.signInRedirect, component: SignInRedirectComponent },
            { path: this.signInUri, component: SignInComponent }
        ];
    }
}