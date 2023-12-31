import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./Pages/Home/Index";
import { Provider } from "react-redux";
import store from "./Redux/Store";
import Events from "./Pages/Events/Index";
import { QueryClient, QueryClientProvider } from "react-query";

function App() {
  const location = useLocation();
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <div className="App">
          <>
            <Routes key={location.pathname} location={location}>
              <Route path="/" element={<Home />} />
              <Route path="events" element={<Events />} />
            </Routes>
          </>
        </div>
      </Provider>
    </QueryClientProvider>
  );
}
export default App;