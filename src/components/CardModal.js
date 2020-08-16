import React , {useState} from 'react'
import {ModalStyler} from './ModalStyler'
import {Button} from './common/Button'
import {ContainersStructure} from "./ContainersStructure";
import {StyleAbstractions} from "./StyleAbstractions";
import {v1 as uuidv1} from "uuid";
import screenSize  from "../responsive/screenSize";

export const CardModal = (props) => {

    const screenSizeObj= new screenSize()

    const[isBigScreen,setisBigScreen]=React.useState(screenSizeObj.getWindowWidth(window.innerWidth))
    const [render1, setrender1] = useState(true);

    const ContainersStructureObj= new ContainersStructure()

    const ModalStylerObj= new ModalStyler()
    const StyleAbstractionsObj= new StyleAbstractions() 
let idToggle= uuidv1()
let idHeader= uuidv1()
let idWrapper= props.id
let idModalContent= uuidv1()
let inputEditTitle= uuidv1()


React.useEffect(() => {
    //change Id using props or state
      // var btn = document.getElementById("BoardsModal");
      var modal = document.getElementById(idToggle);

      var modalHeder = document.getElementById(idHeader);
      console.log('idToggle',modal)
      var modalWrapper = document.getElementById(idWrapper);
      // ModalStylerObj.wrapperStyle(modalWrapper)
      var modalContent = document.getElementById(idModalContent);
      var inputCardTitle = document.getElementById(inputEditTitle);

    //   var inputModalbtnRef = document.getElementById(inputModalbtn);

    //   ContainersStructureObj.reletiveSize(inputModalbtnRef,{height:"1.4rem",
    //     width:"15rem"
    //   })


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
      ModalStylerObj.inputStyler(inputCardTitle,inputStyler)
      
      inputCardTitle.addEventListener('focus', (event) => {

        // inputCardTitle.style.background = 'white';
        // inputCardTitle.style.border = 'white';
        console.log('inputCardTitle object')

        console.log(inputCardTitle)

        console.log('event.target object')

        console.log(event.target)

        ModalStylerObj.inputFocused(event.target,
          StyleAbstractionsObj.modalInputFocused())


      });

      
      inputCardTitle.addEventListener('blur', (event) => {

        ModalStylerObj.inputBlur(event.target,
          StyleAbstractionsObj.modalInputBlur())

  console.log('searchBarInputTag blur')
  // inputCardTitle.style.background =inputStyler.backgroundColor;
  // event.target.value=""
 }); 

      // var toggleModal = function() {
      //   ModalStylerObj.toggleModal(modal)
      //  }
        let top=0
        // "4.5rem"
        let left="30rem"
        // "30rem"
        // let right="5rem"

let  BasicStyler={radius:"3px", position:"absolute",display:"none",verticalAlign: 'middle',
// right:"25rem" 
}

        // ModalStylerObj.BasicStyle(modal,top ,left,BasicStyler)
        
        ModalStylerObj.BasicStyle(modalWrapper,top ,left,BasicStyler)
//   vertical-align: middle;

        if(isBigScreen){
          console.log('window size is big')
          ModalStylerObj.modalSize(modal,"40rem","60rem",)

          // setrender1(!render1)
        }else{
          console.log('window size is small ')

          top="1rem"
          left="1rem"
          ModalStylerObj.BasicStyle(modalWrapper,top ,left,BasicStyler)

          let Height= window.innerHeight-20 +"rem"
          let Width= window.innerWidth-10 +"rem"

          ModalStylerObj.modalSize(modal,Height,Width)

        }
        let font={
          color:"#172b4d",
          size:"14px",
          height:"30px",
          weight:400, 
        }
        ModalStylerObj.modalFont(modal,font)
        

////the window.onclick messes with BoardsModal window.onclick- fix later

      //   window.onclick = function(event) {
      //     ModalStylerObj.closeOutsideClick(event.target, modal, inputModalbtn,ModalIdToggle,"cardTitle")
      //     console.log('event.target')
      //     console.log(event.target)
      //     console.log(event.target.class)
      //     console.log(event.target.classList) 
      //     console.log(event) 
      //   }
        let contentStyle={}
        ModalStylerObj.contentStyler(modalContent,contentStyle)

        
  })
//   debugger

let adjustToWindowSize= ()=>{

    if(screenSizeObj.getWindowWidth(window.innerWidth)!=isBigScreen){
        console.log("isBigScreen change")
        setisBigScreen(screenSizeObj.getWindowWidth(window.innerWidth))
    }
}

window.addEventListener('resize', adjustToWindowSize);

  return (  
      <div id={idWrapper}  class="modal-wrapper">  
      <div id={idToggle} class="add-card-modal">  
      <div id={idModalContent} class="modal-content">
      <div id={idHeader} class="modal-header">
      <input style={{  
      }} class="add-card-input" id={inputEditTitle} 
      type="text" placeholder="Enter NEW title..."
      onKeyUp={(event)=>{
          event.preventDefault(); 
          if (event.keyCode === 13) {
             props.editTitle(props.card,event.target.value)
             ModalStylerObj.toggleModal(idWrapper)
            ModalStylerObj.shadedDivClickAftermodalToggled()
          } 
        } }
      />

      <span class="small-close-Modal" onClick={(e)=>
        {
            e.stopPropagation()
            // alert(idWrapper)
            ModalStylerObj.toggleModal(idWrapper)
            ModalStylerObj.shadedDivClickAftermodalToggled()
}}>&times;</span>
</div>
<div>
<p>{props.card.content}</p>

</div>
</div> 
   

      </div>
   
      
    </div>
    
  )
}