import { UsersService } from './users.service';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    find(): Promise<any[]>;
    findOne(): Promise<any>;
    addUser(userTitle: string, userContent: string, userReview: string): Promise<string>;
    updateUser(userTitle: string, userContent: string, userReview: string): string;
    remove(id: string): string;
}
