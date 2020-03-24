
exports.up = function(knex) {
    return knex.schema.createTable('skill', (table) => {
        table.increments();
        table.string('name');
        table.string('description',1000)
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('skill')
};
