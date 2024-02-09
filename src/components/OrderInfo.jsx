/* eslint react/prop-types: 0 */
import '../styles/orderInfo.css'

const OrderInfo = ({ handleClick, selectedOrder }) => {

    const openOrderInfo = () => {
        handleClick()
    }

    const populateProducts = (products) => {
        return (
            products.map((product, index) => {
                return (
                    <span key={index}><p>{`${product.name} - ${product.quantity}`}</p></span>
                )
            })
        )
    }

    return (
        <div className="order-info-container">
            <button type="button" onClick={openOrderInfo} className="back-button btn m-3">
                Back
            </button>
            <div className="order-details">
                <p>Name: {selectedOrder.customerDetails.name}</p>
                <p>Email: {selectedOrder.customerDetails.email}</p>
                <div className="product-list">
                    <p>Products:</p>
                    <span>{selectedOrder.cartItems ? populateProducts(selectedOrder.cartItems) : 'Error'}</span>
                </div>
                <p>Address: {`${selectedOrder.customerDetails.address.line1} ${selectedOrder.customerDetails.address.city}, ${selectedOrder.customerDetails.address.state}, ${selectedOrder.customerDetails.address.postal_code}`}</p>
                <p>Status: {selectedOrder.isPending ? 'Pending' : 'Finalized'}</p>
                {selectedOrder.isPending && (
                    <button className=" btn">Finalize</button>
                )}
            </div>
        </div>
    )
}

export default OrderInfo