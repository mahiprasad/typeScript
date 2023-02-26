import { Db } from 'mongodb';
export declare class UsersService {
    private db;
    constructor(db: Db);
    servicefind(): Promise<any[]>;
    findOne(id: string): Promise<any>;
    create(title: string, content: string, review: string): Promise<string>;
    update(_id: string, title: string, content: string, review: string): Promise<void>;
    delete(id: string): Promise<any>;
}
