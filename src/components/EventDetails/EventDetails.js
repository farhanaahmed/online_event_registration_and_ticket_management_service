import React from 'react';
import QRCode from 'react-qr-code';
import { useLocation } from 'react-router-dom';
import Header from '../Header/Header';
import './EventDetails.css'
import * as htmlToImage from 'html-to-image';
import { jsPDF } from "jspdf";


const EventDetails = () => {

    const {state} = useLocation();
    const event = state.event;

    const onDownloadClicked = ()=>{
        htmlToImage.toPng(document.getElementById("ticket"), { quality: 0.95 })
        .then(function (dataUrl) {
          var link = document.createElement('a');
          link.download = 'my-image-name.jpeg';
          const pdf = new jsPDF();          
          const imgProps= pdf.getImageProperties(dataUrl);
          const pdfWidth = pdf.internal.pageSize.getWidth();
          const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
          pdf.addImage(dataUrl, 'PNG', 0, 0,pdfWidth, pdfHeight);
          pdf.save("ticket.pdf"); 
        });
    }

    return (
        <div>
            <Header></Header>
            <div>
                <div id='ticket'>
                    <h2>{event.name}</h2>
                    <p className='description'>{event.description}</p>
                    <h3>Location : {event.location}</h3>
                    <h3>Date : {event.date}</h3>
                    <h3>Ticket Price: {event.price} BDT</h3>
                    <QRCode className='.qr-code' value={JSON.stringify({
                        name: event.name,
                        location: event.location,
                        date : event.date,
                        price : event.price
                    })} />
                </div>
                <br />
                <button onClick={onDownloadClicked}>Download Ticket</button>
            </div>
        </div>
        
    );
};

export default EventDetails;