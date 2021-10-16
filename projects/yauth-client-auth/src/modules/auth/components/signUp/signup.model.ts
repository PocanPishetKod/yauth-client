export class SignUpModel {
    public email: string = "";
    public password: string = "";

    public isValid(): boolean {
        return this.email != null && this.email.length > 0
            && this.password != null && this.password.length > 0;
    }
}