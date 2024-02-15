// BotCollection.js

 import React from 'react';

function BotCollection({ bots, enlistBot, showBotSpecs, filters }) {
  
 const filteredBots = filters.length > 0 ? bots.filter(bot => filters.includes(bot.bot_class)) : bots;

   return (
     
 <div className="bot-collection">
<h2 className="bot-collection-title">Bot Collection</h2>
<div className="allBots"> 
       {/* <h2>Bot Collection</h2> */}
       {filteredBots.map(bot => (
        <div key={bot.id}>
           <img src={bot.avatar_url} alt={bot.name} />
           <p>Name: {bot.name}</p>
           <p>ID: {bot.id}</p>
           <p>Health: {bot.health}</p>
           <p>Armor: {bot.armor}</p>
          
           <button onClick={() => enlistBot(bot)}>Enlist</button>
           <button onClick={() => showBotSpecs(bot)}>Show Details</button>
         </div>
       ))}
     </div>
     </div>
   );
 }

 export default BotCollection;

