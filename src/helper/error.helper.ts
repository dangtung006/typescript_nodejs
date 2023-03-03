import { HttpStatusCode } from "../const/httpCode";

export class BaseError extends Error {
    public readonly name: string;
    public readonly httpCode: HttpStatusCode;

    constructor(name: string, httpCode: HttpStatusCode, message : string){
        super();
        Object.setPrototypeOf(this, new.target.prototype);
        this.name      = name;
        this.httpCode  = httpCode;
        this.message   = message;
        Error.captureStackTrace(this);
    }
}

export class HTTP400Error extends BaseError {
    constructor(message : string){
        super("BAD REQUEST", HttpStatusCode.BAD_REQUEST, message);
    }
}

export class HTTP404Error extends BaseError {
    constructor(message : string){
        super("NOT FOUND", HttpStatusCode.NOT_FOUND, message);
    }
}