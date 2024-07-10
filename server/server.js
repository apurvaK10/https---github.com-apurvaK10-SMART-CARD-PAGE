import bodyParser from 'body-parser';
import cors from 'cors';
import { createObjectCsvWriter } from 'csv-writer';
import express from 'express';
import path from 'path';

const app = express();
const __dirname = path.resolve();

app.use(bodyParser.json());
app.use(cors());

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'smart-card-registration', 'build')));

app.post('/register', (req, res) => {
  const { serialNo, uhid, name, age, dob, pisCode, relation, status, designation, unit, aadhaar } = req.body;

  const data = [
    { 'Serial No': serialNo, 'UHID': uhid, 'Name': name, 'Age': age, 'Date of Birth': dob, 'PIS Code': pisCode, 'Relation': relation, 'Status': status, 'Designation': designation, 'Unit': unit, 'Aadhaar': aadhaar }
  ];

  const csvWriter = createObjectCsvWriter({
    path: 'registration_data.csv',
    header: [
      { id: 'serialNo', title: 'Serial No' },
      { id: 'uhid', title: 'UHID' },
      { id: 'name', title: 'Name' },
      { id: 'age', title: 'Age' },
      { id: 'dob', title: 'Date of Birth' },
      { id: 'pisCode', title: 'PIS Code' },
      { id: 'relation', title: 'Relation' },
      { id: 'status', title: 'Status' },
      { id: 'designation', title: 'Designation' },
      { id: 'unit', title: 'Unit' },
      { id: 'aadhaar', title: 'Aadhaar' }
    ]
  });

  csvWriter.writeRecords(data)
    .then(() => {
      console.log('CSV file written successfully');
      res.send('Registration successful');
    })
    .catch((error) => {
      console.error('Error writing CSV file:', error);
      res.status(500).send('Internal Server Error');
    });
});

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'smart-card-registration', 'build', 'index.html'));
});

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
