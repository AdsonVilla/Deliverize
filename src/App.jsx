import "./App.css";
import { Navbar } from "./Components/Navbar";
import { OrderContainer } from "./Components/OrderContainer";

function App() {
  return (
    <div className="main-container">
      <Navbar />
      <OrderContainer />
    </div>
  );
}

export default App;
