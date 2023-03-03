export class BaseError extends Error {
    public readonly name: string;
    // public readonly httpCode: HttpStatusCode;

    constructor(name: string){
        super();
        this.name = name;
        
    }
}