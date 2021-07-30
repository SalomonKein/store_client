import React from 'react';
import { Row } from 'react-bootstrap';
import { connect } from "react-redux";
import DeviceItem from './DeviceItem';



const DeviceList = (shop) => {
    const devices = shop.shop.devices;
    // const dispatch = useDispatch()
    return (        
    <Row className="d-flex">
        {devices.map(device=>       
        <DeviceItem 
        key={device.id}
        device = {device}/>
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