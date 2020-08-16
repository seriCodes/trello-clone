import React from 'react'
import {ModalStyler} from './ModalStyler'
import {Button} from './common/Button'
import {ContainersStructure} from "./ContainersStructure";
import {StyleAbstractions} from "./StyleAbstractions";
import {v1 as uuidv1} from "uuid";


export const AddListModal = (props) => {
  const ContainersStructureObj= new ContainersStructure()

    const ModalStylerObj= new ModalStyler()
    const StyleAbstractionsObj= new StyleAbstractions() 
let idToggle= uuidv1()
let idHeader= uuidv1()
let idWrapper= uuidv1()
let idModalContent= uuidv1()
let inputModalbtn= uuidv1()



    React.useEffect(() => {
      //change Id using props or state
        // var btn = document.getElementById("BoardsModal");
        var modal = document.getElementById(idToggle);

        var modalHeder = document.getElementById(idHeader);
        console.log('idToggle',modal)
        var modalWrapper = document.getElementById(idWrapper);
        // ModalStylerObj.wrapperStyle(modalWrapper)
        var modalContent = document.getElementById(idModalContent);
        var inputAddCard = document.getElementById("addList");

        var inputModalbtnRef = document.getElementById(inputModalbtn);

        ContainersStructureObj.reletiveSize(inputModalbtnRef,{height:"1.4rem",
          width:"15rem"
        })


        ContainersStructureObj.flexRowBetween(modalHeder)
        ContainersStructureObj.padding(modal,
          StyleAbstractionsObj.paddingModal() )

          ContainersStructureObj.reletiveSize(modalHeder,{height:"2.4rem",
        //   width:"20.6rem"
        })
          // 55px

        let inputStyler={
            ...StyleAbstractionsObj.modalInput(),
         
        } 
        ModalStylerObj.inputStyler(inputAddCard,inputStyler)
        
        inputAddCard.addEventListener('focus', (event) => {

          // inputAddCard.style.background = 'white';
          // inputAddCard.style.border = 'white';
          console.log('inputAddCard object')

          console.log(inputAddCard)

          console.log('event.target object')

          console.log(event.target)

          ModalStylerObj.inputFocused(event.target,
            StyleAbstractionsObj.modalInputFocused())


        });

        
        inputAddCard.addEventListener('blur', (event) => {

          ModalStylerObj.inputBlur(event.target,
            StyleAbstractionsObj.modalInputBlur())

    console.log('searchBarInputTag blur')
    // inputAddCard.style.background =inputStyler.backgroundColor;
    // event.target.value=""
   }); 

        // var toggleModal = function() {
        //   ModalStylerObj.toggleModal(modal)
        //  }
          let top="22.5rem"
          let left="0rem"

let  BasicStyler={radius:"3px"}

          ModalStylerObj.BasicStyle(modal,top ,left,BasicStyler)

          ModalStylerObj.modalSize(modal,"5rem","15rem",)
          let font={
            color:"#172b4d",
            size:"14px",
            height:"30px",
            weight:400, 
          }
          ModalStylerObj.modalFont(modal,font)
          

////the window.onclick messes with BoardsModal window.onclick- fix later

        //   window.onclick = function(event) {
        //     ModalStylerObj.closeOutsideClick(event.target, modal, inputModalbtn,idToggle,"addList")
        //     console.log('event.target')
        //     console.log(event.target)
        //     console.log(event.target.class)
        //     console.log(event.target.classList) 
        //     console.log(event) 
        //   }
          let contentStyle={}
          ModalStylerObj.contentStyler(modalContent,contentStyle)

          
    })
    // debugger
    
    return (  
        <div id={idWrapper}  class="modal-wrapper">
   
        <Button  id={inputModalbtn}        style={{
            
              textAlign: 'left',
          
          }}   callBack={()=>{
          ModalStylerObj.toggleModal(idToggle)
          let input= document.getElementById("addList")
          ModalStylerObj.animatefirstInputFocus(input,{})
          input.focus()

 
         }} 
        class1="add-card-btn" class2=""  
        >   Add a list

        </Button> 

        <div id={idToggle} class="add-card-modal"> 
     

        <div id={idModalContent} class="modal-content">
        <div id={idHeader} class="modal-header">
        <input class="add-card-input" id={"addList"} type="text" placeholder="Enter List title..."
        onKeyUp={(event)=>{
            event.preventDefault();
          
            if (event.keyCode === 13) {
               props.addList(props.listsContainerProp)
            } 
          } }
        /
        >

        <span class="small-close-Modal" onClick={()=>
          {ModalStylerObj.toggleModal(idToggle)
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
