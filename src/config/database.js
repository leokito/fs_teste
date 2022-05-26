// import knexfile from '../../knexfile';
// import knex from 'knex';
export const knexfile = require('../../knexfile')
export const knex = require('knex')(knexfile['development'])

