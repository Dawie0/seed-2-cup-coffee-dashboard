/* eslint react/prop-types: 0 */
import { createContext, useState, useEffect } from "react";
import axios from "axios";


const OrderContext = createContext()

const OrderContextProvider = ({ children }) => {
    const [orders, setOrders] = useState([])
    const [refresh, setRefresh] = useState(false)
    const [loggedIn, setLoggedIn] = useState(false)

    useEffect(() => {
        if (refresh) {
            getItems()  
        }
    }, [refresh])

    const logIn = () => {
        setLoggedIn(true)
    }

    const getItems = async () => {
        try {
            const response = await axios.get('https://seed2cupcoffee-backend-vercel-swart.vercel.app/get-orders', { responseType: 'json' })
            setOrders(response.data)
        }
        catch (error) {
            console.error('error getting data: ', error)
        }
        finally {
            console.log('context: ', refresh)
            setRefresh(false)
        }   
    } 

    const refreshData = () => {
        setOrders([])
        setRefresh(true)
    }

    const values = {
        orders,
        setRefresh,
        refreshData,
        loggedIn,
        logIn
    }
    
    return (
        <OrderContext.Provider value={values}>
            {children}
        </OrderContext.Provider>
    )

} 

export {OrderContext, OrderContextProvider}