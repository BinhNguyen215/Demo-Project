import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./Pages/Home/Index";
import Events from "./Pages/Events/Index";
import { Provider } from "react-redux";
import store from "./Redux/Store";
function App() {
  const location = useLocation();
  return (
    <Provider store={store}>
      <div className="App">
        <>
          <Routes key={location.pathname} location={location}>
            <Route path="/" element={<Home />} />
            <Route path="Events" element={<Events />} />
          </Routes>
        </>
      </div>
    </Provider>
  );
}
export default App;