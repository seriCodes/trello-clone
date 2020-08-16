class StyleAbstractions{
    constructor(){}

    paddingModal(){
        return {left:0.35,right:0.35,top:0.5,bottom:0.5} 
     }
     modalInput(){
        return {
            backgroundColor: '#ebecf0',
            border: 'none',
            boxShadow: "inset 0 0 0 2px #dfe1e6",
            margin: '1px 1px 8px',
            width:"90%",
            height:"100%",
            borderRadius:'0.3rem',
            padding:"5px 12px 5px 12px",
          } 
     }

     modalInputFocused(){
        return {
            borderStyle: 'solid',
            borderColor: 'blue',
            borderWidth: "3px",
            backgroundColor:"white" 
          } 
      }
      modalInputBlur(){
          let canceleFocusedStyle={
            borderStyle: 'none',
            borderColor: 'blue',
            borderWidth: "3px",
            background:"white" ,
            value:"",
            
          } 
          console.log("dsdssss",Object.assign(this.modalInput(), canceleFocusedStyle)) 

          let blurStyle=Object.assign(this.modalInput(), canceleFocusedStyle)
        return blurStyle
      }


}
export {StyleAbstractions}
