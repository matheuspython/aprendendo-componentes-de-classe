import logo from './logo.svg';

import './App.css';
import { Component } from 'react';

class App extends Component{
  constructor (props){
    super(props)
    this.state = {
      name: 'matheus souza'
    }
  }
  
  render(){
    const { name } = this.state
    return (
      <div className="App">
        <header className="App-header">
          <img src={ logo } className="App-logo" alt="logo" />
          <p onClick={()=> console.log('<p> <p> clicado kkk </p>')}>
           { name }
          </p>
          <a
           className="App-link"
           href="https://reactjs.org"
           target="_blank"
           rel="noopener noreferrer"
          > 
           Learn React
          </a>
        </header>
     </div>
    )
  }
}






// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         > 
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
 