import React from 'react';
import Item from './Item.jsx'
import { Row, Col, Glyphicon, PageHeader } from 'react-bootstrap';
import ItemProgress from './ItemProgress.jsx';

const ItemList = ( { content }) => (
  <Row className='show-grid'>
    <Col xs={12}>
      <a href='/edit'><Glyphicon glyph='plus'></Glyphicon> Add Item</a>
    </Col>
    <Item />
  </Row>
);

export default ItemList;