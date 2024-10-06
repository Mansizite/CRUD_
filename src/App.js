
import { BrowserRouter, Route , Routes } from 'react-router-dom';
import './App.css';
// import Create from './components/Create';
// import Read from './components/Read'
import Update from './components/Update';
import Main from './components/Main'

function App() {
  return (
    <div className="App">
      {/* <Create/>
      <Read/> */}
      <BrowserRouter>
      <Routes>
        {/* <Route path='/create' element={<Create/>}/>
        <Route path='/' element={<Read/>}/> */}
        <Route path='/' element= {<Main/>}/>
        <Route path='/update/:id' element={<Update/>}/>
        <Route/>
      </Routes>
      
      
      </BrowserRouter>
      
    </div>
  );
}

export default App;
