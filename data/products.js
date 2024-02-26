function Product (type, name, level, price) {
    this.type = type,
    this.name = name,
    this.level = level,
    this.price = price
    this.descriptionShort = short,
    this.descriptionLong = long
}

const short = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae saepe tempore laudantium totam accusamus possimus ea perspiciatis, assumenda facere odit debitis voluptatem veritatis id accusantium, eligendi similique nam, inventore error?";

const long = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam beatae et laudantium ratione. Amet laudantium fuga rem animi! Voluptatum, distinctio optio. Quibusdam odit rem error repudiandae vel cum omnis! Delectus.<br>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam beatae et laudantium ratione. Amet laudantium fuga rem animi! Voluptatum, distinctio optio. Quibusdam odit rem error repudiandae vel cum omnis! Delectus.<br>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam beatae et laudantium ratione. Amet laudantium fuga rem animi! Voluptatum, distinctio optio. Quibusdam odit rem error repudiandae vel cum omnis! Delectus.<br>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam beatae et laudantium ratione. Amet laudantium fuga rem animi! Voluptatum, distinctio optio. Quibusdam odit rem error repudiandae vel cum omnis! Delectus.<br>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam beatae et laudantium ratione. Amet laudantium fuga rem animi! Voluptatum, distinctio optio. Quibusdam odit rem error repudiandae vel cum omnis! Delectus.<br>";

export const lectures = [
    new Product("lecture", "Vintillverkning", "Grundläggande", "300 kr"),
    new Product("lecture", "Franska regioner", "Avancerad", "400 kr"),
    new Product("lecture", "Fransk vinlagstiftning", "Masterclass", "500 kr")
]

export const tastings = [
    new Product("tasting", "Rött vin", "Grundläggande", "300 kr"),
    new Product("tasting", "Vitt vin", "Avancerad", "400 kr"),
    new Product("tasting", "Champagne", "Masterclass", "500 kr")
]