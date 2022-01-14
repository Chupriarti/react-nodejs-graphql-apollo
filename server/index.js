const express = require('express');
const {graphqlHTTP} = require('express-graphql');
const cors = require('cors');
const schema = require('./schema');
const users = [];

const app = express();
app.use(cors());

const root = {
    getAllUsers: () => {

    },
    getUser: ({id}) => {

    }
}

app.use('/graphql', graphqlHTTP({
    graphiql: true,
    schema
}));

app.listen(5000, () => console.log('Server started at 5000'));
