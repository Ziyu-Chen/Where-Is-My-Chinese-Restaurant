exports.up = function(knex, Promise) {
  return knex.schema.createTable("restaurants", table => {
    table.increments("id").primary();

    table.text("name");

    table.text("address");

    table.text("city");

    table.text("state");

    table.text("postal_code");

    table.float("latitude");

    table.float("longitude");

    table.float("stars");

    table.text("noise_level");

    table.integer("price_range");

    table.boolean("has_take_out");

    table.boolean("has_parking_space");

    table.boolean("reservation_needed");

    table.boolean("romantic");

    table.boolean("intimate");

    table.boolean("classy");

    table.boolean("trendy");

    table.boolean("upscale");

    table.boolean("casual");

    table.text("categories");

    table.text("photo_id");

    table.text("business_id");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("restaurants");
};
