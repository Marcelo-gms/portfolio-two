import "bootstrap/dist/css/bootstrap.css";

import Header from "./components/Header";
import Home from "./components/Home/Home";
import About from "./components/About";


function App() {
  return (
    <>
      <Header false />
      <Home />
      <About />
      <h1>Hello, world!</h1>
    </>
  );
}

export default App;
