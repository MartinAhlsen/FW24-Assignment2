import express from "express";
import * as path from "path";
import { lectures } from "../data/products.js";
import { beginnerLectures } from "../data/products.js";
import { advancedLectures } from "../data/products.js";
import { expertLectures } from "../data/products.js";

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

lecturesRouter.get("/grund", (req,res) => {
    res.render(
        "pages/browse",
        {
            headTitle: "Grund",
            type: "Grund",
            hero: "images/lecture-hero.jpg",
            products: beginnerLectures,
        }
    )
})

lecturesRouter.get("/avancerad", (req,res) => {
    res.render(
        "pages/browse",
        {
            headTitle: "Avancerad",
            type: "Avancerad",
            hero: "images/lecture-hero.jpg",
            products: advancedLectures,
        }
    )
})

lecturesRouter.get("/expert", (req,res) => {
    res.render(
        "pages/browse",
        {
            headTitle: "Expert",
            type: "Expert",
            hero: "images/lecture-hero.jpg",
            products: expertLectures,
        }
    )
})
export default lecturesRouter