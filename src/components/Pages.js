import React from 'react';
import { Pagination } from 'react-bootstrap';
import { connect, useDispatch } from 'react-redux';
import { setPage } from '../redux/Shop/actions';

const Pages = ({shop}) => {
    const pageCount = Math.ceil(shop.totalCount / shop.limit)
    const pages = []

    const dispatch = useDispatch()

for(let i = 0; i<pageCount; i++) {
    pages.push(i + 1)
}

    return (
        <Pagination className="mt-5">
            {pages.map(page => 
                <Pagination.Item 
                key = {page}
                active = {shop.page === page}
                onClick = {() => dispatch(setPage(page))}
                >
                    {page}</Pagination.Item>
        )}
        </Pagination>
    );
}

const mapStateToProps = state => {
    return{
        shop: state.shop
    }
  }
  
  export default connect(mapStateToProps, null)(Pages)