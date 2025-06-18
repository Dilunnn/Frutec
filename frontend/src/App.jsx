import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AppRoutes from './routes/AppRoutes'; 

function App() {
  return (
    <>
      <div>
        <Navbar />
        <AppRoutes /> 
        <Footer />
      </div>
    </>
  );
}

export default App;
