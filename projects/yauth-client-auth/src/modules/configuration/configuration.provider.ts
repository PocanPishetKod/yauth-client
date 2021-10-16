import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";
import { Configuration } from "./configuration";

@Injectable({
    providedIn: "root"
})
export class ConfigurationProvider {
    public provide(): Configuration {
        return new Configuration(environment.authority, environment.scope,
            environment.clientId, environment.redirectUri, environment.postLogoutRedirectUri);
    }
}