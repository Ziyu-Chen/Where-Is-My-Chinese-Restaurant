exports.up = function(knex, Promise) {
  return knex.schema.createTable("cities", table => {
    table.integer("id").primary();

    table.text("name");

    table.integer("state_id");
    table
      .foreign("state_id")
      .references("id")
      .inTable("states");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("cities");
};
