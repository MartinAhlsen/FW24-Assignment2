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
    new Product("lecture", "Vintillverkning", "Nybörjare", "300 kr", "./images/winemaking.png"),
    new Product("lecture", "Italiens regioner", "Avancerad", "400 kr", "./images/italy.jpg"),
    new Product("lecture", "Fransk vinlagstiftning", "Expert", "500 kr", "./images/french-flag.jpg")
]

export const beginnerLectures = [
    new Product("lecture", "Hur vin blir till", "Nybörjare", "300kr", "./images/winemaking.png"),
    new Product("lecture", "Våra vanligaste röda druvor", "Nybörjare", "300kr", "./images/winemaking.png"),
    new Product("lecture", "Våra vanligaste gröna druvor", "Nybörjare", "300 kr", "./images/winemaking.png")
]
export const advancedLectures = [
    new Product("lecture", "Pinot Noir - en världsomsegling", "Avancerad", "450 kr", "./images/winemaking.png"),
    new Product("lecture", "Italiens regioner", "Avancerad", "400 kr", "./images/italy.jpg"),
    new Product("lecture", "Fransk vinlagstiftning", "Avancerad", "500 kr", "./images/french-flag.jpg")

]
export const expertLectures = [
    new Product("lecture", "Frankrikes Grand Cru", "Expert", "600 kr", "./images/winemaking.png"),
    new Product("lecture", "Gräv i jordmåner", "Expert", "600 kr", "./images/winemaking.png"),
    new Product("lecture", "Djupdyk i Champagne", "Expert", "600kr", "./images/winemaking.png")
]

export const tastings = [
    new Product("tasting", "Rött vin", "Nybörjare", "300 kr", "./images/red-wine.jpg"),
    new Product("tasting", "Vitt vin", "Avancerad", "400 kr", "./images/white-wine.jpg"),
    new Product("tasting", "Champagne", "Expert", "500 kr", "./images/champagne.jpg")
]

export const beginnerTastings = [
    new Product("tasting", "Rött vin - En introduktion", "Nybörjare", "300 kr", "./images/red-wine.jpg"),
    new Product("tasting", "Vitt vin - En introduktion", "Nybörjare", "300 kr", "./images/red-wine.jpg"),
    new Product("tasting", "Mousserande vin - En introduktion", "Nybörjare", "300 kr", "./images/red-wine.jpg"),
]
export const advancedTastings = [
    new Product("tasting", "Syrah eller Shiraz?", "Avancerad", "400 kr", "./images/white-wine.jpg"),
    new Product("tasting", "Ursprungets betydelse - Rött", "Avancerad", "450 kr", "./images/white-wine.jpg" ),
    new Product("tasting", "Kamelionten Chardonnay", "Avancerad", "450 kr", "./images/white-wine.jpg")
]
export const expertTastings = [
    new Product("tasting", "Champagne", "Expert", "500 kr", "./images/champagne.jpg"),
    new Product("tasting", "Bordeaux vs Napa Valley", "Expert", "700 kr", "./images/white-wine.jpg"),
    new Product("tasting", "Riesling i sitt esse", "Expert", "600 kr", "./images/white-wine.jpg")
]