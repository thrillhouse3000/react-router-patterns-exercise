import Router from './Router';
import DogsNav from './DogsNav';
import dogs from './dogprops';
import './App.css';

function App() {
  return (
    <div className="App">
      <DogsNav names={dogs.map(dog => dog.name)}/>
      <Router />
    </div>
  );
}



export default App;
