import React, { useState, useEffect } from 'react';

import Loading from "./Loading";
import NetworkMap from "./NetworkMap";
import Legend from "./Legend";
import LoadCountriesTask from '../tasks/LoadCountriesTask';
import legendItems from '../entities/LegendItems';


const Network = () => {
   const [countries, setCountries] = useState([]);
   const legendItemsInReverse = [...legendItems].reverse();

   const load = () => {
      const loadCountriesTask = new LoadCountriesTask();
      loadCountriesTask.load(setCountries);
   };

   useEffect(load,[]);

    return ( 
       <div>
       {countries.length === 0 ? 
       <Loading /> : 
       <div>
       <NetworkMap countries={countries} />
       <Legend legendItems={legendItemsInReverse} />
       </div>
       }
       </div>
            );
};
 
export default Network;