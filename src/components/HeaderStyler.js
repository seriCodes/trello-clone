class HeaderStyler{
    constructor(){
    }

  async  headLineStyler(elem){
        console.log('headLineStyler',elem)
        const img = await new Image();
        console.log('img cccc')
        console.log(img)

        // img.onload = function() {
        //   alert(this.width + 'x' + this.height);
        // }
        img.src = 'https://a.trellocdn.com/prgb/dist/images/header-logo-2x.01ef898811a879595cea.png';
       
        // alert(img.width + 'x' + img.height);
       
        console.log(img)
        console.log('img')
        // img.style.width="2px"
        // img.style.height="1px"
        
        // alert(img.width + 'x' + img.height);

        // elem.style.backgroundImage= img
        elem.style.backgroundImage= "url('https://a.trellocdn.com/prgb/dist/images/header-logo-2x.01ef898811a879595cea.png')";
         
        let widthHeadline="100px"
        let heightHeadline="30px"

        elem.style.width=widthHeadline
        elem.style.height=heightHeadline 
        elem.style.backgroundSize=`${widthHeadline} ${heightHeadline}`
 
        // elem.style.borderStyle="dashed";
        // elem.style.borderColor="brown";
        // elem.style.borderWidth="6px"; 
    }
}
export {HeaderStyler}
