const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const cors = require('cors');
const app = express();
app.use(cors());
const portNumber = '10700';
const endpoint  = 'http://127.0.0.1:'+portNumber+'/db/edgedb/graphql'
app.use('/graphql',createProxyMiddleware({target:endpoint}));
app.listen(3000);