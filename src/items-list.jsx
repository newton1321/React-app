import "./items-list.css"
import Items from "./items.jsx"
import pizza from "./assets/pizza.png"
import pasta from "./assets/pasta.png"
import risotto from "./assets/Risotto-alla-Milanese.png"
import lasagna from "./assets/lasagna.png"
import foaccia from "./assets/Focaccia.png"
import arancini from "./assets/Arancini.png"
import { useState } from "react"

function List(){
    const [quantityPizza, setQuantityPizza] = useState(0);
    const [quantityPasta, setQuantityPasta] = useState(0);
    const [quantityRisotto, setQuantityRisotto] = useState(0);
    const [quantityLasagna, setQuantityLasgna] = useState(0);
    const [quantityFoaccia, setQuantityFoaccia] = useState(0);
    const [quantityArancini, setQuantityArancini] = useState(0);
    let total = (quantityPizza * 50) + (quantityPasta * 30) + (quantityRisotto * 60) + (quantityLasagna * 40) + (quantityFoaccia * 45) + (quantityArancini * 25);

    const list = [quantityPizza, quantityPasta, quantityRisotto, quantityLasagna, quantityFoaccia, quantityArancini]

    const[purchase_clicked, setClicked] = useState(false);

    const clicked_purchase = () => {
        for (let i = 0; i < list.length; i++){
            if (list[i] != 0){
                setClicked(!purchase_clicked);
            }
        }
    }

    const close = () => {
        setClicked(!purchase_clicked);
    }

    const reset = () => {
        setQuantityPizza(0)
        setQuantityPasta(0)
        setQuantityRisotto(0)
        setQuantityLasgna(0)
        setQuantityFoaccia(0)
        setQuantityArancini(0)
    }
    
    return(
        <>
        <table className="Items-list">
            <h1 className="receipt">Receipt</h1>
            <tr>
                <th>Items</th>
                <th>Price</th>
                <th>Quantity</th>
            </tr>
            <tr>
                <th>Pizza</th>
                <th>50$</th>
                <th>{quantityPizza}</th>
            </tr>
            <tr>
                <th>Pasta</th>
                <th>30$</th>
                <th>{quantityPasta}</th>
            </tr>
            <tr>
                <th>Risotto</th>
                <th>60$</th>
                <th>{quantityRisotto}</th>
            </tr>
            <tr>
                <th>Lasgna</th>
                <th>40$</th>
                <th>{quantityLasagna}</th>
            </tr>
            <tr>
                <th>Foaccia</th>
                <th>45$</th>
                <th>{quantityFoaccia}</th>
            </tr>
            <tr>
                <th>Aranicini</th>
                <th>25$</th>
                <th>{quantityArancini}</th>
            </tr>
            <tr>
                <th>Total</th>
                <th></th>
                <th>{total}$</th>
            </tr>
            <br/>
            <button className="Purchase" onClick={() => clicked_purchase()}>Purchase</button>
            <button className="Reset" onClick={() => reset()}>Reset</button>
        </table>
        <div className="Items">
        <Items quantity={quantityPizza} handleQtyChange={setQuantityPizza} price = {50} name = "Pizza" img = {pizza} dis = "Pizza is a dish made with a flat, round base of dough topped with sauce, cheese, and various toppings, baked until crisp."/>
        <Items quantity={quantityPasta} handleQtyChange={setQuantityPasta} price = {30} name = "Pasta" img = {pasta} dis = "A versatile Italian dish made from wheat dough, shaped into various forms, and cooked in boiling water."/>
        <Items quantity={quantityRisotto} handleQtyChange={setQuantityRisotto} price = {60} name = "Risotto" img = {risotto} dis = "A creamy Italian rice dish cooked with broth until tender, often mixed with vegetables, meat, or seafood."/>
        <Items quantity={quantityLasagna} handleQtyChange={setQuantityLasgna} price = {40} name = "Lasagna" img = {lasagna} dis = "A baked Italian dish made with layers of pasta, meat or vegetables, cheese, and sauce."/>
        <Items quantity={quantityFoaccia} handleQtyChange={setQuantityFoaccia} price = {45} name = "Foaccia" img = {foaccia} dis = "A flat oven-baked Italian bread, typically seasoned with olive oil, salt, and herbs."/>
        <Items quantity={quantityArancini} handleQtyChange={setQuantityArancini} price = {25} name = "Aranicini" img = {arancini} dis = "Deep-fried rice balls filled with ingredients like cheese, meat, or vegetables, originating from Sicily."/>
        </div>
        {
            purchase_clicked &&
            <>
            <div className="blur">
            </div>
            <div className="purchase-box">
                <h1 className="purchase-text">Thank You For Purchasing</h1>
                <button className="close" onClick={() => close()}>close</button>
            </div>
            </>
        }
        </>
    );
};
    
    
export default List