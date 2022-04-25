import { useNavigate, Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';
import {Card} from 'react-bootstrap'
import {useState, useContext} from 'react' 
import {CartContext} from "../Context/CartContext"

const cargarImagen = require.context('./../../images', true);

/* Props para el ItemCount */
const onAdd=(cantidad)=>{
  if(cantidad==0){
    alert("Lo siento no tienes stock que comprar");
  }
}


const ItemDetail = ({id}) => {
  const {description, stock, category, price, url} = id;
    const {addItem, isInCart}=useContext(CartContext)

    const navigate=useNavigate();
    const handleNavigate=()=>{
      navigate(-1);
    }

    const [cantidad, setCantidad]=useState(1);

    const agregarAlCarrito=()=>{
      const itemAdd={id, description, stock, category, price, url, cantidad}
      addItem(itemAdd);
      console.log(itemAdd);
    }

  return (
    <>

      <div className="d-flex align-items-center flex-column">
          <h4>{description}</h4>
          <strong>Stock disponible: {stock}</strong>
          <Card.Img variant="top" src={cargarImagen(`${url}`)} className="itemImage" />
          <h4>PRECIO: {price}ARS</h4>

          {
            stock > 0 &&
            <>
              {
                !isInCart(id)
                  ? <ItemCount stock={stock}
                      cantidad={cantidad}
                      setCantidad={setCantidad}
                      onAdd={agregarAlCarrito} /> 
                  : <Link to="/cart">
                      <button className="btn btn-primary">FINALIZAR COMPRA</button>
                    </Link>
              }
            </>
          }
          {
            stock === 0 &&
            <strong style={{color: "red"}}>Lo siento este producto no tiene stock</strong>
          }

          <button onClick={handleNavigate} className="btn btn-primary">VOLVER</button>  
      </div>

    </>
      
  )
}

export default ItemDetail

