# second-line-support
A place to store a range of scripts needed to perform 2nd line support duties

Run "python3 main.py"

## CSV > MySQL Import tool
This script converts a CSV file to SQL insert statements.

Setup:

Place your CSV file in the ./Custom_csv or ./Default_csv folder, depending on whether your file is for billing.fulfilment_default_price_lists OR billing.fulfilment_price_lists. Custom_Price_Example.csv or Default_Example.csv example files are provided in this repository.

The SQL insert statements will be generated and saved to the ./custom_output or ./default_output folder, depending on the type of CSV file you provided.

The generated SQL file can be executed against a database to insert the data from the CSV file.

Clone the repository:

<https://github.com/huboo-technologies/second-line-support.git>

1. Navigate to the csv_SQL:

  run cd CSV_SQL

2. Install dependencies with

  npm i

3. To use the scripts, simply run the following commands:

  npm run Default if importing into billing.fulfilment_default_price_lists

  npm run Custom if importing into billing.fulfilment_price_lists 

-----------------------------------------------------
