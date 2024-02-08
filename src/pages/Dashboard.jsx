import { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
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

    return (
        <div className="container-fluid">
            <div className='m-2'>
                <button
                    type='button'
                    onClick={refresh}  
                >
                    Refresh
                </button>
            </div>
            <div className='row'>
                {orderInfo ? <OrderInfo  handleClick={showOrderInfo} selectedOrder={selectedOrder} /> : orders.length < 1 ? 'loading...' : populateItems(orders)}
            </div>
                
                
        </div>
    )
}

export default Dashboard