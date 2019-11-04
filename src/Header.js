import React from 'react';
import Stats from './Stats';
import Stopwatch from './Stopwatch';

//Can get rid of props just by using an object, list property names (dont have to repeat writing props)
const Header = ({players, title}) => {
  return (
    <header>
      <Stats players={ players }/>
      <h1>{ title }</h1>
      <Stopwatch />
    </header>
  );
}



// const Header = (props) => {
//   return (
//     <header>
//       <Stats players={props.players}/>
//       <h1>{ props.title }</h1>
//       <Stopwatch />
//     </header>
//   );
// }

export default Header;
