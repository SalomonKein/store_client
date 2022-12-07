import React, {useEffect, useState} from 'react';
import {Card, Col, Container, Image, Row, Button} from 'react-bootstrap';
import {connect, useDispatch, useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';
import bigStar from '../assets/bigStar.png';
import {fetchBrands, fetchOneDevices} from '../http/deviceAPI';
import {setBrands} from '../redux/Shop/actions';
import imgArray from '../utils/img';

const DevicePage = ({brands}) => {
  const dispatch = useDispatch();
  const {id} = useParams();
  const initialState = useSelector((state) => state.shop);
  const initialDevice = initialState.devices.find((item) => item.id == id);
  const [device, setDevice] = useState(initialDevice);
  const brand = brands.find((item) => item.id === device.brandId);

  const img = imgArray.find((item) => item.id === device.typeId);

  useEffect(() => {
    fetchOneDevices(id).then((data) => setDevice(data));
    fetchBrands().then((data) => dispatch(setBrands(data)));
  }, []);

  return (
    <Container className="mt-3">
      <Row>
        <Col md={4}>
          <Image width={300} height={300} src={img.img} />
        </Col>
        <Col md={4}>
          <Row className="d-flex flex-column align-items-center">
            <h1 style={{textAlign: 'center'}}>{brand ? brand.name : null}</h1>
            <h2 style={{textAlign: 'center'}}>{device.name}</h2>
            <div
              className="d-flex align-items-center justify-content-center"
              style={{
                background: `url(${bigStar}) no-repeat center center`,
                width: 240,
                height: 240,
                backgroundSize: 'cover',
                fontSize: 64,
              }}
            >
              {device.raiting}
            </div>
          </Row>
        </Col>
        <Col md={4}>
          <Card
            className="d-flex flex-column align-items-center justify-content-around"
            style={{
              widnh: 300,
              height: 300,
              fontSize: 32,
              border: '5px solid lightgray',
            }}
          >
            <h3>from: {device.price} hrn.</h3>
            <Button
              variant={'outline-dark'}
              onClick={() => alert('item added to basket')}
            >
              Add to bascket
            </Button>
          </Card>
        </Col>
      </Row>
      <Row className="d-flex flex-column m-3">
        <h1>Descriptions</h1>
        {device.info?.map((info, index) => (
          <Row
            key={info.id}
            style={{
              background: index % 2 === 0 ? 'lightgray' : 'transparent',
              padding: 10,
            }}
          >
            {info.title} : {info.description}
          </Row>
        ))}
      </Row>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    brands: state.shop.brands,
  };
};

export default connect(mapStateToProps, null)(DevicePage);
