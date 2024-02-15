// BotCard.js
import React from 'react';

const BotCard = ({ bot, onEnlist, onRelease, onDischarge }) => {
  const handleEnlist = () => {
    onEnlist(bot.id);
  };

  const handleRelease = () => {
    onRelease(bot.id);
  };

  const handleDischarge = () => {
    onDischarge(bot.id);
  };

  return (
    <div className="botCard">
      <img src={bot.avatar_url} alt={bot.name} />
      <h3>{bot.name}</h3>
      <p>Health: {bot.health}</p>
      <p>Damage: {bot.damage}</p>
      <p>Armor: {bot.armor}</p>
      <button onClick={handleEnlist}>Enlist</button>
      <button onClick={handleRelease}>Release</button>
      <button onClick={handleDischarge} className="discharge-btn">X</button>
    </div>
  );
};

export default BotCard;
