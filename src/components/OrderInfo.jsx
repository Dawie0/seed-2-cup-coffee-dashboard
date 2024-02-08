/* eslint react/prop-types: 0 */

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
        <div >
            <button type="button" onClick={openOrderInfo}>
                back
            </button>
            <div className="col">
                <p>{selectedOrder.customerDetails.name}</p>
                <p>{selectedOrder.customerDetails.email}</p>
                <p>{selectedOrder.cartItems ? populateProducts(selectedOrder.cartItems) : 'error'}</p>
                <p>{`${selectedOrder.customerDetails.address.line1} ${selectedOrder.customerDetails.address.line1 ? selectedOrder.customerDetails.address.line1 : ''},
                    ${selectedOrder.customerDetails.address.city}, ${selectedOrder.customerDetails.address.state}, ${selectedOrder.customerDetails.address.postal_code}`}</p>
                <p>{selectedOrder.isPending ? 'Is Pending' : 'Finalized'}</p>
                <p>{selectedOrder.isPending ? <button>Finalize</button> : 'Checked'}</p>
            </div>
        </div>
    )
}

export default OrderInfo