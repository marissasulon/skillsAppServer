
exports.up = function(knex) {
    return knex.schema.createTable('airman_skill', (table)=>{
        table.increments();
        table.integer('airman_id').references('id').inTable('airman');
        table.integer('skill_id').references('id').inTable('skill');
        table.boolean('has_interest');
        table.integer('skill_rating');
        table.boolean('has_preference');
    })
};

exports.down = function(knex) {
  return knex.schema.dropTable('airman_skill');
};
