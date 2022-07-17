import logo from './logo.svg';
import './App.css';
import Layout1 from './Components/Layout1';
import Layout2 from './Components/Layout2';
import Layout3 from './Components/Layout3';

function App() {
  return (
    <div>
      <h1>Layout 1</h1>
      <Layout1/>
      <h1>Layout 2</h1>
      <Layout2 />
      <h1>Layout 3</h1>
      <Layout3 />
    </div>
  );
}

export default App;
