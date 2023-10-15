const { defineConfig } = require("cypress");

const { Client } = require('pg')

const connectDB = async (querys) => {

  const client = new Client({
    user: "postgres",
    host: "localhost",
    database: "Emp",
    password: "postgres",
    port: "5432"
  })

  await client.connect()
  console.log("NOTE===>DB Connection Established");
  return await client.query(querys);
};

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here

      on('task', {
        SqlQueryPS: (query) => {
          return connectDB(query);
        }
      })
    },
  },
});
