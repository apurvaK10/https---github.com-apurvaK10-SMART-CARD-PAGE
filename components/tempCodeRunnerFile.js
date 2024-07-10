import { jsPDF } from 'jspdf';
import React from 'react';

function ECard({ registrationData }) {
  const generatePDF = () => {
    const doc = new jsPDF();
    doc.text(`Name: ${registrationData.name}`, 10, 10);
    doc.text(`UHID: ${registrationData.uhid}`, 10, 20);
    doc.text(`PIS Code: ${registrationData.pisCode}`, 10, 30);
    // Add more fields as needed
    doc.save('ecard.pdf');
  };

  return (
    <div>
      <button onClick={generatePDF}>Generate e-Card</button>
    </div>
  );
}

export default ECard;