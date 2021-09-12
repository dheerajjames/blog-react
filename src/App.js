// import logo from './logo.svg';
import './App.css';
import './styles.css';
import { BrowserRouter } from "react-router-dom";
import Header from "./Header/Header";
import Body from "./Body/Body";
import Footer from "./Footer/Footer";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Body />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

