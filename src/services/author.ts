import { BaseService } from "../services/base";
import Author from '../models/author';

export class AuthorService extends BaseService {
    constructor(){
        super({
            model : Author
        });
    }
}