import React from 'react';
import { Row } from 'react-bootstrap';
import { connect } from "react-redux";
import DeviceItem from './DeviceItem';



const DeviceList = ({shop}) => {
    const devices = shop.devices;
    const brands = shop.brands;
    // const dispatch = useDispatch()
    return (        
    <Row className="d-flex">
        {devices.map(device=>       
        <DeviceItem 
        key={device.id}
        device = {device}
        brand ={(brands.find(item => item.id === device.brandId)).name}/>
        )}
    </Row>
        
    )
}


const mapStateToProps = state => {
    return{
        shop: state.shop
    }
  }
  
  export default connect(mapStateToProps, null)(DeviceList)