// BotCollection.js

//  import React from 'react';

// function BotCollection({ bots, enlistBot, showBotSpecs, filters }) {
  
//  const filteredBots = filters.length > 0 ? bots.filter(bot => filters.includes(bot.bot_class)) : bots;

//    return (
     
//  <div className="bot-collection">
// <h2 className="bot-collection-title">Bot Collection</h2>
// <div className="allBots"> 
//        {/* <h2>Bot Collection</h2> */}
//        {filteredBots.map(bot => (
//         <div key={bot.id}>
//            <img src={bot.avatar_url} alt={bot.name} />
//            <p>Name: {bot.name}</p>
//            <p>ID: {bot.id}</p>
//            <p>Health: {bot.health}</p>
//            <p>Armor: {bot.armor}</p>
          
//            <button onClick={() => enlistBot(bot)}>Enlist</button>
//            <button onClick={() => showBotSpecs(bot)}>Show Details</button>
//          </div>
//        ))}
//      </div>
//      </div>
//    );
//  }

//  export default BotCollection;
import React, { useState } from 'react';

function BotCollection({ bots, enlistBot, showBotSpecs, filters }) {
  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate the index of the first and last bot for the current page
  const indexOfLastBot = currentPage * itemsPerPage;
  const indexOfFirstBot = indexOfLastBot - itemsPerPage;

  // Filter and paginate the bots for the current page
  const filteredBots = filters.length > 0 ? bots.filter(bot => filters.includes(bot.bot_class)) : bots;
  const currentBots = filteredBots.slice(indexOfFirstBot, indexOfLastBot);

  // Calculate the total number of pages
  const totalPages = Math.ceil(filteredBots.length / itemsPerPage);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div className="bot-collection">
      <h2 className="bot-collection-title">Bot Collection</h2>
      <div className="allBots">
        {currentBots.map(bot => (
          <div key={bot.id}>
            <img src={bot.avatar_url} alt={bot.name} />
            <h3>{bot.name}</h3> 
            <p>ID: {bot.id}</p>
            <p>Health: {bot.health}</p>
            <p>Armor: {bot.armor}</p>
            <button onClick={() => enlistBot(bot)}>Enlist</button>
            <button onClick={() => showBotSpecs(bot)}>Show Details</button>
          </div>
        ))}
      </div>
      <div className="pagination">
        {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
          <button
            key={page}
            onClick={() => handlePageChange(page)}
            className={page === currentPage ? 'active' : ''}
          >
            {page}
          </button>
        ))}
      </div>
      {currentPage === totalPages && (
        <p><b>You have completed your Bot Army. There are no more bots to collect.</b></p>
      )}
    </div>
  );
}

export default BotCollection;



