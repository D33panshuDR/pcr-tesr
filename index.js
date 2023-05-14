const express = require('express');
const axios = require('axios');

const app = express();
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
app.get('/pcr', async (req, res) => {
    try {
      const response = await axios.get('https://www.nseindia.com/api/option-chain-indices?symbol=NIFTY');
      const data = response.data;
      const pcr = data.filtered.CE.totOI;
      res.send(`NIFTY PCR Ratio: ${JSON.stringify(pcr)}`);
    } catch (error) {
      console.log(error);
      res.status(500).send('Error fetching data');
    }
  });
  
