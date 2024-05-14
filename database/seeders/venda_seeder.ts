import Venda from '#models/venda'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class VendaSeeder extends BaseSeeder {
  public async run() {
    // Utilize o método createMany para inserir múltiplos registros no banco de dados
    await Venda.createMany([
      {
        cliente_id: 1, // ID do cliente
        funcionarios_id: 1, // ID do funcionário
        dt_vendas: new Date(2024, 4, 14), // Data da venda
        total_valor: 500.00 // Total das vendas
      },
      {
        cliente_id: 2, // ID do cliente
        funcionarios_id: 2, // ID do funcionário
        dt_vendas: new Date(2024, 4, 15), // Data da venda
        total_valor: 1200.00 // Total das vendas
      },
      {
        cliente_id: 3, // ID do cliente
        funcionarios_id: 3, // ID do funcionário
        dt_vendas: new Date(2024, 4, 16), // Data da venda
        total_valor: 300.00 // Total das vendas
      }
    ])
  }
}