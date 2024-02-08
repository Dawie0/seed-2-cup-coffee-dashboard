/* eslint react/prop-types: 0 */

import '../styles/itemBox.css'

const ItemBox = ({ item }) => {

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
        <div className="d-flex item-box-row m-2 pd-2 justify-content-center align-items-center">
            
            <div className='col-xs-1 col-md-1 m-1'>
                <div className="wrap-content"><p>{item.customerDetails.name}</p></div>
            </div>
            <div className='col-md-2 m-1 d-none d-md-block'>
                <div className="wrap-content">{item.customerDetails.email}</div>
            </div>
            <div className='col-xs-2 col-md-2 m-1'>
                <div className="wrap-content">{item.cartItems ? populateProducts(item.cartItems) : 'error'}</div>
            </div>
            <div className='col-xs-2 col-md-2 m-1'>
                <div className="wrap-content">
                    {`${item.customerDetails.address.line1} ${item.customerDetails.address.line1 ? item.customerDetails.address.line1 : ''},
                    ${item.customerDetails.address.city}, ${item.customerDetails.address.state}, ${item.customerDetails.address.postal_code}`}
                </div>
            </div>
            <div className='col-xs-1 col-md-1 m-1'>
                <div className="wrap-content">{item.isPending ? 'Is Pending' : 'Finalized'}</div>
            </div>
            <div className='col-xs-1 col-md-1'>
                <div className="wrap-content">{item.isPending ? <button>Finalize</button> : 'Checked'}</div>
            </div>
        </div>
    )
}


export default ItemBox