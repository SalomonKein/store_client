import React from 'react';
import { Card, Row } from 'react-bootstrap';
import { connect, useDispatch } from "react-redux";
import { selectBrand } from '../redux/Shop/actions';


const BrandBar = (shop) =>{
    const brands = shop.shop.brands;
    const selectedBrand = shop.shop.selectedBrand;
    const dispatch = useDispatch()
    return (        
    <Row className="d-flex">
        {brands.map(brand=>       
        <Card 
        style={{cursor: 'pointer', width: '100px', marginRight: '5px'}}        
        onClick={()=> dispatch(selectBrand(brand))}
        border={brand.id === selectedBrand.id ? 'danger':'gray'}
        key={brand.id}
        className="p-3">
            {brand.name}
        </Card>
        )}
    </Row>
        
    )
}


const mapStateToProps = state => {  
    return{
        shop: state.shop
    }
  }

  export default connect(mapStateToProps, null)(BrandBar)