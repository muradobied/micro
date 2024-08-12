const express = require('express');
const axios = require('axios');

const app = express();
const port = process.env.PORT || 3001;

app.get('/health', (req, res) => {
  res.status(200).send('Microservice 1 is healthy');
});

app.get('/check-microservice-2', async (req, res) => {
  try {
    const response = await axios.get('http://microservice-2:3002/health');
    res.status(200).send(`Microservice 2 is healthy: ${response.data}`);
  } catch (error) {
    res.status(500).send('Microservice 2 is down');
  }
});

app.listen(port, () => {
  console.log(`Microservice 1 running on port ${port}`);
});
