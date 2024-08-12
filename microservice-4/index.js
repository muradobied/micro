const express = require('express');
const axios = require('axios');

const app = express();
const port = process.env.PORT || 3004;

app.get('/health', (req, res) => {
  res.status(200).send('Microservice 4 is healthy');
});

app.get('/check-microservice-3', async (req, res) => {
  try {
    const response = await axios.get('http://microservice-3:3003/health');
    res.status(200).send(`Microservice 3 is healthy: ${response.data}`);
  } catch (error) {
    res.status(500).send('Microservice 3 is down');
  }
});

app.listen(port, () => {
  console.log(`Microservice 4 running on port ${port}`);
});
