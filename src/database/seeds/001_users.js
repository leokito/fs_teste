/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('users').del()
  await knex('users').insert([
    {email: 'toquinho@mail.com', password: '12345'},
    {email: 'john@mail.com', password: '54321'},
  ]);
};
