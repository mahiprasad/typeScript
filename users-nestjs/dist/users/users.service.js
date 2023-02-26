"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const mongodb_1 = require("mongodb");
let UsersService = class UsersService {
    constructor(db) {
        this.db = db;
    }
    async servicefind() {
        return await this.db.collection('fruits').find().toArray();
    }
    async findOne(id) {
        if (!mongodb_1.ObjectID.isValid(id)) {
            throw new common_1.BadRequestException;
        }
        const response = await this.db.collection('fruits').findOne({
            _id: new mongodb_1.ObjectID(id),
        });
        if (!response) {
            throw new common_1.NotFoundException;
        }
        return response;
    }
    async create(title, content, review) {
        this.db.collection('fruits').insertOne({ title: title, content: content, review: review });
        return "added";
    }
    async update(_id, title, content, review) {
        if (!mongodb_1.ObjectID.isValid(_id)) {
            throw new common_1.BadRequestException;
        }
        await this.db.collection('fruits').updateOne({
            _id: new mongodb_1.ObjectID(_id),
        }, {
            $set: {
                title: title,
                content: content,
                review: review
            }
        });
    }
    async delete(id) {
        if (!mongodb_1.ObjectID.isValid(id)) {
            throw new common_1.BadRequestException;
        }
        const response = await this.db.collection('fruits').deleteOne({
            _id: new mongodb_1.ObjectID(id),
        });
        if (response.deletedCount === 0) {
            throw new common_1.NotFoundException;
        }
    }
};
UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('DATABASE_CONNECTION')),
    __metadata("design:paramtypes", [mongodb_1.Db])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map