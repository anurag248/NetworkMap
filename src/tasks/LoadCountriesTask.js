import papa from "papaparse";
import {features} from "../data/countries.json"
import legendItems from "../entities/LegendItems";

class LoadCountriesTask {
        networkDataUrl = "https://raw.githubusercontent.com/CSSEGISandData/COVID-19/web-data/data/cases_country.csv";
        
        setState = null;
        mapCountries = features;
        
        load = (setState) => {
            this.setState = setState;
            
         papa.parse(this.networkDataUrl, {
            download:true,
            header:true,
            complete: (result) => this.#processNetworkData(result.data),
         });
        
    };
    #processNetworkData = (networkCountries) => {
       for(let i=0; i < this.mapCountries.length; i++){
        const mapCountry = this.mapCountries[i];
        const networkCountry = networkCountries.find(
            (networkCountry)=> networkCountry.ISO3 === mapCountry.properties.ISO_A3);

         mapCountry.properties.confirmed = 0;
         mapCountry.properties.confirmedText = "0";   

         if(networkCountry != null){
            const confirmed = Number(networkCountry.Confirmed);
            mapCountry.properties.confirmed = confirmed;
            mapCountry.properties.confirmedText = this.#formatNumberWithCommas(confirmed
               );
         }
         this.#setCountryColor(mapCountry);
       }

       this.setState(this.mapCountries);
    };
  
    #setCountryColor = (mapCountry) => {
       const legendItem = legendItems.find((legendItem)=> 
       legendItem.isFor(mapCountry.properties.confirmed));

       if(legendItem != null){
         mapCountry.properties.color = legendItem.color;
       }
    }

    #formatNumberWithCommas = function (number)  {
      return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };
}

export default LoadCountriesTask; 