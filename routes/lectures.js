import express from "express";
import * as path from "path";
import { lectures } from "../data/products.js";
import { beginnerLectures } from "../data/products.js";
import { advancedLectures } from "../data/products.js";
import { expertLectures } from "../data/products.js";

const lecturesRouter = express.Router();

lecturesRouter.get("/", (req, res) => {
    res.render(
        "pages/categories",
        {
            pageName: "föreläsningar",
            headTitle: "Föreläsningar",
            type: "Föreläsningar",
            hero: "images/lecture-hero.jpg",
            products: lectures,
        }
    )
})

lecturesRouter.get("/grund", (req,res) => {
    res.render(
        "pages/product",
        {
            headTitle: "Grund",
            type: "Grund",
            hero: "images/lecture-hero.jpg",
            products: beginnerLectures,
            heading: "Föreläsningar på grundnivå",
        }
    )
})

lecturesRouter.get("/avancerad", (req,res) => {
    res.render(
        "pages/product",
        {
            headTitle: "Avancerad",
            type: "Avancerad",
            hero: "images/lecture-hero.jpg",
            products: advancedLectures,
            heading: "Föreläsningar på avancerad nivå",
        }
    )
})

lecturesRouter.get("/expert", (req,res) => {
    res.render(
        "pages/product",
        {
            headTitle: "Expert",
            type: "Expert",
            hero: "images/lecture-hero.jpg",
            products: expertLectures,
            heading: "Föreläsningar på expertnivå",
        }
    )
})
export default lecturesRouter