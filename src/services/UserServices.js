import { baseService } from "./base-service/baseService";

export class UserService extends baseService {
    constructor() {
        super();
        console.log();
    }
    //LOGIN API
    login = (dataInfo) => {
        return this.post("/api/users/login", dataInfo);
    };
    //REGISTER API
    register = (dataInfo) => {
        return this.post("/api/users", dataInfo);
    };
    //GET ALL API
    getAllUsers = () => {
        return this.get("/api/users");
    };
    //DELETE API
    deleteUser = (id) => {
        return this.delete(`/api/users/${id}`);
    };
    //GET ONE USER
    getOneUser = (id) => {
        return this.get(`/api/users/${id}`);
    };
    //UPDATE USER
    updateUser = (id, dataInfo) => {
        return this.put(`/api/users/${id}`, dataInfo);
    };
}

export const userService = new UserService();
