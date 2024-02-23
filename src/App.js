import './App.css';
import Navbar from './component/Navbar';
import TextForm from './component/textform';

function App() {
  return (
  <>
  <Navbar/>
  <div className="container my-9 ">
  <TextForm heading="Enter the text to analyze"/>
  </div>
  
  </>
  );
}

export default App;
