import type { HttpContext } from '@adonisjs/core/http'
import Venda from "../models/venda.js"

 
export default class VendasController {
    async index({ request, response }: HttpContext) {
        const vendas = await Venda.all()
        return response.json(vendas)
    }
}