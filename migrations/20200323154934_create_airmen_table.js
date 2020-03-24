
exports.up = function(knex) {
    return knex.schema.createTable('airforce_ranks', (table1) =>{
        table1.increments('id').primary();
        table1.string('rank');
    }).createTable('airman', (table2) => {
        table2.increments('id').primary();
        table2.string('first_name');
        table2.string('last_name');
        table2.string('middle_initial');
        table2.integer('rank_id').references('id').inTable('airforce_ranks');
        table2.string('squadron');
        table2.string('flight');
        table2.string('afsc');
        table2.date('deros');
        table2.string('bio',1000);
        table2.string('airman_photo_url');
      })
};

exports.down = function(knex) {
  return knex.schema.dropTable('airman_ranks').dropTable('airman');
};