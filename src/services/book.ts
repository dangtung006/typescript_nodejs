import { BaseService } from "../services/base";
import Book from '../models/book';

export class BookService extends BaseService {
    constructor(){
        super({
            model : Book
        });
    }
}