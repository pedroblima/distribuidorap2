import Pedido from '#models/pedido'
import { BaseSeeder } from '@adonisjs/lucid/seeders'
import { DateTime } from 'luxon'

export default class PedidoSeeder extends BaseSeeder {
  public async run() {
    // Utilize o método createMany para inserir múltiplos registros no banco de dados
    await Pedido.createMany([
      {
        clientes_id: 1, // ID do cliente
        dt_pedido: DateTime.now(), // Data do pedido
        status: 'Processando'
      },
      {
        clientes_id: 2, // ID do cliente
        dt_pedido: DateTime.now(), // Data do pedido
        status: 'Enviado'
      },
      {
        clientes_id: 3, // ID do cliente
        dt_pedido: DateTime.now(), // Data do pedido
        status: 'Entregue'
      }
    ])
  }
}
