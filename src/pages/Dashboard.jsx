import { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Document, Page, Text, View, StyleSheet, PDFViewer, Font } from '@react-pdf/renderer';
import { PDFDocument, rgb } from 'pdf-lib';
import ItemBox from "../components/ItemBox"
import OrderInfo from '../components/OrderInfo'
import { OrderContext } from '../contexts/OrdersContext'

const Dashboard = () => {
    const { orders, refreshData, loggedIn } = useContext(OrderContext)
    const [orderInfo, setOrderInfo] = useState(false)
    const [selectedOrder, setSelectedOrder] = useState({})
    const navigate = useNavigate()

    useEffect(() => {
        if (loggedIn) {
            refresh()
        }
        else {
            navigate('/login')
        }
    }, [loggedIn])

    const refresh = () => {
        refreshData()
    }

    const showOrderInfo = () => {
        if (orderInfo) {
            setSelectedOrder({})
        }
        setOrderInfo(prevBool => !prevBool)
    }

    const selectOrder = (id) => {
        const selected = orders.find(order => order._id === id);
        setSelectedOrder(selected);
    }

    const populateItems = (items) => {
        return (
            items.map((item) => {
                return (
                    <ItemBox 
                        key={item._id}
                        item={item}
                        handleClick={showOrderInfo}
                        selectOrder={selectOrder}
                    />
                )
            }) 
        )
    }
    const populateProducts = (products) => {
        if (!products) {
            return [];
        }
        return products.map((product) => {
            return `${product.name} - Quantity: ${product.quantity}`;
        });
    };


    const generateList = async () => {
        try {
            const pdfDoc = await PDFDocument.create();
            const page = pdfDoc.addPage();
    
            // Embed font (replace '...' with your font data)
            // const font = await pdfDoc.embedFont(Font.OpenTypeFormat.fromBase64('...'));
    
            // Draw text on the page
            page.drawText('Sweetheart Beer & Wine Festival Tickets', { x: 50, y: 750, size: 24 });
    
            // Add orders data
            let yOffset = 850;
            orders.forEach((order) => {
                yOffset -= 140;
                page.drawText(`Ticket:`, { x: 50, y: yOffset - 20, size: 18 });
                page.drawText(`Name: ${order.customerDetails.name}`, { x: 50, y: yOffset - 40, size: 14 })
                page.drawText(`Email: ${order.customerDetails.email}`, { x: 50, y: yOffset - 60, size: 14 })
                const productsString = populateProducts(order.cartItems).join(', ') || 'No products';
                page.drawText(`Ticket Type: ${productsString}`, { x: 50, y: yOffset - 80, size: 14 });
                // Add more details as needed
            });
    
            // Save PDF to memory
            const pdfBytes = await pdfDoc.save();
    
            // Create blob from PDF bytes
            const pdfBlob = new Blob([pdfBytes], { type: 'application/pdf' });
    
            // Create URL for the blob
            const pdfUrl = URL.createObjectURL(pdfBlob);
    
            // Open the PDF in a new tab for printing or downloading
            window.open(pdfUrl, '_blank');
        } catch (error) {
            console.error('Error generating PDF:', error);
        }

    }

    return (
        <div className="container-fluid main-container">
            <div className='m-2'>
                <button
                    type='button'
                    className='btn m-5'
                    onClick={refresh}  
                >
                    Refresh
                </button>
                <button
                    type='button'
                    className='btn m-2'
                    onClick={generateList}  
                >
                    Generate List
                </button>
            </div>
            <div className='row'>
                {orderInfo ? <OrderInfo  handleClick={showOrderInfo} selectedOrder={selectedOrder} /> : orders.length < 1 ? 'loading...' : populateItems(orders)}
            </div>
                
                
        </div>
    )
}

export default Dashboard