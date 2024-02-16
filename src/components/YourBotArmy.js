// YourBotArmy.js

 import React from 'react';

function YourBotArmy({ army, releaseBot, dischargeBot }) {
   return (
    <div className="your-bot-army">
   <div className="allBots">
       {/* <h2>Your Bot Army</h2> */}
       {army.map(bot => (
         
       <div key={bot.id} className="armyBot" onClick={() => releaseBot(bot.id)}>
        
          <img src={bot.avatar_url} alt={bot.name} />
          <h3>{bot.name}</h3>
           <p>Health: {bot.health}</p>
           <p>Damage: {bot.damage}</p>
           <p>Armor: {bot.armor}</p>
           <p>Class: {bot.bot_class}</p>
           {/* <button onClick={() => releaseBot(bot.id)}>Release</button> */}
           <button  className="red-button" onClick={() => dischargeBot(bot.id)} style={{ marginLeft: '8px' }}>X</button>
         </div>
       ))}
     </div>
     </div>
   );
 }

 export default YourBotArmy;


