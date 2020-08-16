import React from 'react'
import {ModalStyler} from './ModalStyler'
import {Button} from './common/Button'
import {ContainersStructure} from "./ContainersStructure";
import {StyleAbstractions} from "./StyleAbstractions";

export const BoardsModal = () => {
  const ContainersStructureObj= new ContainersStructure()

    const ModalStylerObj= new ModalStyler()
    const StyleAbstractionsObj= new StyleAbstractions() 

    React.useEffect(() => {
      //change Id using props or state
        // var btn = document.getElementById("BoardsModal");
        var modal = document.getElementById("BoardsModal");

        var modalHeder = document.getElementById("board-modal-header");
        console.log('BoardsModal',modal)
        var modalWrapper = document.getElementById("modal-wrapper");
        // ModalStylerObj.wrapperStyle(modalWrapper)
        var modalContent = document.getElementById("board-modal-content");
        var searchBoardsBar = document.getElementById("searchBoards");


        ContainersStructureObj.flexRowBetween(modalHeder)
        ContainersStructureObj.padding(modal,
          StyleAbstractionsObj.paddingModal() )

          ContainersStructureObj.reletiveSize(modalHeder,{height:"2.4rem"})
          // 55px

        let inputStyler= StyleAbstractionsObj.modalInput()
        ModalStylerObj.inputStyler(searchBoardsBar,inputStyler)
        
        searchBoardsBar.addEventListener('focus', (event) => {

          // searchBoardsBar.style.background = 'white';
          // searchBoardsBar.style.border = 'white';
          console.log('searchBoardsBar object')

          console.log(searchBoardsBar)

          console.log('event.target object')

          console.log(event.target)

          ModalStylerObj.inputFocused(event.target,
            StyleAbstractionsObj.modalInputFocused())


        });

        
        searchBoardsBar.addEventListener('blur', (event) => {

          ModalStylerObj.inputBlur(event.target,
            StyleAbstractionsObj.modalInputBlur())

    console.log('searchBarInputTag blur')
    // searchBoardsBar.style.background =inputStyler.backgroundColor;
    // event.target.value=""
   }); 

        // var toggleModal = function() {
        //   ModalStylerObj.toggleModal(modal)
        //  }
          let top="2.5rem"
          let left="0rem"

let  BasicStyler={radius:"3px",
position:"fixed"}

          ModalStylerObj.BasicStyle(modal,top ,left,BasicStyler)

          ModalStylerObj.modalSize(modal,"5rem","25rem",)
          let font={
            color:"#172b4d",
            size:"14px",
            height:"30px",
            weight:400, 
          }
          ModalStylerObj.modalFont(modal,font)
          

          window.onclick = function(event) {
            ModalStylerObj.closeOutsideClick(event.target, modal, "Board-Modal-btn","BoardsModal","searchBoards")
            console.log('event.target')
            console.log(event.target)
            console.log(event.target.class)
            console.log(event.target.classList) 
            console.log(event) 
          }
          let contentStyle={}
          ModalStylerObj.contentStyler(modalContent,contentStyle)

          
    })
    // debugger

   
//    <div>    </div>
    return (
     
      
        <div id="modal-wrapper" class="modal-wrapper">
   
        <Button id="Board-Modal-btn" callBack={()=>{
          ModalStylerObj.toggleModal("BoardsModal")
          let input= document.getElementById('searchBoards')
          ModalStylerObj.animatefirstInputFocus(input,{})
          input.focus()

 
         }} 
        class1="button" class2="button-hover"  
        ><i class="fa fa-trello" aria-hidden="true"></i>&nbsp;
   Boards
        </Button> 

        <div id="BoardsModal" class="modal"> 
     

        <div id="board-modal-content" class="modal-content">
        <div id="board-modal-header" class="modal-header">
        <input class="searchBoardsBar" id="searchBoards" type="text" placeholder="Find boards by name…"/>

        <span class="small-close-Modal" onClick={()=>
          {ModalStylerObj.toggleModal("BoardsModal")
}}>&times;</span>
</div>
<div>
<p>Some text in the Modal'</p>
</div>
 </div> 
     

        </div>
     
        
      </div>
      
    )
}
