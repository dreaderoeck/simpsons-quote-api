import React from 'react';
import './App.css';
import SimpsonsQuotes from './components/SimpsonsQuotes';
import axios from 'axios';



const sampleQuote = {
  "quote": "By chilling my loins I increase the chances of impregnating my wife.",
  "character": "Apu Nahasapeemapetilon",
  "image": "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FApuNahasapeemapetilon.png?1497567511629",
}


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: sampleQuote
    };
    this.newQuote = this.newQuote.bind(this);
  }

  newQuote() {
    axios.get('https://simpsons-quotes-api.herokuapp.com/quotes')
      .then(response => response.data)
      .then(data => {
        this.setState({
          quotes: data[0]
        });
      });
  
    }



render(){
  return(
    <div className="App">
   <SimpsonsQuotes quotes={this.state.quotes} />
   <button type="button" onClick={this.newQuote}>Click for a New Quote</button>

  </div>

  );
}

}




export default App;
