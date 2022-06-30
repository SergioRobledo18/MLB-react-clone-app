import React from "react";
import classes from "./News.module.css";

const News = props =>{

    return (
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