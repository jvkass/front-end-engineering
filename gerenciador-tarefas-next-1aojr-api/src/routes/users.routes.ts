import { Router } from "express";

const usersRoutes = Router();

usersRoutes.get("/",(request, response) => {
    return response.send('Hello World!');
})

export { usersRoutes }