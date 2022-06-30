import React from 'react';
import classes from './FavoriteTeamManager.module.css'

const FavoriteTeamManager = props =>{

    const slideTeamDiv=(event)=>{
        props.onConfirm();
        props.onRemove(event.id)

    }

    const setFavoriteTeam=(event)=>{
        props.onConfirm();
        props.onSetFavoriteTeam(event);
    }

    return(
        <React.Fragment>

            <div className={classes.modalBody}>
                <div className={classes.cardBodyHeader}>
                    <p>Manage Your Players & Teams</p>
                    <button type="button" onClick={props.onConfirm}> 
                        <img src={require('../../images/x-icon.png')} alt="x png"></img>
                    </button>
                </div>

                <ul className={classes.cardBodyCenter}>
                    <p className={classes.listlabel}>Favorite Team</p>
                    {props.numberOneTeam.length>0 &&
                        <li className={classes.individualTeam} style={{paddingLeft:'30px'}}>
                            
                            <div className={classes.favTeamImageHolder}>
                                <div className={classes.cardBodyImage}>
                                    <img
                                        src={require(`../../images/logos/${props.numberOneTeam[0].logo}`)}
                                        alt="favorite team"
                                    ></img>
                                </div>
                                <div className={classes.starFavTeamImage}>
                                    <img
                                        src={require('../../images/star.png')}
                                        alt="favorite team"
                                    ></img>
                                </div>

                            </div>

                            <div className={classes.teamInfo}>
                                    <div>{props.numberOneTeam[0].location} </div>
                                    <div className={classes.teamName}><p>{props.numberOneTeam[0].name}</p></div>
                            </div>

                        </li>
                    }
                </ul>
                

                <ul className={classes.cardBodyCenter}>
                    <p className={classes.listlabel}>Followed Teams</p>
                    { props.favoriteTeams.length!==0 && 

                        props.favoriteTeams.map((teams)=>(
                            <li className={classes.individualTeam} key={teams.id} id={teams.id}>
                                <div className={classes.cardBodyButton}>
                                    <button onClick={e=>slideTeamDiv({
                                        id:teams.id
                                    })}
                                    > 
                                        <span className={classes.cardBodyButtonText}></span>
                                    </button>
                                </div>

                                <div className={classes.cardBodyImage}>
                                    <img
                                        src={require(`../../images/logos/${teams.logo}`)}
                                        alt="Houston astros"
                                    ></img>

                                </div>

                                <div className={classes.teamInfo}>
                                    <div>{teams.location}</div>
                                    <div className={classes.teamName}><p>{teams.name}</p></div>
                                </div>
                                
                                <button onClick={e=>setFavoriteTeam({
                                    id:teams.id,
                                    location:teams.location,
                                    name:teams.name,
                                    logo:teams.logo
                                })}>Favorite</button>

                            </li>
                        ))
                    
                    }

                </ul>
                <div className={classes.cardBodyListFooter}>
                    <button type="button" onClick={props.onMoreTeamsMenu}> Follow More Players & Teams </button>
                </div>
            </div>
        </React.Fragment>
    )
}

export default FavoriteTeamManager;