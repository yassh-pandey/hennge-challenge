import React from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom'
import EmptyMail from './components/EmptyMail';
import PopulatedMail from './components/PopulatedMail';
import InspectEmail from './components/InspectEmail';
import Views from './components/Views';

//When there are no mail in the mailbox then EmptyMail component is displayed

//When mailbox is populated with emails then PopulatedMail component is displayed 

//The redesigned inbox to inspect multiple emails at a time is via InspectEmail component

//My views and opinions about the UI are displayed by mounting Views component

function App() {
  return (
    <div className="App">
      <Switch>
        {/* 
          To see the POPULATED mail box component please open this url in your browser:
            http://localhost:3000/imbox
        */}
        <Route path="/imbox">
          <PopulatedMail />
        </Route>

         {/* 
          To see the redesigned mail box component which lets you inspect multiple emails at a time
            please open this url in your browser:
            http://localhost:3000/inspect
        */}
        <Route path="/inspect">
          <InspectEmail />
        </Route>

        {/* 
          To see the my views and opinion on the UI please open this url in your browser:
            http://localhost:3000/views
        */}
        <Route path="/views">
          <Views />
        </Route>

        {/* 
        To see the EMPTY mail box component please open this url in your browser:
          http://localhost:3000/
        */}
        <Route path="/">
          <EmptyMail />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
