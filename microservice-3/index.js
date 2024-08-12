const express = require('express');
const axios = require('axios');

const app = express();
const port = process.env.PORT || 3003;

app.get('/health', (req, res) => {
  res.status(200).send('Microservice 3 is healthy');
});

app.get('/check-microservice-4', async (req, res) => {
  try {
    const response = await axios.get('http://microservice-4:3004/health');
    res.status(200).send(`Microservice 4 is healthy: ${response.data}`);
  } catch (error) {
    res.status(500).send('Microservice 4 is down');
  }
});

app.listen(port, () => {
  console.log(`Microservice 3 running on port ${port}`);
});
