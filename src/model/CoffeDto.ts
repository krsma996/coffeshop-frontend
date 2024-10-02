class CoffeDto {
  id: number;
  name: string;
  price: number;
  brand: string;
  description: string;

  constructor(
    id: number,
    name: string,
    price: number,
    brand: string,
    description: string
  ) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.brand = brand;
    this.description = description;
  }
}

export default CoffeDto;
