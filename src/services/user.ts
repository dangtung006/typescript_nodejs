import { BaseService } from "../services/base";
import User from '../models/user';

export class UserService extends BaseService {
    constructor(){
        super({
            model : User
        });
    }
}