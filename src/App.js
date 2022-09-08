/* import Titolo from './Titolo'; */
import Product from "./Product";
function App() {
  return (
    <div className="App">
      <h2 style={{ textAlign: "center" }}>My first cards</h2>
      <div class="cards">
        <Product />
        <Product />
        <Product />
      </div>
      {/*  <Titolo /> */}
    </div>
  );
};

export default App;
