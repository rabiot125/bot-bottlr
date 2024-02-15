// // App.js

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route,  NavLink } from 'react-router-dom';
import YourBotArmy from './components/YourBotArmy';
import BotCollection from './components/BotCollection';
import BotSpecs from './components/BotSpecs';
import SortBar from './components/SortBar';
import './App.css';

 
function App() {
  const [selectedBot, setSelectedBot] = useState(null);
  const [filters, setFilters] = useState([]);
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8001/bots')
      .then(response => response.json())
      .then(data => setBots(data));
  }, []);

  const enlistBot = (bot) => {
    if (!army.some(b => b.id === bot.id)) {
      setArmy([...army, bot]);
     // setBots(bots.filter(b => b.id !== bot.id)); // Remove the bot from the list of available bots
    }
  };

  const releaseBot = (botId) => {
    setArmy(army.filter(bot => bot.id !== botId));
  };

  const dischargeBot = (botId) => {
    fetch(`http://localhost:8001/bots/${botId}`, {
      method: 'DELETE'
    }).then(() => {
      setArmy(army.filter(bot => bot.id !== botId));
    });
  };

  const showBotSpecs = (bot) => {
    setSelectedBot(bot);
  };


  const hideBotSpecs = () => {
    setSelectedBot(null);
  };

  const handleFilterChange = (selectedFilters) => {
    setFilters(selectedFilters);
  };

  return (
    <Router>
      <h1>Welcome to <b>Bot Battlr</b>, the one and only spot in the known universe where you can custom build your own Bot Army!</h1>
      <div className="App">
      <nav>
          <NavLink to="/" className="nav-link"  >
            Bot Collection
          </NavLink>
          <NavLink to="/my-bot-army" className="nav-link">
          Your Bot Army
           </NavLink>
        </nav>

        <div className="container">
          {/* Routes */}
          <Routes>
            <Route
              path="/"
              element={
                <div>
                  <SortBar handleFilterChange={handleFilterChange} />
    
    {selectedBot ? (
      <BotSpecs bot={selectedBot} hideBotSpecs={hideBotSpecs} enlistBot={enlistBot} />
    ) : (
      <BotCollection bots={bots} enlistBot={enlistBot} showBotSpecs={showBotSpecs} filters={filters} />
    )}
    <YourBotArmy army={army} releaseBot={releaseBot} dischargeBot={dischargeBot} />
                 
                </div>
              }
            />
            <Route
              path="/my-bot-army"
              element={<YourBotArmy army={army} releaseBot={releaseBot} dischargeBot={dischargeBot} />}
            />
            {/* <Route path="/bot-specs/:botId" element={<BotSpecs goBackToList={goBackToList} enlistBot={enlistBot} />} /> */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}



export default App;
