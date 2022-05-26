/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('users').del()
  await knex('users').insert([
    {id: 'd7c60328-21ab-46e5-a138-c8328114355e',email: 'jane@mail.com', password: '12345'},
    {id: 'ef62159e-58da-4a6d-93e6-f38e54fc71a1', email: 'john@mail.com', password: '54321'},
    {id: '5d6088f5-7332-469d-becb-d5e6b988d12d', email: 'billy@mail.com', password: 'Abcdef'},
    {id: '890e058e-3563-40be-a1be-3dea0c9e722d', email: 'mary@mail.com', password: 'sw0rdf1sh'}
  ]);
};
