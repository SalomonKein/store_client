import React, { useEffect, useState } from 'react';
import { Button, Col, Dropdown, Form, Modal, Row } from 'react-bootstrap';
import { connect, useDispatch } from 'react-redux';
import { createDevices, fetchBrands, fetchTypes } from '../../http/deviceAPI';
import { setBrands, setTypes } from '../../redux/Shop/actions';

const CreateDevice = ({show, onHide, shop}) => {
  const[name, setName] = useState([])
  const[price, setPrice] = useState([])
  const[file, setFile] = useState([])
  const[brand, setBrand] = useState([])
  const[type, setType] = useState([])
  const[info, setInfo] = useState([])

  const dispatch = useDispatch()

  useEffect(()=>{
    fetchTypes().then(data=>dispatch(setTypes(data)))
    fetchBrands().then(data=>dispatch(setBrands(data)))
    
  }, [])

  const addInfo = () => {
    setInfo([...info, {title: '', description: '', number: Date.now()}])
  }
  const removeInfo = (number) => {
    setInfo(info.filter(i=>i.number !== number))
  }

  const changeInfo = (key, value, number) =>
  setInfo(info.map(i => i.number === number ? {...i, [key]: value} : i ))

  const selectFile = e => {
    setFile(e.target.files[0]);
  }

  const addDevice =  () => {
    const formData = new FormData
    formData.append('name', name)
    formData.append('price', `${price}`)
    formData.append('img', file)
    formData.append('brandId', brand.id)
    formData.append('typeId', type.id)
    formData.append('info', JSON.stringify(info))
    createDevices(formData).then(data=>onHide())
    
  }

     return (
      <Modal     
      show={show}
      onHide={onHide}
      size="lg"      
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Add Type
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Dropdown className="mt-2 mb-2">
            <Dropdown.Toggle>{ type.name || "Choice type"}</Dropdown.Toggle>
            <Dropdown.Menu>
              {shop.types.map(type =>
                <Dropdown.Item 
                onClick={() => setType(type)}
                key={type.id}
                >
                  {type.name}
                </Dropdown.Item>)}
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown className="mt-2 mb-2">
            <Dropdown.Toggle>{ brand.name || "Choice brand"}</Dropdown.Toggle>
            <Dropdown.Menu>
              {shop.brands.map(brand =>
                <Dropdown.Item 
                onClick={() => setBrand(brand)}
                key={brand.id}
                >
                  {brand.name}
                </Dropdown.Item>)}
            </Dropdown.Menu>
          </Dropdown>
          <Form.Control
          value={name}
          onChange={e => setName(e.target.value)}
          className="mt-3"
          placeholder="Enter device name"
          />
          <Form.Control
          value={price}
          onChange={e => setPrice(Number(e.target.value))}
          className="mt-3"
          placeholder="Enter device cost"
          type="number"
          />
          <Form.Control
          className="mt-3"
          type="file"
          onChange={selectFile}
          />
          <hr/>
          <Button
          variant={"outline-dark"}
          onClick={addInfo}
          >
            Add new property
          </Button>
          {info.map(i =>
            <Row className="mt-2" key={i.number}>
              <Col md={4}>
                <Form.Control
                value = {i.title}
                onChange={(e)=> changeInfo('title', e.target.value, i.number)}
                placeholder="Enter property name"
                />
              </Col>
              <Col md={4}>
                <Form.Control
                value = {i.description}
                onChange={(e)=> changeInfo('description', e.target.value, i.number)}
                placeholder="Enter property description"
                />
              </Col>
              <Col md={4}>
                <Button
                variant={"outline-danger"}
                onClick={() => removeInfo(i.number)}>
                  Delete
                </Button>
              </Col>
            </Row>
            )}

        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={onHide}>Close</Button>
        <Button variant="outline-succes" onClick={addDevice}>Add</Button>
      </Modal.Footer>
    </Modal> 
    )
}


const mapStateToProps = state => {  
  return{
      shop: state.shop
  }
}

export default connect(mapStateToProps, null)(CreateDevice)
