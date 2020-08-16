class ContainersStructure{
    constructor(){}

        flexRowBetween(elem){
            elem.style.display="flex";
            elem.style.flexDirection="row";
            elem.style.justifyContent="space-between";
            // elem.style.alignItems="center"; 
            
     }
     flexRow(elem){
        elem.style.display="flex";
        elem.style.flexDirection="row";
        // elem.style.justifyContent="space-between";
        // elem.style.alignItems="center"; 
        
 }
 padding(elem, styleObject){
    elem.style.paddingTop=`${styleObject.top}rem`
    elem.style.paddingBottm=`${styleObject.bottom}rem`

    elem.style.paddingLeft=`${styleObject.left}rem`
    elem.style.paddingRight=`${styleObject.right}rem`

 }
 reletiveSize(elem, {height,width}){
    elem.style.height=height
    elem.style.width=width

 }

}
export {ContainersStructure}
