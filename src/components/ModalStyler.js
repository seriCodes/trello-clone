class ModalStyler{
    constructor(){}
    
    wrapperStyle(elem){
        // elem.style.borderStyle="dashed";
        // elem.style.borderColor="brown";
        // elem.style.borderWidth="2px"; 
        // elem.style.width="50%";
        elem.style.display="flex"
        elem.style.flexDirection="column"
        elem.style.alignItems="center"
        elem.style.justifyContent="space-around" 

    } 
    BasicStyle(elem,top,left,{radius="3px",position,display="none",verticalAlign,right }){
         elem.style.display=display;
        //  alert(  elem.style.display)
        elem.style.position=position;
        // elem.style.display="none";
        elem.style.top=top;
        elem.style.left=left;
        elem.style.right=right;

        elem.style.zIndex=1;//seems to work only with position fixed
        elem.style.backgroundColor="#fff";
        elem.style.borderRadius=radius;
        elem.style.verticalAlign=verticalAlign;
        // elem.style.marginLeft="0px";
        // elem.style.marginright="30px";

        // elem.style.borderStyle="dashed";
        // elem.style.borderColor="brown";
        // elem.style.borderWidth="6px"; 
    }
    modalSize(elem,height,width){

        elem.style.height=height;
        elem.style.width=width;
 
    }
    modalFont(elem,{color="black",size,height,weight}){
console.log("modalFont")
console.log(color, size,height,weight)

        elem.style.fontSize=size;//VV
        elem.style.fontWeight=weight;//VV
        elem.style.lineHeight=height;//VV
        elem.style.color = color; 
        elem.style.fontFamily = "-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Noto Sans,Ubuntu,Droid Sans,Helvetica Neue,sans-serif";
    }
    toggleModal(id){ 
        var btn = document.getElementById(id)
        btn.style.display=btn.style.display=="block"?"none":"block" ; 
        console.log('toggleModal id check', id)
    }
    closeOutsideClick(elem,modal, buttonID, modalID,id3){

        // elem.classList.includes("modal")
        // console.log(elem)
        // console.log(elem.id)

        // console.log('elem.classList')
        // console.log(buttonID + " "+ modalID)
        // console.log(elem.id!=modalID)

        // console.log(elem.classList)
        // console.log(elem.classList.value)
        // console.log(modal.style.display)

        //make a loop for all names element that inside the Modal and okay to be pressed without close modal
        if(elem.id!=modalID
        && elem.id!=buttonID &&
        elem.id!=id3 &&
         modal.style.display=="block"){
console.log("dsdsdsf")
modal.style.display="none";
            // alert("ddd")
        }
    }
    contentStyler(elem,styleObj){
        // elem.style.color=styleObj.color
        //         elem.style.borderStyle="dashed";
        // elem.style.borderColor="brown";
        // elem.style.borderWidth="1px"; 
        // elem.style.width="50%";
        elem.style.pointerEvents = "none";

    }
    containerStyler(elem,styleObj){
        elem.style.color=styleObj.color
                elem.style.borderStyle="dashed";
        elem.style.borderColor="brown";
        elem.style.borderWidth="1px"; 
        // elem.style.width="50%";
        elem.style.pointerEvents = "none";

    }

    inputStyler(elem,{backgroundColor,border,boxShadow,margin,
        width, borderRadius,height,padding}){
            console.log('borderRadius', borderRadius)
        elem.style.pointerEvents = "all";
//         if(elem.id=="cardTitle"){
// // alert(elem)
// console.log('elem edit card',elem)
//         }
        elem.style.backgroundColor=backgroundColor;

        elem.style.border=border;
        elem.style.boxShadow=boxShadow;
        elem.style.boxShadow=backgroundColor;
        elem.style.margin=margin;
        elem.style.width=width;
        elem.style.borderRadius=borderRadius;
        // elem.style.height=height;


        elem.style.padding=padding;
        elem.style.backgroundColor=backgroundColor;
        elem.style.backgroundColor=backgroundColor;


// alert("Sss")
// elem.style.onClick = "none";
    }
    inputFocused(elem,{backgroundColor,border,boxShadow,margin,
        width, borderRadius,height,padding,borderColor="brown",borderStyle="solid",borderWidth="6px"}){

        elem.style.borderStyle=borderStyle;
        elem.style.borderColor=borderColor;
        elem.style.borderWidth=borderWidth; 
        elem.style.backgroundColor=backgroundColor; 

    }

    inputBlur(elem,{backgroundColor,border,boxShadow,margin,
        width, borderRadius,height,padding,borderColor="brown",borderStyle="none",borderWidth="6px",value}){

        elem.style.borderStyle=borderStyle;
        elem.style.borderColor=borderColor;
        elem.style.borderWidth=borderWidth; 
        elem.style.backgroundColor=backgroundColor; 
        elem.value=value;


    }
    animatefirstInputFocus(elem,{}){
        console.log("ddddddddddddddd")
        elem.style.transitionProperty='background-color,border-color,box-shadow';
        elem.style.transitionDuration=' 0.35s';
        elem.style.transitionTimingFunction= 'ease';
        elem.style.backgroundColor='blue'; 



    }
  
    makeWindowShadedClickBlocker(modalElementId){
        var shadedDiv = document.createElement("div");

        shadedDiv.id="shadedDiv"
        document.body.appendChild(shadedDiv)
        // alert("makeWindowShadedClickBlocker")
        let style={
  width: "100%",
  height: "100%",
  opacity: "1",
  position: "fixed",
  overflow: "hidden",
  backgroundColor: "rgba(0, 0, 0, 0.4)",
  left : 0,
  top: 0
 }
       this.shadedDivStyle(shadedDiv,style)
       shadedDiv.addEventListener('click', shadedDivClick );

       let shadedDivStyleLink =this.shadedDivStyle

       let toggleModalLink =this.toggleModal

       function shadedDivClick(e) {
        e.preventDefault();
        // e.stopPropagation();
        // e.stopImmediatePropagation();
        // alert("shadedDivClick")
        // shadedDivStyleLink(shadedDiv,{display:"none"})
        shadedDiv.remove();

        toggleModalLink(modalElementId)

        return false;
      }
    }
    shadedDivClickAftermodalToggled(){
        // alert('shadedDivClickAftermodalToggled')
         document.getElementById("shadedDiv").remove();

        
    }

// shadedDivClick =( ()=>{ alert('shadedDivClick out') return (modalElementId)=>{
//         e.preventDefault();
//         // e.stopPropagation();
//         // e.stopImmediatePropagation();
//         // alert("shadedDivClick")
//         shadedDivStyleLink(shadedDiv,{display:"none"})
//         toggleModalLink(modalElementId)

//         return false;
//       }
//     })()
    shadedDivStyle(elem,{width,height,opacity,position,overflow,backgroundColor,left,top,display=""}){
        // alert("shadedDivStyle")
        // alert(elem)
        elem.style.display=display

        elem.style.width=width
        elem.style.height=height
        elem.style.opacity=opacity
        elem.style.position=position
        elem.style.overflow=overflow
        elem.style.backgroundColor=backgroundColor
        elem.style.left=left
        elem.style.top=top


    }
    
}
export {ModalStyler}