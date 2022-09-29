// import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { render } from "react-dom";

import { 
  BrowserRouter,
  Routes,
  Route, 
} from 'react-router-dom'
import Home from './components/Home'
import ProductUserScreen from './pages/ProductUserScreen'
import LogIn from './pages/LogIn'
import CounterScreen from './pages/CounterScreen'

export default function App() {
  return (
    
    
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="login" element={<LogIn />} />
        <Route path="products" element={<ProductUserScreen />} />
        <Route path="counter" element={<CounterScreen />} />
      </Routes>
  )
}

