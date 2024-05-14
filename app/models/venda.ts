import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Venda extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare cliente_id: number

  @column()
  declare funcionarios_id: number

  @column()
  declare dt_vendas: Date

  @column()
  declare total_valor: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}