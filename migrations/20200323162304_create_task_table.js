
exports.up = function(knex) {
    return knex.schema.createTable('task', (table) => {
        table.increments();
        table.string('name');
        table.datetime('start_date');
        table.datetime('end_date');
        table.string('location');
        table.string('description',1000);
        table.string('comments');
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('task');
};
