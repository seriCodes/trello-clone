import React from 'react';
import Header from './Header';  
import {AppContainerStyler} from './AppContainerStyler';  
import {BoardHeader} from './BoardHeader';  
import {generalStyle} from './generalStyle.css';  
import {ListsContainer} from './ListsContainer';  


// import Footer from './Footer'; <Footer /> ListsContainer


function AppContainer(props) {
    const AppContainerStylerObj= new AppContainerStyler()
    React.useEffect(() => {
let mainArea= document.getElementById("main-area-container")
console.log('mainArea')
console.log(mainArea)
// let body= document.getRootNode("body")
AppContainerStylerObj.setBody(document.body)
AppContainerStylerObj.basic(mainArea)

        return () => {
            //remove event listener
        }
    }, [])


    return (
        <div className="app-container">

        <div className='header'><Header></Header></div>
            <div className='side-bar'></div>
            <div id="main-area-container" className='main-area-container'
            style={{
                // borderStyle:'dashed',
                // 'borderColor': 'yellow',
                // 'borderWidth': '16px',
        
            }}>
            <BoardHeader></BoardHeader>
                <div className='content-wrapper'
                style={{
                    // borderStyle:'dashed',
                    // 'borderColor': 'blue',
                    // 'borderWidth': '16px',
                    height: "95%", //makes white bottom line under disapear
                }}
                >
                <ListsContainer></ListsContainer>
                    {props.children}
                </div>
                <div className='footer-wrapper'>
                </div>
            </div>
            <div className='side-bar'></div>
        </div>
    );
}

export default AppContainer;