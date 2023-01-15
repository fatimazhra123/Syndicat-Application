import axios from "axios";
import jsPDF from "jspdf";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";


const PdfPaiment = () => {
  const [cin, setCin] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [namberDappartement, setNamberDappartement] = useState({});

  const id = useParams();

  useEffect(() => {
    const url = `http://localhost:8080/api/payement/Payement/${id.id}`;
    
    console.log("dgdhdhdhdh"+url);
    axios.get(url)
      .then((res) => {
        console.log(res);
        setCin(res.data.cin);
        setAmount(res.data.amount);
        setDate(res.data.date);
        setNamberDappartement(res.data.namberDappartement);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const generatePDF = () => {
    const doc = new jsPDF("p", "pt", "a4");
    doc.html(document.querySelector("#paiment"), {
      callback: function (pdf) {
        pdf.save("paiment.pdf");
      },
    });
  };

  return (
    <>
      <div>
        <div id="paiment">
          <p>{cin.cin} </p>
          <p>{namberDappartement.namberDappartement} </p>
          <p>{date} </p>
          <p>{amount} </p>
        </div>
        <button onClick={generatePDF}>PDF</button>
      </div>
    </>
  );
};

export default PdfPaiment;