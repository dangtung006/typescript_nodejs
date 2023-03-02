export class BaseService {
    private model: any;
    
    constructor(opt : { model : any } ) {
        this.model = opt.model;
    }

    public getById(id : string){
        return this.model.findById(id)
    }
    
    public getAll(){
        return this.model.find();
    }

    public create(data : any){
        return new this.model(data).save();
    }

    public updateOneById(id : string, opt : any){
        return new this.model.findByIdAndUpdate(id);
    }

    public removeById(id: string){
        return this.model.findByIdAndDelete(id);
    }
}
