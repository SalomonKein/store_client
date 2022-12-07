import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { connect, useDispatch } from "react-redux";
import BrandBar from "../components/BrandBar";
import DeviceList from "../components/DeviceList";
import Pages from "../components/Pages";
import TypeBar from "../components/TypeBar";
import { fetchBrands, fetchDevices, fetchTypes } from "../http/deviceAPI";
import { setBrands, setDevices, setTotalCount, setTypes, selectType, selectBrand } from "../redux/Shop/actions";
// import { useSelector } from "react-redux";




const Shop = ({ shop }) => {
  const dispatch = useDispatch()



  useEffect(() => {
    fetchTypes().then(data => dispatch(setTypes(data)))
    fetchBrands().then(data => dispatch(setBrands(data)))
  }, [])

  useEffect(() => {

    fetchDevices(shop.selectedType.id, shop.selectedBrand.id, shop.curentPage, 3).then(data => {
      dispatch(setDevices(data))
      dispatch(setTotalCount(data.count))
    })
  }, [shop.curentPage, shop.selectedType, shop.selectedBrand])

  return (
    <Container>
      <Row className="mt-2">
        <Col md={3}>
          <TypeBar />
          <Button
            className="mt-2"
            variant={"outline-dark"}
            onClick={() => {
              dispatch(selectType({}))
              dispatch(selectBrand({}))
            }}>Show All</Button>
        </Col>
        <Col md={9}>
          <BrandBar />
          <DeviceList />
          <Pages />
        </Col>
      </Row>
    </Container>)
};


const mapStateToProps = state => {
  return {
    shop: state.shop
  }
}

export default connect(mapStateToProps, null)(Shop)
