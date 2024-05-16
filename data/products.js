function Product (type, name, level, price, img,) {
    this.type = type,
    this.name = name,
    this.level = level,
    this.price = price,
    this.img = img,
    this.descriptionShort = short,
    this.descriptionLong = long
}

const short = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae saepe tempore laudantium totam accusamus possimus ea perspiciatis, assumenda facere odit debitis voluptatem veritatis id accusantium, eligendi similique nam, inventore error?";

const long = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam beatae et laudantium ratione. Amet laudantium fuga rem animi! Voluptatum, distinctio optio. Quibusdam odit rem error repudiandae vel cum omnis! Delectus.<br>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam beatae et laudantium ratione. Amet laudantium fuga rem animi! Voluptatum, distinctio optio. Quibusdam odit rem error repudiandae vel cum omnis! Delectus.<br>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam beatae et laudantium ratione. Amet laudantium fuga rem animi! Voluptatum, distinctio optio. Quibusdam odit rem error repudiandae vel cum omnis! Delectus.<br>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam beatae et laudantium ratione. Amet laudantium fuga rem animi! Voluptatum, distinctio optio. Quibusdam odit rem error repudiandae vel cum omnis! Delectus.<br>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam beatae et laudantium ratione. Amet laudantium fuga rem animi! Voluptatum, distinctio optio. Quibusdam odit rem error repudiandae vel cum omnis! Delectus.<br>";

export const lectures = [
    new Product("forelasningar", "Grundnivå", "Grund", "", "./images/lecture1.jpg"),
    new Product("forelasningar", "Avancerad nivå", "Avancerad", "", "./images/lecture2.jpg"),
    new Product("forelasningar", "Expertnivå", "Expert", "", "./images/lecture3.jpg")
]

export const beginnerLectures = [
    new Product("forelasningar", "Hur vin blir till", "Grund", "300kr", "../images/winemaking.png"),
    new Product("forelasningar", "Våra vanligaste röda druvor", "Grund", "300kr", "../images/redGrapes.jpg"),
    new Product("forelasningar", "Våra vanligaste gröna druvor", "Grund", "300 kr", "../images/greenGrapes.jpg")
]
export const advancedLectures = [
    new Product("forelasningar", "Pinot Noir - en världsomsegling", "Avancerad", "450 kr", "../images/pinotNoir.jpg"),
    new Product("forelasningar", "Italiens regioner", "Avancerad", "400 kr", "../images/italy.jpg"),
    new Product("forelasningar", "Fransk vinlagstiftning", "Avancerad", "500 kr", "../images/frenchFlag.jpg")

]
export const expertLectures = [
    new Product("forelasningar", "Frankrikes Grand Cru", "Expert", "600 kr", "../images/grandCru.jpg"),
    new Product("forelasningar", "Gräv i jordmåner", "Expert", "600 kr", "../images/limestone.jpg"),
    new Product("forelasningar", "Djupdyk i Champagne", "Expert", "600kr", "../images/champagneCellar.jpg")
]

export const tastings = [
    new Product("provningar", "Grundnivå", "Grund", "", "./images/tasting2.jpg"),
    new Product("provningar", "Avancerad nivå", "Avancerad", "", "./images/tasting3.jpg"),
    new Product("provningar", "Expertnivå", "Expert", "", "./images/tasting1.jpg")
]

export const beginnerTastings = [
    new Product("provningar", "Rött vin - En introduktion", "Grund", "300 kr", "../images/red-wine.jpg"),
    new Product("provningar", "Vitt vin - En introduktion", "Grund", "300 kr", "../images/white-wine.jpg"),
    new Product("provningar", "Mousserande vin - En introduktion", "Grund", "300 kr", "../images/ChampagneCorks.jpg"),
]
export const advancedTastings = [
    new Product("provningar", "Syrah eller Shiraz?", "Avancerad", "400 kr", "../images/syrah2.jpg"),
    new Product("provningar", "Ursprungets betydelse - Rött", "Avancerad", "450 kr", "../images/map.jpg" ),
    new Product("provningar", "Kamelionten Chardonnay", "Avancerad", "450 kr", "../images/chablis2.jpg")
]
export const expertTastings = [
    new Product("provningar", "Champagne", "Expert", "500 kr", "../images/champagne-pour.jpg"),
    new Product("provningar", "Bordeax vs Napa Valley", "Expert", "700 kr", "../images/bottleRack.jpg"),
    new Product("provningar", "Riesling i sitt esse", "Expert", "600 kr", "../images/riesling.jpg")
]