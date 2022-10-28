import React, {useState} from 'react';
import Header from './Components/Header';
import MainIco from './Components/MainIco';
import Profile from './Components/Profile';

export default function App(){
  const [] = useState(0)

  return(
    <div>
      <MainIco/>
      <Header title="0VERDOSE"/><br /><br />

      <Profile profileLink="https://steamcommunity.com/profiles/76561198130091903/" 
      image="https://cdn.akamai.steamstatic.com/steamcommunity/public/images/items/579720/18f5c18b83cf9aba982b047d8f9dd45c32d129c2.gif" 
      profileName="Kravets" 
      title="Параметры запуска: -novid –console -high +fps_max 100 -nojoy"/>

      <Profile profileLink="https://steamcommunity.com/id/Guilty_crown" 
      profileName="BobiSan"
      image="https://avatars.akamai.steamstatic.com/6e91f285c58d4bef9098f2bd83d4bcf4c13276a2_full.jpg"/>

      <Profile profileLink="https://steamcommunity.com/id/mranfetomin" 
      profileName="Chelovek"
      image="https://avatars.akamai.steamstatic.com/38a9a243e910ccaba6d2ba33f3608561edee4657_full.jpg"/>

      <Profile profileLink="https://steamcommunity.com/profiles/76561198876641334" 
      profileName="Ptunike"
      image="https://avatars.akamai.steamstatic.com/4c8f9227821f1b343fefdc1efc64bdd37ad3f025_full.jpg"/>
      
      <Profile profileLink="https://steamcommunity.com/id/Payorth" 
      profileName="Ебашу в танке"
      image="https://avatars.akamai.steamstatic.com/79afd41a35aea99ea46606fbb7cc569e0e42b26d_full.jpg"/>
    </div>
  )
}
