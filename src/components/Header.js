import React, {useState, useEffect} from 'react'
import {Button} from './common/Button'
import {UserButton} from './common/UserButton'

import screenSize from '../responsive/screenSize'
// import {BarsMenue} from './BarsMenue'
import generalAlert from '../buttonsAlert/generalAlert'
import SearchBar from './SearchBar'
import {SearchBarHomeMade} from './SearchBarHomeMade'
import {SearchBarHomeMadeV2} from './SearchBarHomeMadeV2'
import {BoardsModal} from './BoardsModal'

// import HomeWork from '@material-ui/icons/HomeWork';
import InputBase from '@material-ui/core/InputBase';
import { withStyles } from '@material-ui/core/styles';
import { HeaderStyler } from './HeaderStyler';
 

// 
// import AddIcon from '@material-ui/icons/Add';
import styled from 'styled-components';


// <i class="fas fa-search"></i> 
 
 
 const Header = (props) => {
    const HeaderStylerObj= new HeaderStyler()
    useEffect(()=>{
      var headLineTag = document.getElementById("headline"); 
      HeaderStylerObj.headLineStyler(headLineTag)

     })
    
    const screenSizeObj= new screenSize()
    const generalAlertObj= new generalAlert()

    const[isBigScreen,setisBigScreen]= useState(screenSizeObj.getWindowWidth(window.innerWidth))

    // const callBackButton = (linkText)=>{   
    //     screenSize.linkClicked(linkText)
    // }
    // let isBigScreen=screenSize.getWindowWidth(window.innerWidth);
    let reportWindowSize= ()=>{
        // console.log(window.innerWidth) 
        if(screenSizeObj.getWindowWidth(window.innerWidth)!=isBigScreen){
            // console.log('change', isBigScreen)
            setisBigScreen(screenSizeObj.getWindowWidth(window.innerWidth))
           
        }
    // console.log(isBigScreen)
    } 
    window.addEventListener('resize', reportWindowSize);
    const showMenuefunc= ()=>{
console.log('object')
    }
let bigScreenHeaderRight
// if(isBigScreen){           
// bigScreenHeaderRight=(
//     <div className="header-right">
       
//     <Button class1="button-hover" class2="sides-padding-added"
//     callBack={()=>screenSizeObj.linkClicked("צור קשר")}
//     >
//     צור קשר </Button>

//     <Button class1="header-hover" class2="sides-padding-added"       
//     callBack={()=>screenSizeObj.linkClicked("טיולים מאורגנים")}
// >
//     טיולים מאורגנים </Button>

//     <Button class1="header-hover" class2="sides-padding-added"
//     callBack={()=>screenSizeObj.linkClicked("טיסות")}
//     >
//     טיסות </Button>


//     <Button class1="header-hover header-hover-fix" class2="sides-padding-added">
//     חבילות נופש </Button>

//     <Button class1="header-hover" class2="sides-padding-added" 
//     callBack={()=>screenSizeObj.linkClicked("דף הבית")}
//     >דף הבית</Button> 
//     </div>

// )
// }else{
//     console.log('small')
//     bigScreenHeaderRight=(
//         <a>ss</a>
//      )
// }
// <SearchBarHomeMade></SearchBarHomeMade>

    return (
 
        <div className="header-wrapper">
        <div className="header">
      
        <div className="header-Left">


        
        <Button class1="button" class2="button-hover" 
        callBack={()=>generalAlertObj.buttonClicked("דף הבית")}
        > <i class="fa fa-home" aria-hidden="true"></i>
        </Button> 
        
        <BoardsModal></BoardsModal>
        

         <SearchBarHomeMadeV2></SearchBarHomeMadeV2>
        </div>
    
<span id="headline">  </span>

    <UserButton name={"Saar"}></UserButton>
        </div>
 
      
            </div>
            
  

 
    )
}
export default (Header);


