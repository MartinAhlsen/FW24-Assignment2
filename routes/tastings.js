import express from "express";
import * as path from "path";
import { tastings } from "../data/products.js";
import { beginnerTastings } from "../data/products.js";
import { advancedTastings } from "../data/products.js";
import { expertTastings } from "../data/products.js";

const tastingsRouter = express.Router();

tastingsRouter.get("/", (req, res) => {
  res.render("pages/categories", {
    pageName: "provningar",
    headTitle: "Provningar",
    type: "Provningar",
    hero: "images/Tasting-hero.webp",
    products: tastings,
    level: "Grund",
  });
});

tastingsRouter.get("/grund", (req, res) => {
  res.render("pages/product", {
    headTitle: "Grund",
    type: "Grund",
    hero: "images/lecture-hero.jpg",
    products: beginnerTastings,
    heading: "Provningar på grundnivå",
  });
});

tastingsRouter.get("/avancerad", (req, res) => {
  res.render("pages/product", {
    headTitle: "Avancerad",
    type: "Avancerad",
    hero: "images/lecture-hero.jpg",
    products: advancedTastings,
    heading: "Provningar på avancerad nivå",
  });
});

tastingsRouter.get("/expert", (req, res) => {
  res.render("pages/product", {
    headTitle: "Expert",
    type: "Expert",
    hero: "images/lecture-hero.jpg",
    products: expertTastings,
    heading: "Provningar på expertnivå",
  });
});

export default tastingsRouter;
