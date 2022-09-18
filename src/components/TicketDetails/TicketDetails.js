import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../Header/Header';
import './TicketDetails.css'
import * as htmlToImage from 'html-to-image';
import { jsPDF } from "jspdf";
import QRCode from 'react-qr-code';

const TicketDetails = () => {

    const {state} = useLocation();
    const ticket = state.ticketInfo;

        const onDownloadClicked = ()=>{
        htmlToImage.toPng(document.getElementById("ticketDetails"), { quality: 0.95 })
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
                <div id='ticketDetails'>
                    <h2>{ticket.eventName}</h2>
                    <h3>Name: {ticket.name}</h3>
                    <h3>Phone no: {ticket.phone}</h3>
                    <h3>Number of tickets: {ticket.numberOfTickets}</h3>
                    <QRCode className='.qr-code' value={JSON.stringify({
                        eventName: ticket.eventName,
                        name: ticket.name,
                        phone: ticket.phone,
                        uid: ticket.userId,
                        numberOfTickets: ticket.numberOfTickets,
                    })} />
                </div>
                <br />
                <button onClick={onDownloadClicked}>Download Ticket</button>
            </div>
        </div>
    );
};

export default TicketDetails;