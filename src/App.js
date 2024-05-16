import './App.css';
import Nevbar from './Components/Nevbar.js';
import TextForm from './Components/TextForm.js';

function App() {
  return (
    <div className="container">
      <Nevbar title="Text Utile"/>
      <div className='py-5'>
        <TextForm heading="Enter the text for analyze below"/>
      </div>
    </div>
  );
}

export default App;
