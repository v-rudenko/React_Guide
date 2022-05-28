import { bobcat } from "./bobcat.js";
import { tiger as bigCat } from "./bobcat.js";
import * as kittens from "./cougar.js";

const animal = {
    type: "cat",
    wild: bobcat,
    big: bigCat,
    rust: kittens.leopard,
    puma: kittens.cougar,
};

export default animal;
