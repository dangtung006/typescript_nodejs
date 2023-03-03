import { HttpStatusCode } from "../const/httpCode";

export class BaseError extends Error {
    public readonly name: string;
    public readonly httpCode: HttpStatusCode;

    constructor(name: string, httpCode: HttpStatusCode){
        super();
        Object.setPrototypeOf(this, new.target.prototype);
        this.name = name;
        this.httpCode = httpCode;
        Error.captureStackTrace(this);
    }
}

export class HTTP400Error extends BaseError {
    constructor(){
        super("BAD REQUEST", HttpStatusCode.BAD_REQUEST);
    }
}