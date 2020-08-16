import React, {useEffect} from 'react'
import {BoardHeaderStyler} from "./BoardHeaderStyler";
import {ContainersStructure} from "./ContainersStructure";
import {Button} from './common/Button'

export const BoardHeader = () => {
    const BoardHeaderStylerObj= new BoardHeaderStyler()
    const ContainersStructureObj= new ContainersStructure()

    useEffect(() => {
        
        const BoardHeaderContainer=document.getElementById("BoardHeader-container")

        ContainersStructureObj.flexRowBetween(BoardHeaderContainer)
        ContainersStructureObj.padding(BoardHeaderContainer,
            {left:0.35,right:0.35,top:0.5,bottom:0.5}
            )


        const BoardHeaderLeft=document.getElementById("BoardHeader-left")
        const BoardHeaderRight=document.getElementById("BoardHeader-right")

        ContainersStructureObj.flexRow(BoardHeaderLeft)

        ContainersStructureObj.flexRow(BoardHeaderRight)
       



        // UserButtonStylerObj.makeCircle(UserButtonTag)

        return () => {
            
        }
    })

    // callBack={()=>
    //     // generalAlertObj.buttonClicked("דף הבית")
    // }

    return (
        <div id="BoardHeader-container" class="BoardHeader-container">
        <div id="BoardHeader-left" class="BoardHeader-left">
        <Button class1="button" class2="button-hover" > 
  <span> Boards11</span>
        </Button> 
        <Button class1="button" class2="button-hover" > 
          <span> Boards44</span>
                </Button> 

        </div>

    <div id="BoardHeader-right"  class="BoardHeader-right">

    <Button class1="button" class2="button-hover" > 
    <span> Boards22</span>
          </Button>    
          <Button class1="button" class2="button-hover" > 
          <span> Boards33</span>
                </Button>        
</div>

        </div>
    )
}
