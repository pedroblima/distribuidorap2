// import type { HttpContext } from '@adonisjs/core/http'

import Produto from "../models/produto.js";

export default class ProdutosController {
    async index() {
        const produtos = await Produto.all();
        return produtos;
    }
}