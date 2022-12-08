import React from 'react';
import './ItemList.css'

const ItemList = (props) => {
    return (
        <div className='container'>
            <div className="row row-cols-6 ">
                {props.items.map((item, index)=> <div className='col'>
                    <img src = {item.image} alt = "title"></img>
                    </div>
                )}
            </div>
        </div>        
    )
}

export default ItemList;