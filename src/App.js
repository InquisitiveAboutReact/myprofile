import './App.css';
import AboutMe from './components/BodyComponent/AboutMe';
import Contact from './components/BodyComponent/Contact';
import Footer from './components/BodyComponent/Footer';
import HeaderComponent from './components/HeaderComponent/HeaderComponent';


function App() {
  return (
    <div>
    <HeaderComponent />
    <AboutMe />
    <Contact />
    <Footer />

    </div>
   
  );
}

export default App;
