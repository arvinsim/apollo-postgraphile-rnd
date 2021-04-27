const express = require("express");
const { postgraphile } = require("postgraphile");

const app = express();

app.use(
    postgraphile(
        // process.env.DATABASE_URL || "postgres://user:pass@host:5432/dbname",
        "postgres://docker:docker@localhost:5432/postgres",
        "public",
        {
            watchPg: true,
            graphiql: true,
            enhanceGraphiql: true,
        }
    )
);

// app.listen(process.env.PORT || 3000);
app.listen(9999);
