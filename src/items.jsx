import "./items.css"


function Items(props){
    
    const add = () => {
        props.handleQtyChange( props.quantity + 1);
    }
    
    const subtract = () => {
        if( props.quantity > 0){
            props.handleQtyChange( props.quantity - 1);
    }
        
    }

    return(
        <div className="Item-card">
            <img src = {props.img} className="Item-image"/>
            <div className="Item-info">
                <h1 className="Item-name">{props.name}</h1>
                <p className="Item-description">
                {props.dis}
                <p className="Item-price"> Price: {props.price}$</p>
                </p>
                <div className="Item-quantity">
                    <button className="button" id = "add" onClick={add}>+</button>
                    <p className="quantity">{props.quantity}</p>
                    <button className="button" id = "subtract" onClick={subtract}>-</button>
            </div>
            </div>
            </div>
    
    );
}

export default Items