import { AppRoutes } from "./app.routes";
import express from "express";

export const routes = (app) => {
    app.use(express.json());
    AppRoutes(app)
}