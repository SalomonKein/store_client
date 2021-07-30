import React from 'react';
import { connect, useDispatch } from "react-redux";
import { ListGroup } from 'react-bootstrap';
import { selectType } from '../redux/Shop/actions';

const TypeBar = (shop) =>{
    const types = shop.shop.types;
    const selectedType = shop.shop.selectedType;
    const dispatch = useDispatch()
    return (        
    <ListGroup>
        {types.map(type=>
        <ListGroup.Item 
        style={{cursor: 'pointer'}}
        active={type.id === selectedType.id}
        onClick={()=> dispatch(selectType(type))}
        key={type.id}>
            {type.name}
        </ListGroup.Item>
        )}
    </ListGroup>
        
    )
}


const mapStateToProps = state => {  
    return{
        shop: state.shop
    }
  }

  export default connect(mapStateToProps, null)(TypeBar)