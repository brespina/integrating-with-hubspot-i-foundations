require('dotenv').config()
const express = require('express');
const axios = require('axios');
const app = express();

// fails bc no dotenv module
const POSTMAN_PRIVATE_APP_ACCESS = process.env.POSTMAN_PRIVATE_APP_ACCESS
console.log(POSTMAN_PRIVATE_APP_ACCESS)

app.get('/', async (req, res) => {
    const companies = 'https://api.hubspot.com/crm/v3/objects/companies';
    const headers = {
        Authorization: `Bearer ${POSTMAN_PRIVATE_APP_ACCESS}`,
        'Content-Type': 'application/json'
    }
    try {
        const response = await axios.get(companies, { headers });
        res.json(response.data.results);    
    } catch (error) {
        console.error(error);
    }
});

app.listen(3000, () => console.log('Listening on http://localhost:3000'));