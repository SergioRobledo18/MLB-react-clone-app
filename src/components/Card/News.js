import React from "react";
import classes from "./News.module.css";

const News = props =>{

    return (
        // <React.Fragment>
        //     <div className={classes.container}>
        //         <h2> Latest News</h2>
        //         <div className={classes.grid}>
        //             <div className={classes.gridImage}>

        //                 <img
        //                 src={require('../../images/logos/dodgers.png')}
        //                 alt={props.altText}

        //                 ></img>
        //             </div>
        //             <div className={classes.gridText}><span>
        //                 New leader emerges in latest ROY poll</span></div>

        //         </div>

        //     </div>
        // </React.Fragment>

        <React.Fragment>
            <div className={classes.gridImage}>
                <img
                    src={require(`../../images/logos/${props.address}`)}
                    alt={props.altText}
                ></img>
            </div>
            <div className={classes.gridText}>
                <span>
                    {props.text}
                </span>
            </div>

        </React.Fragment>
    )
}

export default News;