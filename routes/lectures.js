import express from "express";
import * as path from "path";
import { lectures } from "../data/products.js";

const lecturesRouter = express.Router();

lecturesRouter.get("/", (req, res) => {
    res.render(
        "pages/browse",
        {
            headTitle: "Föreläsningar",
            type: "Föreläsningar",
            hero: "images/lecture-hero.jpg",
            products: lectures,
        }
    )
})
export default lecturesRouter