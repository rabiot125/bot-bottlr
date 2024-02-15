// YourBotArmy.js

 import React from 'react';

function YourBotArmy({ army, releaseBot, dischargeBot }) {
   return (
   <div className="allBots">
       {/* <h2>Your Bot Army</h2> */}
       {army.map(bot => (
         
       <div key={bot.id} className="armyBot">
          <img src={bot.avatar_url} alt={bot.name} />
          <p>{bot.name}</p>
           <p>Health: {bot.health}</p>
           <p>Damage: {bot.damage}</p>
           <p>Armor: {bot.armor}</p>
           <button onClick={() => releaseBot(bot.id)}>Release</button>
           <button onClick={() => dischargeBot(bot.id)}>Discharge</button>
         </div>
       ))}
     </div>
   );
 }

 export default YourBotArmy;

// import React from 'react';

// function YourBotArmy({ army, releaseBot, dischargeBot }) {
//   return (
  

//     <div>
//            <h2>Your Bot Army</h2>
//            {army.map(bot => (
//              <div key={bot.id}>
//                <img src={bot.avatar_url} alt={bot.name} />
//                <p>{bot.name}</p>
//                <p>Health: {bot.health}</p>
//                <p>Damage: {bot.damage}</p>
//                <p>Armor: {bot.armor}</p>
//                <button onClick={() => releaseBot(bot.id)}>Release</button>
//                <button onClick={() => dischargeBot(bot.id)}>Discharge</button>
//              </div>
//            ))}
//          </div>
    
//         // {bots.map(bot => (
//         //   <div key={bot.id} className="armyBot">
//         //     <p>Health: {bot.health}</p>
//         //     <p>Damage: {bot.damage}</p>
//         //     <p>Armor: {bot.armor}</p>
//         //     <p>Class: {bot.bot_class}</p>
//         //     <button onClick={() => releaseBot(bot.id)}>Release</button>
//         //     <button className="delete" onClick={() => dischargeBot(bot.id)}>X</button>
//         //   </div>
//         // ))}
//       // </div>
//     // </div>
//   );
// }

// export default YourBotArmy;
