import React, {useState,useEffect} from 'react'
import screenSize from '../responsive/screenSize'

export const SearchBarHomeMadeV2 = () => {
  const [newRender,setNewRender]=useState(true)
  const [iconState,setIconState]=useState('initialIcon')
  const screenSizeObj= new screenSize()

  const[isBigScreen,setisBigScreen]=useState(screenSizeObj.getWindowWidth(window.innerWidth))

  useEffect(()=>{
if(isBigScreen){
  const searchBarIDInputContainer = document.getElementById("searchBarID")       
  
  const searchBarInputTag = document.getElementById("searchBarInputID")       


  searchBarInputTag.addEventListener('focus', (event) => {
    searchBarIDInputContainer.style.background = 'white';    

    setIconState("focusIcon")

  });

  searchBarInputTag.addEventListener('blur', (event) => {
    console.log('searchBarInputTag blur')
    searchBarIDInputContainer.style.background = '';
    event.target.value=""
    // icons= (<span>ssssssssss</span>
    // )
    //       <i id="searchIcon" class="fa fa-search" aria-hidden="true"></i>    

    setIconState("initialIcon")
    // setNewRender(!newRender)

  }); 

}
}) 

let icons;
if(iconState=='initialIcon' ){
  icons=(
    <i id="searchIcon" class="fa fa-search" aria-hidden="true"></i>
  ) ;
}else if(iconState=='focusIcon'){
    icons =( <span className="search-focus-icon"> <span>&#8599; </span><span>  &#88;</span>
    </span>)
}
   
    let reportWindowSize= ()=>{
        // console.log(window.innerWidth) 
        if(screenSizeObj.getWindowWidth(window.innerWidth)!=isBigScreen){
             setisBigScreen(screenSizeObj.getWindowWidth(window.innerWidth))
         } 
    } 
    window.addEventListener('resize', reportWindowSize);

    let searchRender;
    if(isBigScreen){  
        console.log('searchRender', icons)  
        searchRender=(
            <div id='searchBarID' className="bar-wrapper" >
            <input id='searchBarInputID' type='text' className="searchBarInput"/>
            {icons}
        </div>

            )
    }else{
        searchRender=(
             <div id='searchBarID' className="bar-wrapper" >

            {icons}
            </div>
        )
    }  
        return (
            <>
     {searchRender}
     </>
        )
    }
    
