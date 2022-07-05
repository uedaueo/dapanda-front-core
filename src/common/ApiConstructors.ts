export interface ApiConstructorsInterface {
    [key: string]: any;
}

export class ApiConstructors {
    static apiConstructors: ApiConstructorsInterface = {};

    static appendConstructor(con: ApiConstructorsInterface) {
        ApiConstructors.apiConstructors = Object.assign(ApiConstructors.apiConstructors, con);
    }
}
