import React from 'react';
import { Counter } from './features/counter/Counter';
import Header from './components/Nav.jsx';
import Home from './components/Home.jsx';
import Cards from './components/Cards.jsx';
import Footer from './components/Footer.jsx';
import './App.css' 
import { Container } from 'react-bootstrap';
function App() {
  return (
    <div className="App">
     <Header />
  {/* Home page*/}
  <Home />
  <Container className='lernov__card'> 
   <Cards src='https://via.placeholder.com/250'/>     {/* Courses  */}
   <Cards src='https://via.placeholder.com/250'/>     {/* Courses  */}
   <Cards src='https://via.placeholder.com/250'/>     {/* Courses  */}
   <Cards src='https://via.placeholder.com/250'/>     {/* Courses  */}
   <Cards src='https://via.placeholder.com/250'/>     {/* Courses  */}
   <Cards src='https://via.placeholder.com/250'/>     {/* Courses  */}
   <Cards src='https://via.placeholder.com/250'/>     {/* Courses  */}
   <Cards src='https://via.placeholder.com/250'/>     {/* Courses  */}
    
    </Container> 
   <Footer />
    </div>
 

  );
}

export default App;
