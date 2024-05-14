import Fornecedor from '#models/fornecedor'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class FornecedorSeeder extends BaseSeeder {
  public async run() {
  
    await Fornecedor.createMany([
      {
        nome: 'Empresa X',
        endereco: 'Avenida do Comércio, 1000',
        telefone: '(61) 3322-4455'
      },
      {
        nome: 'Companhia Y',
        endereco: 'Rua dos Negócios, 200',
        telefone: '(61) 3344-5566'
      },
      {
        nome: 'Indústria Z',
        endereco: 'Parque Industrial, 300',
        telefone: '(61) 3232-6677'
      }
    ])
  }
}