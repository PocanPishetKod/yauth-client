import { YAuthApiConfiguration } from "./yauth-configuration";

export abstract class YAuthApiConfigurationProvider {
    public abstract provide(): YAuthApiConfiguration;
}