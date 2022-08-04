import './styles/App.css';
import Auth from "./pages/Auth/Auth";
import MainSearch from "./components/MainSearch/MainSearch";
import SearchPage from "./pages/Search/SearchPage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
        <Header/>
        <SearchPage/>
        <Footer/>
    </div>
  );
}

export default App;
