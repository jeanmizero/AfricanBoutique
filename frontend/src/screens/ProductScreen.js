import React from 'react'
import { Link,useParams } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Button, ListGroupItem } from 'react-bootstrap'
import Rating from '../components/Rating'
import products from '../products'

const ProductScreen = ({ match }) => {
console.log(products)

const { id } = useParams()
// Display single product
const product = products.find((p) => p._id === id)
  return (
    <>
      <Link className='btn btn-dark my-3' to='/'>
        Go Back
      </Link>
      <Row>
        <Col md={6}>
          <Image src={product.image} alt={product.name} fluid />
        </Col>

        <Col md={3}>
          <ListGroup variant='flush'>
            {/* Product name */}
            <ListGroupItem>
              <h3>{product.name}</h3>
            </ListGroupItem>
            {/* Product rating */}
            <ListGroupItem>
              <Rating value={product.rating} text={`${product.numReviews} reviews`} />
            </ListGroupItem>
            {/* Product price */}
            <ListGroupItem>Price: ${product.price}</ListGroupItem>
            {/* Product description */}
            <ListGroupItem>Description: {product.description}</ListGroupItem>
          </ListGroup>
        </Col>
      </Row>
      {/* Price Columns */}
      <Col>
        <ListGroup variant='flush'>
          <ListGroup.Item>
            <Row>
              <Col>Price:</Col>
              <Col>
                <strong>${product.price}</strong>
              </Col>
            </Row>
          </ListGroup.Item>

          <ListGroup.Item>
            <Row>
              <Col>Status:</Col>
              <Col>{product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}</Col>
            </Row>
          </ListGroup.Item>

          <ListGroup.Item>
            <Button className='btn-block' type='button'>
              Add To Cart
            </Button>
          </ListGroup.Item>
        </ListGroup>
      </Col>
    </>
  )
}

export default ProductScreen
