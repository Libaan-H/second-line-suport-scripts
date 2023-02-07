const bodyParser = require ("body-parser");
const csvtojson = require('csvtojson');
const fs = require('fs');
const { format } = require("util");

// Use Custom csv File path

const fileName = "./Custom_csv/Custom_Price_Example.csv";

csvtojson()
  .fromFile(fileName)
  .then((source) => {
    if (!fs.existsSync("./custom_output")) {
      fs.mkdirSync("./custom_output");
    }
    const queries = [];

    for (let i = 0; i < source.length; i++) {
      const item = source[i];
      const insertStatement = `INSERT INTO billing.fulfilment_price_lists (huboo_box, shipping_service_code, origin_region, destination_region, container_id, weight, description, price, additional_price_per_kilo, surcharge, created_at, updated_at) VALUES ('${item["huboo_box"]}', '${item["shipping_service_code"]}', '${item["origin_region"]}', '${item["destination_region"]}', '${item["container_id"]}', '${item["weight"]}', '${item["description"]}', '${item["price"]}', '${item["additional_price_per_kilo"]}', '${item["surcharge"]}', NOW(), NOW())`;

      queries.push(insertStatement);
    }
    const date = new Date();

    const outputFileName = `./custom_output/insert_queries_${date.getFullYear()}-${
      date.getMonth() + 1
    }-${date.getDate()}_${date.getHours()}-${date.getMinutes()}-${
      date.getSeconds()
    }.sql`;

    fs.writeFileSync(outputFileName, queries.join("\n"));
    console.log("Inserts saved to custom_output folder");
  });