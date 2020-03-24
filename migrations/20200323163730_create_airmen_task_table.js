
exports.up = function(knex) {
    return knex.schema.createTable('airman_task', (table)=> {
        table.increments();
        table.integer('airman_id').references('id').inTable('airman');
        table.integer('task_id').references('id').inTable('task');
        table.boolean('completed');
        table.boolean('approved');
        table.boolean('is_poc');
    })
};

exports.down = function(knex) {
  return knex.schema.dropTable('airman_task');
};
