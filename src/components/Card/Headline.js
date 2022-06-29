import React from "react";
import classes from "./Headline.module.css";

const Headline = (props) => {
    const isAdd = props.isAd;

    //if our article is just an ad then isAd will be true and therefore we wont have a headline or text

    if (isAdd) {

        return (
            <React.Fragment>
                <div className={classes.cardBody}>
                    <div className={classes.adImageHolder}>
                        <img
                            //injecting because we know the path, all we need is the name of the file
                            src={require(`../../images/${props.address}`)}
                            alt={props.altText}
                        ></img>
                    </div>
                </div>
            </React.Fragment>
        );
    }
    return (
        <React.Fragment>
            <div className={classes.cardBody}>
                <div className={classes.imageHolder}>
                    <img
                        src={require(`../../images/${props.address}`)}
                        alt={props.altText}
                    ></img>
                </div>
                <div className={classes.cardText}>
                    <h2>{props.headline}</h2>
                    <p> {props.text}</p>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Headline;
