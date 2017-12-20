import React from 'react';
import ReactDOM from 'react-dom';
import { ajax } from 'jquery';

class App extends React.Component {
    constructor() {
      super();
      this.state = {
        gameNumber: {
          homeTeam: "",
          visitingTeam: "",
          sagarinSpread: "",
          fiveThirtyEightSpread: ""
        }
      }
    }
    render() {
      return (
        <div>


          <div className="pointSpread">
            <input type="text" placeholder="Game No." className="Game-Number"/>
            <input type="text" placeholder="Home Team"/>
            <input type="text" placeholder="Visiting Team"/>
            <input type="text" placeholder="Sagarin Spread"/>
            <input type="text" placeholder="538 Spread"/>
            <button>Complete Entry</button>
          </div>

          
        </div>
      )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
