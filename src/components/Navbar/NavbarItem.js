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
            <div className={classes.body}>
                <div>
                    <span>{props.text}</span>
                </div>
                {/*<MoreNavebarItem></MoreNavebarItem>*/}
                {/* <div className={classes.extraContent}> 
                    <div className={classes.extraContentList}>
                        <div className={classes.listItem}>
                            <p>Hello I am sergio robledo</p>
                        </div>
                        <div className={classes.listItem}>
                            <p>Hello</p>
                        </div >
                        <div className={classes.listItem}>
                            <p>Hello</p>
                        </div>
                        <div className={classes.listItem}>
                            <p>Hello</p>
                        </div>
                    </div>
                </div> */}
               {leftSide() && 
                (!emptyArray(props.subContents)) && 
                    
                    <div className={classes.extraContent}> 
                        <div className={classes.extraContentList}>
                            {props.subContents.map((subcontent)=>(
                                <div className={classes.listItem}>
                                    <p>{subcontent}</p>
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