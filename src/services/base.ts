export class BaseService {
    private model: any;
    
    constructor(model : any) {
        this.model = model;
    }

    public getById(id : any){
        return this.model.findById(id)
    }
    
    public getAll(){
        return this.model.find();
    }
}
