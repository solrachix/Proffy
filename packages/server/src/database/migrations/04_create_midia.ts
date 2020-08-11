import Knex from 'knex'

export async function up (knex: Knex): Promise<unknown> {
  // criar tabela
  return knex.schema.createTable('midia', table => {
    table.increments('id').primary()
    table.string('title').notNullable()
    table.string('description').notNullable()
    table.string('name').notNullable()

    table.integer('classe_id')
      .notNullable()
      .references('id')
      .inTable('classes')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')
  })
}

export async function down (knex: Knex): Promise<unknown> {
  // voltar atrás (deletar tabela)
  return knex.schema.dropTable('midia')
}
