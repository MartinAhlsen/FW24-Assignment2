import express from "express";
import * as path from "path";
import lecturesRouter from "./routes/lectures.js";
import tastingsRouter from "./routes/tastings.js";

const app = express();
const port = process.env.PORT || 3000;
const __dirname = path.resolve();

app.get("/", (req, res) => {
    res.render("pages/home",{
        headTitle: "Utanför boxen",
    })
})

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, 'public')));


app.use("/provningar", tastingsRouter);
app.use("/forelasningar", lecturesRouter);

app.listen(port, () => {
    console.log(`Port: ${port}`)
});