import React from 'react';
import Item from './Item';
import FlexContainer from './FlexContainer';

function ItemList(props) {
  return (
    <div>
      <h2>{props.greeting}</h2>
      <FlexContainer>
        {props.products.map((item) => ( 
          <Item
            key={item.id}
            id={item.id}
            title={item.title}
            price={item.price}
            text={item.category}
            img={item.img}
            discount={item.discount}
            />
        ))}
      </FlexContainer>
    </div>
  );
}

export default ItemList;
