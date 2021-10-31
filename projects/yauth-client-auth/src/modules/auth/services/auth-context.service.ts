import { Injectable } from "@angular/core";

@Injectable({
    providedIn: "root"
})
export class AuthContextService {
    private _returnUri: string | null;

    constructor() {
        this._returnUri = null;
    }

    public set returnUri(value: string | null) {
        this._returnUri = value;
    }

    public get returnUri(): string | null {
        return this._returnUri;
    }
}