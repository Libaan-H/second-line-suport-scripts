# second-line-support
A place to store a range of scripts needed to perform 2nd line support duties

## CSV > MySQL Import tool

This script converts a CSV file to SQL insert statements.

Setup:

Place your CSV file in the ./Custom_csv, ./Default_csv folder, ./Shipment_Mapping_csv OR ./Archive_csv.

Open the example CSV you want to use and input your information in the same format and ensure you save it back to the same folder the you opened from.

If changing the name of the CSV make sure you change the file name where your chosen script is called.

If using the archive script make sure to change the .env.example name to .env and replace each parameter with your credentials.

fulfilment_default_price_lists, billing.fulfilment_price_lists, huboo.hubpic_channel_shipment_services_lookup OR huboo.hubpic_channeldetails.

Custom_Price_Example.csv, Default_Example.csv, Shipment_mapping_example, huboo_sku's.csv files are provided in this repository.

The SQL insert statements will be generated and saved to the ./custom_output, ./default_output folder, shipment_mapping_output OR Archive Output depending on the type of CSV file you provided.

The generated SQL file can be executed against a database to insert the data from the CSV file.


1.Navigate to CSV_SQL:

  run cd CSV_SQL

2.Install dependencies with

  npm i

3.To use the scripts, simply run the following commands:

  npm run Default if importing into billing.fulfilment_default_price_lists

  npm run Custom if importing into billing.fulfilment_price_lists

  npm run Shipping if importing into huboo.hubpic_channel_shipment_services_lookup

  npm run Archive if creating update queries for huboo.hubpic_channeldetails

-----------------------------------------------------
