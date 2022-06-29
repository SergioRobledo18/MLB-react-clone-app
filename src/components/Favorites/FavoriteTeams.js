import React, {useState} from "react";
import Backdrop from "./Backdrop";
import classes from "./FavoriteTeams.module.css";

const FavoriteTeams= props=>{

    const [currentFavorites, setCurrentFavorites]= useState([]);

    const [favoriteTeamMenu, setFavoriteTeamMenu]= useState('');

    const placeFavoriteMenu=()=>{
        setFavoriteTeamMenu(true);
        document.body.style.overflow = "hidden";
    }

    const removeFavoriteMenu=()=>{
        setFavoriteTeamMenu(false);
        document.body.style.overflow = "scroll";
    }
    
    const updateCurrentFavorites=(object)=>{
        setCurrentFavorites(previousFavorites=>{
            const updatedFavorites=[...previousFavorites];
            updatedFavorites.unshift({
                id: object.id, 
                favorite: object.favorite, 
                location: object.location,
                name: object.name,
                logo: object.logo
            });
            return updatedFavorites;
        })
    }

    const removeFromFavorites=(object)=>{
        setCurrentFavorites(previousFavorites=>{
            const updateFavorites = previousFavorites.filter(team => team.id !== object);
            return updateFavorites;
        });
    }
     


    return(
        <React.Fragment>
            {favoriteTeamMenu && <Backdrop favoriteTeamList= {currentFavorites} onConfirm={removeFavoriteMenu} onUpdate={updateCurrentFavorites} onRemove={removeFromFavorites}/>}
            <div className={classes.teamImagesContainer}>
                
                {currentFavorites.map((team)=>(
                    <div className={classes.teamImages} id={team.id}> 
                        <img
                            src={require(`../../images/logos/${team.logo}`)}
                            alt={team.teamName}
                        ></img>
                    </div>
                ))}
            </div>
            <div className={classes.buttonContainer}>
                <button type="button" onClick={placeFavoriteMenu} className={classes.buttonContainerButton}>
                    <img src={require('../../images/gear.png')} alt="gear svg"></img>
                </button>
                <span>Edit Teams & Players</span>
            </div>
        </React.Fragment>
    )
}

export default FavoriteTeams;