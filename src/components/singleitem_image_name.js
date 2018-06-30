import React from 'react'; 
import Data from '../../server/wizardDummyData'; 

export default ()=>{
 return(
     <div> 
     <p> {Data.item["0"].imgURL}  </p> 
     <p> {Data.item["0"].name}  </p> 
     <p> {Data.item["0"].manu}  </p> 
     <p> {Data.item["0"].description}} </p> 
     </div> 
 )
}
