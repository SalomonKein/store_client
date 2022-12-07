import React from 'react';
import { Card, Col } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import { useHistory } from 'react-router-dom';
import star from '../assets/star.png'
import { DEVICE_ROUTE } from '../utils/consts';
import imgArray from "../utils/img"


const DeviceItem = ({ device, brand }) => {
    const history = useHistory()
    const img = imgArray.find(item => item.id === device.typeId)


    return (
        <Col md={3} className="mt-3" onClick={() => history.push(DEVICE_ROUTE + '/' + device.id)}>
            <Card style={{ width: 150, cursor: 'pointer' }} border={"light"}>
                <Image width={150} height={150} src={img.img} />
                <div className="text-black-50 mt-1 d-flex justify-content-between align-items-center">
                    <div>{brand}</div>
                    <div className="d-flex align-items-center">
                        <div>{device.rating}</div>
                        <Image width={18} height={18} src={star} />
                    </div>
                </div>
                <div>{device.name}</div>
            </Card>
        </Col>
    )
}

export default DeviceItem;