import express from "express";
import * as path from "path";
import { tastings } from "../data/products.js";

const tastingsRouter = express.Router()

tastingsRouter.get("/", (req, res) => {
    res.render(
        "pages/browse",
        {
            headTitle: "Provningar",
            type: "Provningar",
            hero: "images/tasting-hero.webp",
            products: tastings,
        }
    )
});

export default tastingsRouter