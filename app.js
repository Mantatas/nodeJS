const express = require('express');
const mechanicsRouter = require('./routes/mechanicsRoutes')
const userRoutes = require('./routes/userRoutes')
const serviceRoutes = require('./routes/serviceRoutes')

const app = express();
app.use(express.json());

app.use('/api/v1/mechanics', mechanicsRouter)
app.use('/api/v1/users', userRoutes)
app.use('/api/v1/service', serviceRoutes)

module.exports = app;