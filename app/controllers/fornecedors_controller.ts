// import type { HttpContext } from '@adonisjs/core/http'

import Fornecedor from "../models/fornecedor.js"

export default class FornecedorsController {
    async index() {
        const fornecedors = await Fornecedor.all()
        return fornecedors
    }
}