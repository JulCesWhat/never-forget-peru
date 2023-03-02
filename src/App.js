import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';
import { Header } from './components/Header';
import Home from './pages/Home';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import Persons from './pages/Persons';
import Person from './pages/Person';
import websiteData from './data'


const { dateItems, persons } = websiteData;

function App() {
    return (
        <div className="App">
            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<Home dateItems={dateItems} />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/persons" element={<Persons individuals={persons} />} />
                    <Route path="/person/:userId" element={<Person individuals={persons} />} />
                    <Route path='*' element={<NotFound />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
