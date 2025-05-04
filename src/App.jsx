import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import DesignUploadForm from "./components/DesignUploadForm";

const App = () => {
  return (
    <Router>
      <Navbar />

      <DesignUploadForm/>
      <br></br>
  
    </Router>
  );
};

export default App;
