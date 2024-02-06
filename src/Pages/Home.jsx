import React from 'react'
import Innerpage_1 from '../Homeinnerpages/Innerpage_1'
import Innerpage_2 from '../Homeinnerpages/Innerpage_2'
import Innerpage_3 from '../Homeinnerpages/Innerpage_3'
import Innerpage_4 from '../Homeinnerpages/Innerpage_4'
import LatestTracks from '../Homeinnerpages/LatestTracks'
import Gello from '../Homeinnerpages/Gello'



const Home = () =>{
  

  return (
    <div>
     
        <Innerpage_1 />
        <Gello text="Bright David" />
        <Innerpage_2 />
        <Innerpage_3 />
        <Innerpage_4 text='wassup' texts='yo' />
        <LatestTracks />
        
        


    </div>
  )
}

export default Home
