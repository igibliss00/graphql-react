const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// allow cross-origin requests
app.use(cors());

// connect to mlab database
mongoose.connect('mongodb://theobsessivepalate:Abcd1234!@ds229690.mlab.com:29690/theobsessivepalate', { useNewUrlParser: true });
mongoose.connection.once('open', () => {
    console.log('connected to database');
});

// bind express with graphql
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(4000, () => {
    console.log('now listening for requests on port 4000');
});