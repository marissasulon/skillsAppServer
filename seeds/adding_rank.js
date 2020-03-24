
exports.seed = function(knex) {
  // Deletes ALL existing entries
    return knex('airforce_ranks').del()
    .then(function () {
      // Inserts seed entries
      return knex('airforce_ranks').insert([
        {id: 1, rank: 'AB'},
        {id: 2, rank: 'AMN'},
        {id: 3, rank: 'A1C'},
        {id: 4, rank: 'SrA'},
        {id: 5, rank: 'SSgt'},
        {id: 6, rank: 'TSgt'},
        {id: 7, rank: 'MSgt'}
      ]);
    });
};
