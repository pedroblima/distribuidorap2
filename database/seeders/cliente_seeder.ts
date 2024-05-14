import Cliente from '#models/cliente'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    await Cliente.createMany([
      {
        nome: 'Maria Silva',
        endereco: 'Rua das Flores, 123',
        telefone: '(11) 98765-4321'
      },
      {
        nome: 'João Santos',
        endereco: 'Avenida Principal, 456',
        telefone: '(21) 99876-5432'
      },
      {
        nome: 'Ana Oliveira',
        endereco: 'Praça Central, 789',
        telefone: '(31) 98765-1234'
      }
    ])
  }
}