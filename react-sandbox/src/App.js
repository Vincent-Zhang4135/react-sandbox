import './App.css';
import People from "./People.js";
import Person from "./Person.js";
import Title from "./Title.js";

import './main.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Title/>
        <div className="container">
        <Person person={{name: "", teams: "", is: ""}}/>
        {
            People.map((person) => {
                return <Person key={person} person={person}/>
            })
        }
        </div>
      </header>
    </div>
  );
}

export default App;
