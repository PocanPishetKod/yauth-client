import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { SignInRedirectComponent } from "./components/signin-redirect/signin-redirect.component";
import { SignInComponent } from "./components/signIn/signin.component";
import { SignUpComponent } from "./components/signUp/signup.component";

@NgModule({
    imports: [
        FormsModule
    ],
    declarations: [
        SignUpComponent,
        SignInComponent,
        SignInRedirectComponent
    ],
    exports: [
        SignUpComponent,
        SignInComponent,
        SignInRedirectComponent
    ]
})
export class AuthModule {

}