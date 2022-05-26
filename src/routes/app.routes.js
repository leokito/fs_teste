import { Router } from 'express'
import { createUser, deleteAll, deleteUser, getAll, getById, updateUser } from '../controllers/app.controllers';

const route = Router();

export const AppRoutes = (app) => {
    
    route.post("/users", createUser)
    route.get("/users", getAll)
    route.get("/users/:user_id", getById)
    route.put("/users/:user_id", updateUser)
    route.delete("/users/:user_id", deleteUser)
    route.delete("/users", deleteAll)

    app.use("/api", route)
};
