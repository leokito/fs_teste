import { Router } from 'express'
import { createUser, deleteAll, deleteUser, getAll, getById, updateUser } from '../controllers/app.controllers';

const route = Router();

export const AppRoutes = (app) => {
    
    route.post("v1/users", createUser)
    route.get("v1/users", getAll)
    route.get("v1/users/:user_id", getById)
    route.put("v1/users/:user_id", updateUser)
    route.delete("v1/users/:user_id", deleteUser)
    route.delete("v1/users", deleteAll)

    app.use("/api", route)
};
