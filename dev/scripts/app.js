import React from 'react';
import ReactDOM from 'react-dom';
import { ajax } from 'jquery';

class App extends React.Component {
    constructor() {
      super();
      this.state = {
        games: []
      }
    }

    addGame(e) {
      let games = this.state.games;
      let game = {};
      
      
      // game.gameNumber = this.gameNumber.value;
      game.gameNumber = this.gameNumber.value;
      game.homeTeam = this.homeTeam.value;
      game.visitingTeam = this.visitingTeam.value;
      game.sagarinSpread = this.sagarinSpread.value;
      game.fiveThirtyEightSpread = this.fiveThirtyEightSpread.value;

      games.push(game);

      // grabs text from form
      e.preventDefault();

      // adds game info to state
      this.setState({games})

      
    }
    render() {
      return (
        <div>


          <div>
            <form action="" className="pointSpread" onSubmit={(e) => this.addGame(e)}>
              <input type="text" placeholder="Game No." className="Game-Number" 
                ref={(input) => { this.gameNumber = input }}/>
              <input type="text" placeholder="Home Team" 
                ref={(input) => { this.homeTeam = input }}/>
              <input type="text" placeholder="Visiting Team" 
                ref={(input) => { this.visitingTeam = input }}/>
              <input type="text" placeholder="Sagarin Spread" 
                ref={(input) => { this.sagarinSpread = input }}/>
              <input type="text" placeholder="538 Spread" 
                ref={(input) => { this.fiveThirtyEightSpread = input }}/>
              <button>Complete Entry</button>
            </form>
          </div>

          
        </div>
      )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
