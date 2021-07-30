import React, { useEffect, useState } from "react";
import { Card, Col, Container, Image, Row, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import bigStar from '../assets/bigStar.png'
import { fetchOneDevices } from "../http/deviceAPI";


const DevicePage = () => {
  const [device, setDevice] = useState({info:[]})
  console.log(device, "device");
  const {id} = useParams()
  

  useEffect(()=>{
      fetchOneDevices(id).then(data => setDevice(data))
  }, [])
  
  return(
  <Container className="mt-3">
    <Row>
    <Col md={4}>
<Image width={300} height={300} src={process.env.REACT_APP_API_URL + device.img}/>
     </Col>
     <Col md={4}>
       <Row className="d-flex flex-column align-items-center">
         <h2 style={{textAlign: "center"}}>{device.name}</h2>
         <div
            className="d-flex align-items-center justify-content-center"
            style={{background: `url(${bigStar}) no-repeat center center`, width:240, height:240, backgroundSize: "cover", fontSize: 64}}>
             {device.raiting}
            </div>
       </Row>
     </Col>
     <Col md={4}>
       <Card
       className="d-flex flex-column align-items-center justify-content-around"
       style={{widnh: 300, height: 300, fontSize: 32, border: "5px solid lightgray"}}>
         <h3>from: {device.price} hrn.</h3>
         <Button variant={"outline-dark"}>Add to bascket</Button>
       </Card>
     </Col>
    </Row>
    <Row className="d-flex flex-column m-3">
      <h1>Descriptions</h1>
      {device.info.map((info, index) =>
        <Row key={info.id} style={{background: index % 2 ===0 ? 'lightgray' : 'transparent', padding: 10}}>
          {info.title} : {info.description} 
        </Row>)}
    </Row>
     
  </Container>
)};

export default DevicePage;
