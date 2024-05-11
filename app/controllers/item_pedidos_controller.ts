// import type { HttpContext } from '@adonisjs/core/http'

import ItemPedido from "../models/item_pedido.js";

export default class ItemPedidosController {
    async index() {
        const ItemPedidos = await ItemPedido.all();
        return ItemPedidos;
    }
}