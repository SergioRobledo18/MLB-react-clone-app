import React from 'react'
import classes from './NavbarItem.module.css'


const NavbarItem = props =>{

    const emptyArray= array =>{

        if(array.length===0){
            return true
        }else return false;
    }

    const leftSide= ()=>{
        if(props.side==="left"){
            return true;
        }else return false;
    }

    return (
        <React.Fragment>
            <div className={classes.NavBarbody}>
                <div>
                    <span>{props.text}</span>
                </div>
               {leftSide() && 
                (!emptyArray(props.subContents)) && 
                    
                    <div className={classes.extraContent}> 
                        <div className={classes.extraContentList}>
                            {props.subContents.map((subcontent)=>(
                                <div className={classes.listItem} >
                                    <p className={classes.subContentItem}>{subcontent}</p>
                                </div>
                            ))}                   
                        </div>
                    </div>
                }

                {!leftSide() && 
                (!emptyArray(props.subContents)) && 
                    
                    <div className={classes.extraContent}> 
                        <div className={classes.extraContentListRight}>
                            {props.subContents.map((subcontent)=>(
                                <div className={classes.listItem}>
                                    <p>{subcontent}</p>
                                </div>
                            ))}                   
                        </div>
                    </div>
                }
            
                   


            </div>

        </React.Fragment>
        
    )

};

export default NavbarItem