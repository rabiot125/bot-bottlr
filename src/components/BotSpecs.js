// // BotSpecs.js

 import React from 'react';
 
function BotSpecs({ bot, hideBotSpecs, enlistBot }) {

  return (
    <div className="bot-specs">
      <h2>Bot Details</h2>
      <img src={bot.avatar_url} alt={bot.name} />
      <p>Name: {bot.name}</p>
       <p>Health: {bot.health}</p>
       <p>Damage: {bot.damage}</p>
       <p>Armor: {bot.armor}</p>
       <button onClick={hideBotSpecs}>Back to Collection</button>
       <button onClick={() => enlistBot(bot)}>Enlist</button>
      
    </div>
  );
}

export default BotSpecs;
