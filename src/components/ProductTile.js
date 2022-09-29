import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const ProductTile = (props) => {
  console.log(props)
  return (
    <>
      <div className="card col-3 m-1">
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </>
  )
}

export default ProductTile
