
const bodyParser = require ("body-parser");
const csvtojson = require('csvtojson');
const fs = require('fs');

// Use Default csv File path

const fileName = "./Default_csv/Default_Example.csv";

csvtojson()
  .fromFile(fileName)
  .then((source) => {
    if (!fs.existsSync("./default_output")) {
      fs.mkdirSync("./default_output");
    }

    const queries = [];

    source.forEach((row, i) => {
      const insertStatement = `
        INSERT INTO billing.fulfilment_default_price_lists(shipping_service_code, origin_region, destination_region, container_id, weight, description, price, currency, additional_price_per_kilo, surcharge, created_at, updated_at)
        VALUES ('${row.shipping_service_code}', '${row.origin_region}', '${row.destination_region}', '${row.container_id}', '${row.weight}', '${row.description}', '${row.price}', '${row.currency}', '${row.additional_price_per_kilo}', '${row.surcharge}', NOW(), NOW())
      `;

      queries.push(insertStatement);
    });

    const date = new Date();

    const outputFileName = `./default_output/insert_queries_${date.getFullYear()}-${
      date.getMonth() + 1
    }-${date.getDate()}_${date.getHours()}-${date.getMinutes()}-${
      date.getSeconds()
    }.sql`;

    fs.writeFileSync(outputFileName, queries.join("\n"));
    console.log("Inserts saved to default_output folder");
  });
