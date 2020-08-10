import Knex from 'knex'

export async function up (knex: Knex): Promise<unknown> {
  // criar tabela
  return knex.schema.createTable('users', table => {
    table.increments('id').primary()
    table.string('name').notNullable()
    table.string('email').notNullable()
    table.string('password').notNullable()

    table.string('avatar')
    table.decimal('whatsapp')
    table.string('bio')
  })
}

export async function down (knex: Knex): Promise<unknown> {
  // voltar atrás (deletar tabela)
  return knex.schema.dropTable('users')
}
