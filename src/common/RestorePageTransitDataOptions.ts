export interface RestorePageTransitDataCallbackType {
    (result: boolean): void
}

export interface RestorePageTransitDataOptions {
    callback: RestorePageTransitDataCallbackType;
}
