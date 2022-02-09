import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Sport from "./Sport.js";
import football from "./Images/football.png";
import footballshot from "./Images/footballshot.png";
import cricket from "./Images/cricket.png";

class App extends Component {
  render() {
    return (
      <div className="App">
        
          <h1>| Sport</h1>
       
        <div className="Sports">
         
          <Sport
            Images = {football}
            headingText="Rodrigues strike denies Man Utd"
            paragraphText="Manchester United are left frustrated as Jay Rodriguez's second-half goal seems bottom Club Burnley claim a battling draw at Tuf Moor"
            sportName="| FOOTBALL"
          />
          
          <Sport
            Images = {footballshot}
            headingText="Newcastle beat fellow strugglers Everton"
            paragraphText="Newcastle move out of the bottom three with a huge win over fellow strugglers Everton in Frank Lampard's first Premier League game in charge."
            sportName="| FOOTBALL"
          />
        
          <Sport
            Images = {cricket}
            headingText="Anderson & broad left out by England"
            paragraphText="England leave bowlers James Anderson and Stuart Braod out of their men's squad to tour the West Indies."
            sportName="| CRICKET"
          />
        </div>
       
      </div>
    );
  }
}
export default App;
