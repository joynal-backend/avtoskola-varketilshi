import "./App.css";

import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
import Footer from "./pages/Footer";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <div className="">
        <Navbar />
        <div className='font-["Roboto Condensed"]'>
          <Home />
        </div>

        <Footer />
        <ToastContainer
          position="bottom-right"
          autoClose={500000}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
    </>
  );
}

export default App;
