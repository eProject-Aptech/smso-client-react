import { baseService } from "./base-service/baseService";

export class UserService extends baseService {
    constructor() {
        super();
        console.log();
    }
    //LOGIN API
    login = (dataInfo) => {
        return this.post("/api/Users/login", dataInfo);
    };
    //REGISTER API
    register = (dataInfo) => {
        return this.post("/api/Users/registerUser", dataInfo);
    };
    //GET ALL API
    // getAllUsers = () => {
    //     return this.get("/api/Users");
    // };
    //DELETE API
    // deleteUser = (id) => {
    //     return this.delete(`/api/Users/${id}`);
    // };
    //GET ONE USER
    // getOneUser = (id) => {
    //     return this.get(`/api/Users/${id}`);
    // };
    //UPDATE USER
    // updateUser = (id, dataInfo) => {
    //     return this.put(`/api/users/${id}`, dataInfo);
    // };
}

export const userService = new UserService();
