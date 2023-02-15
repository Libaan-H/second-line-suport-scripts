A repository to store a range of scripts needed to perform 2nd line support duties.

CSV to MySQL Import Tool
This script converts a CSV file to SQL insert statements.

Setup
Place your CSV file in the following folders: ./Custom_csv, ./Default_csv, ./Shipment_Mapping_csv, or ./Archive_csv.
Open the example CSV you want to use and input your information in the same format. Ensure you save it back to the same folder that you opened from.
If changing the name of the CSV, make sure you change the file name where your chosen script is called.
If using the archive script, make sure to change the .env.example name to .env and replace each parameter with your credentials.
Custom_Price_Example.csv, Default_Example.csv, Shipment_mapping_example, and huboo_sku's.csv files are provided in this repository.
The SQL insert statements will be generated and saved to the ./custom_output, ./default_output, shipment_mapping_output, or Archive Output folder depending on the type of CSV file you provided.
The generated SQL file can be executed against a database to insert the data from the CSV file.
Instructions
Navigate to CSV_SQL by running cd CSV_SQL.
Install dependencies with npm i.
To use the scripts, simply run the following commands:
npm run Default if importing into billing.fulfilment_default_price_lists
npm run Custom if importing into billing.fulfilment_price_lists
npm run Shipping if importing into huboo.hubpic_channel_shipment_services_lookup
npm run Archive if creating update queries for huboo.hubpic_channeldetails.
