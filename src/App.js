import Nav from "./Component/Nav";
import Home from "./Component/Home";
import Products from "./Component/Products";
import Banner from "./Component/Banner";
import Collection from "./Component/Collection";
import Catalog from "./Component/Catalog";
import Footer from "./Component/footer";


function App() {
  return (
    <div className="App">
      <Nav />
        <Home />
        <Products />
      <Banner />
        <Collection />
        <Banner />
        <Catalog />
        <Banner />
      <Footer />
    </div>
  );
}

export default App;
