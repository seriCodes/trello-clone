import React, {useState,useEffect} from 'react'
import screenSize from '../responsive/screenSize'

export const SearchBarHomeMade = () => {
useEffect(()=>{
          // Check page focus every 300 milliseconds
          //must make calls to checkPageFocus only after rendering classes and id's and continues to call the checkPageFocus at the same render
          setInterval(checkPageFocus, 300);

},[])


const [newRender,setNewRender]=useState(true)

const [iconState,setIconState]=useState('initialIcon')
let icons ;
if(iconState=='initialIcon'
//  ||iconState=='searchBar'
 ){
    icons= (<i id="searchIcon" class="fa fa-search" aria-hidden="true"></i>
    )
}else{
    icons =( <span className="search-focus-icon"> <span>&#8599; </span><span>  &#88;</span>
    </span>)
}   

console.log('above useEffect iconState',iconState)

useEffect(()=>{
    console.log('above switch iconState',iconState)
    switch(iconState){
      case 'initialIcon':
        console.log('iconState',iconState)

        icons =( <i id="searchIcon" class="fa fa-search" aria-hidden="true"></i> 
        )
        break;
        case 'focused':
            console.log('iconState is focused',iconState)

          icons =( <span className="search-focus-icon"> <span>&#8599; </span><span>  &#88;</span>
            </span>)
      
        default:
          console.log('mistake')
    }
    setNewRender(!newRender)
},[iconState])

    const screenSizeObj= new screenSize()
    const[isBigScreen,setisBigScreen]=useState(screenSizeObj.getWindowWidth(window.innerWidth))

    let reportWindowSize= ()=>{
        // console.log(window.innerWidth) 
        if(screenSizeObj.getWindowWidth(window.innerWidth)!=isBigScreen){
            // console.log('change', isBigScreen)
            // setTimeout(()=>{
            setisBigScreen(screenSizeObj.getWindowWidth(window.innerWidth))

            // },500)
 
        }
    // console.log(isBigScreen)
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
            <div>
            {icons}
            </div>
        )
    } 
    
    
    
    function checkPageFocus() { 
    if(!isBigScreen){
        console.log('isBigScreen',isBigScreen)//fail
return false
    }
            let body = document.querySelector('body');
            let searchBarInput = document.getElementById('searchBarInputID'); 
            var searchBar= document.getElementById("searchBarID");
            if (document.hasFocus()) { 
    
             let elemFocused = document.activeElement
             console.log('elemFocused',elemFocused )

             console.log(elemFocused.id)
             if(elemFocused.id=="searchBarInputID"){ 
             searchBar.style.background="white"
            //  searchBar.style.color="black"

             console.log('icons',icons)
             console.log(icons.props.id)
    
              if(icons.props.id=="searchIcon"){
                // icons=( )
                console.log('focused state')
                setIconState('focused')
    
    console.log('focused')
              } 
             }else{
              // searchBar.classList.add("bar");//doesn't solve
    
              searchBar.style.background="rgba(227, 236, 223, 0.616)"
              searchBar.style.color="white"

              // icons=( <i id="searchIcon" class="fa fa-search" aria-hidden="true"></i>         
              // )
              console.log(document.getElementById("searchBarID")) 
              console.log(icons)
              console.log(icons.props.id)
              if(icons.props.id !='searchIcon'){
                setIconState('searchBar')
              }
             }
              }
            else {
    
              console.log("rgba(227, 236, 223, 0.616)")
              // searchBar.classList.add("bar");
    
              searchBar.style.background="rgba(227, 236, 223, 0.616)"
              searchBar.style.color="white"

              if(icons.props.id !='searchIcon'){
              setIconState('searchBar')
            }
    
            }
    
          } 
          
          
        return (
            <>
     {searchRender}
     </>
        )
    }
    
