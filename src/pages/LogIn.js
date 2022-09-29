import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const handleSubmit = (event) => {
  event.preventDefault();

  console.log('hello')
}

const LogIn = () => {
  return (
    <>
      <div className="form">
       <form onSubmit={handleSubmit}>
        <div className="card col-4 offset-4 my-5">
          <div className="card-body">
            <h5> Login</h5>
          </div>
          <div className="card-body">

            <div className="mb-3">
              <label className="form-label">Username</label>
              <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Enter Username" />
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input type="password" className="form-control" id="formGroupExampleInput2" placeholder="Enter Password" />
            </div>
            <div className="button-container">
              <input className="btn btn-block btn-primary" type="submit" />
            </div>

          </div>
        </div> 

         
       </form>
      </div>
    </>
  )
}

export default LogIn
