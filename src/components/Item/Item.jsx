import Button from "../boton/Button";
import "./Item.css";

function Item(props) {
  return (
    <div className="card">
        <div className="card-img">
            <img src={props.imgurl} alt="imagen del producto"/>

        </div>
        <div className="card-detail"><h2>{props.title}</h2>
        <p>{props.detail}</p>
        <h4 className="priceTag">$ {props.price}</h4>
        </div>
        
    </div>
  );
}

export default Item;