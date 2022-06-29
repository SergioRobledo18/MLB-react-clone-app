import React, {useState} from 'react';
import classes from './MoreTeams.module.css';
import {teams} from '../../data/teams.js';

const MoreTeams = props =>{

    const [search, setSearch]= useState('')

    const teamSelected=(teamEvent)=>{
        props.onConfirm();
        props.onUpdateFavorites(teamEvent);
    }

    const removeTeamSelected=(teamEvent)=>{
        props.onConfirm();
        props.onRemove(teamEvent.id)
    }

    //returns true if theyre already following that team
    function inFavorites(favoriteID){
        return props.favoriteTeams.some(function(el){
            return el.id === favoriteID;
        })
    }



    return (
        <React.Fragment>

            <div className= {classes.modalBody}>

                <div className={classes.cardBodyHeader}>
                    <div className={classes.buttonBodyHeaderHolder}>
                        <button type="button" onClick={props.onBack}>
                            <img src={require('../../images/back.png')} alt="back png" style={{width:'20%'}}></img>
                        </button>
                    </div>
                    <div className={classes.cardBodyHeaderTextHolder}>
                        <p> Follow More Teams</p>
                    </div>
                    <div className={classes.buttonBodyHeaderHolder}>
                        <button type="button" onClick={props.onConfirm}> 
                            <img src={require('../../images/x-icon.png')} alt="x png" style={{paddingTop:'5px'}}></img>
                        </button>
                    </div>
                    
                </div>
                <div className={classes.search}>
                    <input
                        type="text"
                        placeholder="Search"
                        onChange={event=>setSearch(event.target.value)}
                    />

                </div>
                <div className={classes.allTeamsContent}>
                    {/* Filter the array based on the input, then map the result*/}
                    {
                        teams.filter(team=>{
                            if(search===''){
                                return team;
                            }else if(team.id.toLowerCase().includes(search.toLowerCase())){
                                return team;
                            }else{
                                return false;
                            }
                        }).map((team, index)=>(
                            <div className={classes.individualTeam} key={index}>
                            <div className={classes.teamImage}>
                                <img
                                    className={classes.teamImageTeamLogo} 
                                    src={require(`../../images/logos/${team.logo}`)}
                                    alt={team.name}
                                ></img>

                            </div>
                            <div className={classes.teamInfo}>
                                <div>{team.location} </div>
                                <div className={classes.teamName}><p>{team.name}</p></div>
                            </div>
                            

                            <div className={classes.followButton}>

                                
                                {/* returns true if theyre are already in favorites so now need to call unfollow*/}
                                { inFavorites(team.id) && 
                                    <button
                                        type="button"
                                        onClick= {e=> removeTeamSelected({
                                            id: team.id,
                                        })}
                                    > Unfollow
                                    </button>
                                }
                                
                                {/* returns false if theyre are not in favorites so now need to give option to follow*/}
                                { ! (inFavorites(team.id)) && 
                                    <button
                                        type="button"
                                        onClick= {e=> teamSelected({
                                            id: team.id,
                                            favorite: false,
                                            location: team.location,
                                            name: team.name,
                                            logo: team.logo
                                        })}
                                    > Follow
                                    </button>
                                }
                                    
                                    

                            </div>
                        </div>
                        ))
                    }

                </div>
            </div>
        </React.Fragment>
    )

}

export default MoreTeams;