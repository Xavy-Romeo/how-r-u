import React, { useState } from "react";
import '../src/App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import Header from "./components/Header";
import Happy from "./components/Happy";
import Okay from "./components/Okay";
import Anxious from "./components/Anxious";
import Sad from "./components/Sad";
import Home from "./components/Home";




function App() {

  // mood sections array
  const [moodSection] = useState([
    {name: 'Happy'},
    {name: 'Okay'},
    {name: 'Anxious'},
    {name: 'Sad'}
  ]);

  // useState hook to set current mood section
  const [currentMood, setCurrentMood] = useState(moodSection[0]);
  
  // const [categories] = useState([
  //   {
  //     name: "Meditation/Music",
  //     description:
  //       "Guided and unguided meditation videos and music to help calm the mind and soul.",
  //   },
  //   { name: "Activities", description: "Activities and exercises that keep the body moving and help to relieve stress." },
    
  //   {
  //     name: "Books",
  //     description: "Multiple books by many authors who can offer guidance.",
  //   },
  // ]);

  // const [currentCategory, setCurrentCategory] = useState(categories[0]);

  // const [contactSelected, setContactSelected] = useState(false);

  return (
    <div>
        <Router>
        <div>
        <Header 
          currentMood={currentMood}
          setCurrentMood={setCurrentMood}
        />

        {/* categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      
          
          <img src={logo} alt="Logo" />;

            <h1 className="headertitle">How Are You Today?</h1>
            <p> An Outer tool For Inner Peace</p> */}
            {/* </Header> */}
          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            {/* <Route path="/home">
              <Home />
            </Route> */}
            {/* <div class="row">
              <div class= "col-lg-3 col-md-6 col-sm-12 custom grid">
                <div class="mood logo">
                  <img src={logo} />
                </div>
                </div>
                <div class= "col-lg-3 col-md-6 col-sm-12 custom grid">
                <div class="mood logo">
                  <img src={logo} />
                </div>
                </div>
                <div class= "col-lg-3 col-md-6 col-sm-12 custom grid">
                <div class="mood logo">
                  <img src={logo} />
                </div>
                </div>
                <div class= "col-lg-3 col-md-6 col-sm-12 custom grid">
                <div class="mood logo">
                  <img src={logo} />
                </div>
              </div>
            </div> */}
            <Route path="/happy">
             
             <Happy />
            </Route>
            <Route path="/okay">
              <Okay />
            </Route>
            <Route path="/anxious">
              <Anxious />
            </Route>
            <Route path="/sad">
              <Sad />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
   
    </div>
  );
}

export default App;
