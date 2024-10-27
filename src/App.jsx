import "./App.css";
import NavBar from "./Components/NavBar";
import Welcome from "./Components/Welcome";
import AfterName from "./Components/AfterName";
import CustomCursor from "./Components/CustomCursor";








function App() {
  return (
    <>
      <NavBar />
      <Welcome/>
      {/* <AfterName/>  */}
      <CustomCursor/> 
    </>
  );
}

export default App;
