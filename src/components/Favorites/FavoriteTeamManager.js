import React from 'react';
import classes from './FavoriteTeamManager.module.css'

const FavoriteTeamManager = props =>{

    const slideTeamDiv=(event)=>{
        props.onConfirm();
        props.onRemove(event.id)

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
                                    <div>{teams.name} </div>
                                    <div className={classes.teamName}><p>{teams.location}</p></div>
                                </div>


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