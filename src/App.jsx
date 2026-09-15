import "./App.css";
import Header from "./Header/Header";
import Popular from "./popular/popular";
import Sidepage from "./Sidepage/Sidepage";

function App() {
  return (
    <div className="app-container">
      <Header />

      <Sidepage />

      <Popular />
    </div>
  );
}

export default App;