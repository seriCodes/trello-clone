import React from 'react'
import InputBase from '@material-ui/core/InputBase';
import { withStyles } from '@material-ui/core/styles';
const styles = {
    root: {
        // color: 'white',
        //  direction:'RTL',
        //  cursor: 'text',
        width: '15ch',
        // background:'rgba(227, 236, 223, 0.616);',
        // borderRadius:'0.3rem',

        '&.Mui-focused': {
            background:'red', 
            // borderStyle:'groove',
            // borderColor:'black',
            // borderWidth: '2.3px', 
            width: '23ch',
        },
        // '&:focus': {
        //   width: '33ch',
        // },
    },
    rootSearchIcon:{
        color: 'gray',
    },
    search: {
        // position: 'relative',
    paddingRight:'1rem',
    paddingLeft:'1rem',
    // "marginLeft":'0.3rem',
        // background:'rgba(227, 236, 223, 0.616);',
        // borderRadius:'0.3rem',
        color: 'white',
        display: 'flex',
        flexDirection: 'row',
        // paddingTop:'0.3rem',
        
    }  ,
    searchIcon: {
        // padding: theme.spacing(0, 2),
        // height: '100%',
        // position: 'absolute',
        
        pointerEvents: 'none',
        display: 'flex',

        alignItems: 'center',
        // justifyContent: 'center',
      },
      

}


 const SearchBar = (props) => {
    return (
        <div className={props.classes.root +'button-hover search'} >
        <div className={ props.classes.search}> 
        <InputBase
          placeholder="Search…"
          classes={{
            root: props.classes.root,
            // input: props.classes.inputInput,
          }}
          inputProps={{ 'aria-label': 'search' }}
        /> 
        <div className={props.classes.searchIcon}>
        <i class="fa fa-search" aria-hidden="true"></i>
        </div> 
      </div>
 

        </div>
    )
}
export default withStyles(styles)(SearchBar);

