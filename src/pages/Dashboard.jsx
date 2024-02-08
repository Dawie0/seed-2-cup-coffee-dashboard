import { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import ItemBox from "../components/ItemBox"
import { OrderContext } from '../contexts/OrdersContext'

const Dashboard = () => {
    const { orders, refreshData, loggedIn } = useContext(OrderContext)
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

    const populateItems = (items) => {
        return (
            items.map((item) => {
                return (
                    <ItemBox 
                        key={item._id}
                        item={item}
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
                {orders.length < 1 ? 'loading...' : populateItems(orders)}
            </div>
                
                
        </div>
    )
}

export default Dashboard