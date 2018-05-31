import React, { Component } from "react";
import Calendar from "react-big-calendar";
import moment from "moment";

import "./App.css";
import "react-big-calendar/lib/css/react-big-calendar.css";
import logo from "./logo.svg";

Calendar.setLocalizer(Calendar.momentLocalizer(moment));

class App extends Component {

  constructor(props) {
    super(props);
    this.handleNewEvent = this.handleNewEvent.bind(this);
    this.state = {

    events: [
      {
        start: new Date(),
        end: new Date(moment().add(1, "days")),
        title: "Some title"
      }
    ]
    }

  }

  handleNewEvent(event){
// add event to events array
    }



  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React - Detail</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Calendar
          selectable
          defaultDate={new Date()}
          defaultView="week"
          events={this.state.events}
          style={{ height: "90vh" }}
          onSelectSlot={slotInfo =>
            alert(
              `selected slot: \n\nstart ${slotInfo.start.toLocaleString()} ` +
                `\nend: ${slotInfo.end.toLocaleString()}` +
                `\naction: ${slotInfo.action}`
            )
          }

        />
      </div>
    );
  }
}

export default App;
