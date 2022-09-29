import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import ProductTile from '../components/ProductTile'


const ProductUserScreen = () => {
const products = [1,2,3,4,5,4]
  return (
    <>
      <div className="row">
          {
            [...Array(10)].map((x, i) => <ProductTile key={i} />)
          }
      </div>
    </>
  )
}

export default ProductUserScreen
