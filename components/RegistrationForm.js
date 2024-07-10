import axios from 'axios';
import React, { useState } from 'react';

function RegistrationForm() {
  const [serialNo, setSerialNo] = useState('');
  const [uhid, setUhid] = useState('');
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [dob, setDob] = useState('');
  const [pisCode, setPisCode] = useState('');
  const [relation, setRelation] = useState('');
  const [status, setStatus] = useState('');
  const [designation, setDesignation] = useState('');
  const [unit, setUnit] = useState('');
  const [aadhaar, setAadhaar] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/register', {
        serialNo,
        uhid,
        name,
        age,
        dob,
        pisCode,
        relation,
        status,
        designation,
        unit,
        aadhaar
      });
      console.log(response.data);
      // Optionally reset form fields after successful submission
      setSerialNo('');
      setUhid('');
      setName('');
      setAge('');
      setDob('');
      setPisCode('');
      setRelation('');
      setStatus('');
      setDesignation('');
      setUnit('');
      setAadhaar('');
    } catch (error) {
      console.error('Error registering:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Serial No:</label>
        <input type="text" value={serialNo} onChange={(e) => setSerialNo(e.target.value)} required />
      </div>
      <div>
        <label>UHID:</label>
        <input type="text" value={uhid} onChange={(e) => setUhid(e.target.value)} required />
      </div>
      <div>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      </div>
      <div>
        <label>Age:</label>
        <input type="number" value={age} onChange={(e) => setAge(e.target.value)} required />
      </div>
      <div>
        <label>Date of Birth:</label>
        <input type="date" value={dob} onChange={(e) => setDob(e.target.value)} required />
      </div>
      <div>
        <label>PIS Code:</label>
        <input type="text" value={pisCode} onChange={(e) => setPisCode(e.target.value)} required />
      </div>
      <div>
        <label>Relation:</label>
        <input type="text" value={relation} onChange={(e) => setRelation(e.target.value)} required />
      </div>
      <div>
        <label>Status:</label>
        <select value={status} onChange={(e) => setStatus(e.target.value)} required>
          <option value="">Select Status</option>
          <option value="Employee">Employee</option>
          <option value="Retired">Retired</option>
        </select>
      </div>
      {status === 'Employee' && (
        <div>
          <label>Designation:</label>
          <input type="text" value={designation} onChange={(e) => setDesignation(e.target.value)} required />
        </div>
      )}
      {status === 'Employee' && (
        <div>
          <label>Unit:</label>
          <input type="text" value={unit} onChange={(e) => setUnit(e.target.value)} required />
        </div>
      )}
      {status === 'Retired' && (
        <div>
          <label>Aadhaar Number:</label>
          <input type="text" value={aadhaar} onChange={(e) => setAadhaar(e.target.value)} required />
        </div>
      )}
      <button type="submit">Register</button>
    </form>
  );
}

export default RegistrationForm;
