/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */


exports.up = async function(knex) {
    await knex.raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');
    return knex.schema.createTable("users", table => {
      table.uuid("id").primary().defaultTo(knex.raw("(uuid_generate_v4())"))
      table.string("email").unique().notNullable()
      table.string("password").notNullable()
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.down = knex => knex.schema.dropTableIfExists('users');

