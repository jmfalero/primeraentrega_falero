import React from 'react';
import Item from '../Item/Item';



function ItemListContainer() {
  return (
    <div>

     <Item detail="Imagen Motor" price={20000} title="primer producto" imgurl="/img/img1.jpg"/>
        <Item detail="Imagen Motor" price={25000} title="segundo producto" imgurl="/img/img2.jpg"/>
        <Item detail="Imagen Motor" price={22000}  title="tercer producto" imgurl="/img/img3.jpg"/>

    </div>
  );
}

export default ItemListContainer;