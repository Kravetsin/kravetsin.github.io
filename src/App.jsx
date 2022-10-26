import React, {useState} from 'react';
import Counter from './Components/Counter';
import Header from './Components/Header';
import Description from './Components/Description';
import { elements } from './Components/Input';
import Image from './Components/Image';
import Kravets from './img/photo_5242546908562567154_y.jpg';
import Daryna from './img/photo_5188175117971209899_y.jpg';
import JustButton from './Components/JustButton';


export default function App(){
  const [] = useState(0)

  return(
    <div>
      <Header title="Project K"/>
      <JustButton text="Knopo4ka"/>

      <Image image={Kravets}/>
      <Description title="Игорюнька, 23 годика, учусь программировать."/>
      <Counter/>
      <Image image={Daryna}/>
      <Description title="Дарюнька, 19 годиков, тоже учится программировать."/>
      <Counter/>
    </div>
  )
}