import express, { Express } from "express";
import helmet from "helmet";
import cors from 'cors'
import Router from "../src/routes/Router";
export default function ApplyGlobalMiddleWare(app: Express){
    app.use(express.json())
    app.use(cors({
        credentials: true,
        origin: 'http://localhost:5173',
    }))
    app.use(express.urlencoded({ extended: true }))
    app.use(helmet())
    app.use(Router)
}