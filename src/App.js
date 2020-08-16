import React from 'react';
import logo from './logo.svg';
import './App.css';
import AppContainer from './components/AppContainer';
import './style/styles.scss';
import HoverTests from './playground/HoverTests';
import HoverStyled from './playground/HoverStyled';
import HoverInputStyled from './playground/HoverInputStyled';
// import {FocusCheck} from './playground/FocusCheck';
import {FocusEvent} from './playground/FocusEvent';
import {PointerJs} from './playground/PointerJs';
import {ModalHomeMade} from './playground/ModalHomeMade';

// import {DnDPlayCardsOnly} from './playground/DnDPlayCardsOnly';
// import {DnDPlayListOnly} from './playground/DnDPlayListOnly';
import DnDParentCross from './playground/DnDParentCross';
import {DnDPlayListnCards} from './playground/DnDPlayListnCards';

import {DnDAddedListnCards} from './playground/DnDAddedListnCards';
import {DnDAddNscrollListnCards} from './playground/DnDAddNscrollListnCards';
import {HorizontalScroller} from './playground/HorizontalScroller';

//    <FocusCheck></FocusCheck>  HorizontalScroller
//     <ModalHomeMade></ModalHomeMade>
//  <DnDPlayListOnly></DnDPlayListOnly>
// <DnDPlayCardsOnly></DnDPlayCardsOnly>
//     <DnDAddNscrollListnCards></DnDAddNscrollListnCards> 

 
function App() {
  return (
    <div className="App">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/> 
    <script src='https://kit.fontawesome.com/a076d05399.js'> </script> 

     
    <AppContainer></AppContainer>  

      </div>
  );
}

export default App;


