import React from "react";
import "./App.scss";

let name: any = 'Hello !';

export class App extends React.Component {
  public componentDidMount() {
    if (chrome && chrome.tabs) {
      chrome.tabs.query({ currentWindow: true, active: true }, tabs => {
        const tab = tabs[0];
        chrome.tabs.sendMessage(tab.id || 0, { from: "popup", subject: tab }, response => {
          name = response.name;
        });
      });
    }
  }
  render() {
    return <div className="app">{name}</div>;
  }
}

export default App;
