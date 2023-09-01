import HomeComponent from "./pages/Home/HomeComponent";
import AboutComponent from "./pages/About/AboutComponent";
import NavBar from "./components/NavbarComponent/NavBar";
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <h1>Hello RetroHammer</h1>
      <HomeComponent />
      <AboutComponent />
    </div>
  );
}

export default App;
