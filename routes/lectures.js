import express from "express";
import * as path from "path";
import { lectures } from "../data/products.js";

const lecturesRouter = express.Router()

lecturesRouter.get ("/", (req, res) => {
    lecturesRouter.render(
        "pages/browse",
        {
            headTitle: "Lectures",
            type: "Lectures",
            products: lectures,
        }
    )
})

export default lecturesRouter