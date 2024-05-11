// import type { HttpContext } from '@adonisjs/core/http'

import Funcionario from "../models/funcionario.js";

export default class FuncionariosController {
    async index() {
        const funcionarios = await Funcionario.all();
        return funcionarios;
    }
}