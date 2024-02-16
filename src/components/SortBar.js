
 import React, { useState } from 'react';


 function SortBar({ handleFilterChange }) {
   const [selectedFilters, setSelectedFilters] = useState([]);

   const handleCheckboxChange = (e) => {
    const { value } = e.target;
     let updatedFilters = [...selectedFilters];

     if (updatedFilters.includes(value)) {
      updatedFilters = updatedFilters.filter(filter => filter !== value);
     } else {
      updatedFilters.push(value);
     }

     setSelectedFilters(updatedFilters);
     handleFilterChange(updatedFilters);
   };

   return (
     <div  className="sort-bar">
   
       <h2>Sort By :</h2>
       <label>
         <input
           type="checkbox"
           value="Support"
           onChange={handleCheckboxChange}
           checked={selectedFilters.includes('Support')}
         />
         Support
       </label>
       <label>
         <input
           type="checkbox"
           value="Medic"
           onChange={handleCheckboxChange}
           checked={selectedFilters.includes('health')}
         />
         Medic
       </label>
       <label>
         <input
           type="checkbox"
           value="Defender"
           onChange={handleCheckboxChange}
           checked={selectedFilters.includes('Defender')}
         />
         Defender
     </label>    
       <label>
         <input
           type="checkbox"
           value="Assault"
           onChange={handleCheckboxChange}
           checked={selectedFilters.includes('Assault')}
         />
         Assault
       </label>
       <label>
         <input
           type="checkbox"
           value="Captain"
           onChange={handleCheckboxChange}
           checked={selectedFilters.includes('Captain')}
         />
         Captain
       </label>
     </div>
   );
 }

 export default SortBar;


