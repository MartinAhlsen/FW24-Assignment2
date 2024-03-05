import express from "express";
import * as path from "path";
import { tastings } from "../data/products.js";
import { beginnerTastings } from "../data/products.js";
import { advancedTastings } from "../data/products.js";
import { expertTastings } from "../data/products.js";

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

tastingsRouter.get("/nyborjare", (req,res) => {
    res.render(
        "pages.browse",
        {
            headTitle: "Nybörjare",
            type: "Nybörjare",
            hero: "images/lecture-hero.jpg",
            products: beginnerTastings,
        }
    )
})

tastingsRouter.get("/avancerad", (req,res) => {
    res.render(
        "pages.browse",
        {
            headTitle: "Avancerad",
            type: "Avancerad",
            hero: "images/lecture-hero.jpg",
            products: advancedTastings,
        }
    )
})

tastingsRouter.get("/expert", (req,res) => {
    res.render(
        "pages.browse",
        {
            headTitle: "Expert",
            type: "Expert",
            hero: "images/lecture-hero.jpg",
            products: expertTastings,
        }
    )
})

export default tastingsRouter