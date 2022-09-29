import React, {useState, useRef, useEffect} from 'react'
import { Container, Row, Col } from 'react-bootstrap'

export default class CounterScreen extends React.Component  {
  constructor(props) {
    super(props);
    this.state = {count: 0, divArr: []};
    this.inputRef = React.createRef();
    this.inputRef1 = React.createRef();
    this.inputRef2 = React.createRef();
  }

  timer = (val) => {
    setInterval(() => {
      this.setState({count: this.state.count + val});
      this.handleArr()
    }, 1000)
    return () => {
      clearInterval(this.timer);
    };
  } 

  handleCounter = (event) => {
    this.timer(parseInt(this.inputRef.current.value))
  }   
  
  handleArr = () => {
    let val = this.state.count
    let factor = parseInt(this.inputRef1.current.value)
    if (val % factor === 0){
      this.setState({divArr: [...this.state.divArr, val]});
    }
  }

  removeItem = () => {
    let item = parseInt(this.inputRef2.current.value);
    this.setState({divArr: this.state.divArr.filter(function(ele) { 
        return ele !== item
    })});
  }
 
  render() {
    return (
      <>
        <Container className>
          <Row>
            <Col className='text-center'>Brijesh</Col>
          </Row>
        </Container>
        <h2>{this.state.count}</h2>
        <h2>{this.state.divArr.join(',')}</h2>
        <div className="col-3">
          <input type="text" ref={this.inputRef} className="form-control" id="formCounter" placeholder="Enter counter" />
        </div>
        <div className="col-3">
          <input type="text" ref={this.inputRef1} className="form-control" id="formCounter" placeholder="Enter divisible" />
          <button onClick={this.handleCounter}> click </button>
        </div>
        <div className="col-3">
          <input type="text" ref={this.inputRef2} className="form-control" id="formItem" placeholder="Remove Item from array" />\
          <button onClick={this.removeItem}> click </button>

        </div>
      </>
    )
  }
}
