import './App.css';
import AboutSection from './components/AboutSection/AboutSection';
import Header from './components/Header/Header';
import LandingSection from './components/LandingSection/LandingSection';

function App() {
    return (
        <div className="App">
            <Header />
            <LandingSection />
            <AboutSection />
        </div>
    );
}

export default App;
