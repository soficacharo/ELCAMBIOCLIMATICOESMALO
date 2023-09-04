import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import CambioClimatico from './components/CambioClimatico.jsx'
import Layout from './components/Layout';
import Problematica from './components/Problematica.jsx'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
        <Routes>
          <Route path="/CambioClimatico/Problematica/:id" element={<Problematica/>}/>
          <Route index element={<CambioClimatico/>}>
            
            
          </Route>
          </Routes>
          </BrowserRouter>
      </header>
      
    </div>
  );
}

export default App;
