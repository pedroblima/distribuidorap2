import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class ItemPedido extends BaseModel {
  @column({ isPrimary: true })
  declare id: number
  
  @column()
  declare produtos_id: number

  @column()
  declare pedidos_id: number

  @column()
  declare quantidade: string

  @column()
  declare preco_unitario: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}