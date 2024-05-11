import type { HttpContext } from '@adonisjs/core/http'

import Pedido from "../models/pedido.js"

export default class PedidosController {
    async index({ request, response }: HttpContext) {
        const pedidos = await Pedido.all()
        return response.json(pedidos)
    }
}