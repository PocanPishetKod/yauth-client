import { Injectable } from "@angular/core";
import { YAuthApiConfiguration, YAuthApiConfigurationProvider } from "yauth-api";
import { Configuration } from "./configuration";
import { ConfigurationProvider } from "./configuration.provider";

@Injectable()
export class YAuthApiConfigurationProviderImpl implements YAuthApiConfigurationProvider {
    private _configuration: Configuration;

    constructor(configurationProvider: ConfigurationProvider) {
        this._configuration = configurationProvider.provide();
    }

    public provide(): YAuthApiConfiguration {
        return new YAuthApiConfiguration(this._configuration.authority);
    }
}