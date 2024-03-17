import React from 'react'
import Innerpage_1 from '../Homeinnerpages/Innerpage_1'
import Innerpage_2 from '../Homeinnerpages/Innerpage_2'
import Innerpage_3 from '../Homeinnerpages/Innerpage_3'
import Innerpage_4 from '../Homeinnerpages/Innerpage_4'
import LatestTracks from '../Homeinnerpages/LatestTracks'
import Lettereffect from '../Homeinnerpages/Lettereffect'
import Lettereffects2 from '../Homeinnerpages/Lettereffects2'



const Home = () =>{
  

  return (
    <div>
     
        <Innerpage_1 />
        <Lettereffect text="Designed by Brizzy Bright" />
        <Innerpage_2 />
        <Innerpage_3 />
        <Innerpage_4 text='Working effortlessly in the Studio' texts='Grinding to the Musix Vibes' />
        <LatestTracks />
        <Lettereffects2 text="Brizzy Bright" />
        
        


    </div>
  )
}

export default Home
