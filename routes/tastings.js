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
            level: "Grund"
        }
    )
});

tastingsRouter.get("/grund", (req,res) => {
    res.render(
        "pages/browse",
        {
            headTitle: "Grund",
            type: "Grund",
            hero: "images/lecture-hero.jpg",
            products: beginnerTastings,
        }
    )
})

tastingsRouter.get("/avancerad", (req,res) => {
    res.render(
        "pages/browse",
        {
            headTitle: "Avancerad",
            type: ["Avancerad", "Provninagr"],
            hero: "images/lecture-hero.jpg",
            products: advancedTastings,
        }
    )
})

tastingsRouter.get("/expert", (req,res) => {
    res.render(
        "pages/browse",
        {
            headTitle: "Expert",
            type: "Expert",
            hero: "images/lecture-hero.jpg",
            products: expertTastings,
        }
    )
})

export default tastingsRouter