import React from 'react';
import './ItemList.css'

const ItemList = (props) => {
    return (
        <div className='container'>
            <div className="row row-cols-4">
                {props.items.map((item, index)=> <div className='col-md-2 card-body'>
                        <img src = {item.image} alt = "title"></img>
                        <div>                            
                            <h3>{item.title}</h3>
                            <h3>${item.price}</h3>                          
                        </div>
                    </div>
                )}
            </div>
        </div>        
    )
}

export default ItemList;