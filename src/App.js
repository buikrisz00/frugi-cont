import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PestControl from './components/PestComponents/PestControl/PestControl';
import Ozone from './components/OzoneComponents/Ozone/Ozone';

function App() {
    return (
        <BrowserRouter basename={window.location.pathname}>
            <Routes>
                <Route path="/" element={ <PestControl /> }/>
                <Route path="/ozone" element={ <Ozone /> }/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
