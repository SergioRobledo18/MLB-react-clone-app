import React, {useState} from 'react';
import classes from './Backdrop.module.css';
import FavoriteTeamManager from './FavoriteTeamManager';
import MoreTeams from './MoreTeams';

const Backdrop = props=>{
    const [displayAddMoreMenu, setMoreMenu]=useState('');
    //automatically true since we always want this to display
    const [displayFavoriteTeamMenu, setFavoriteTeamMenu]= useState(true); 

    const placeMoreTeamsMenu =()=>{
        setFavoriteTeamMenu(false);
        setMoreMenu(true);
    }

    const backToDisplayFavoriteTeamMenu =()=>{
        setFavoriteTeamMenu(true);
        setMoreMenu(false);
    }


    return(
        <React.Fragment>
            <div className={classes.backdrop} onClick={props.onConfirm}></div>
            
            {displayFavoriteTeamMenu && <FavoriteTeamManager onConfirm= {props.onConfirm} onMoreTeamsMenu={placeMoreTeamsMenu} favoriteTeams={props.favoriteTeamList} onRemove= {props.onRemove}></FavoriteTeamManager>}
            {displayAddMoreMenu && <MoreTeams onConfirm= {props.onConfirm} onBack={backToDisplayFavoriteTeamMenu} onUpdateFavorites={props.onUpdate} onRemove= {props.onRemove} favoriteTeams={props.favoriteTeamList}></MoreTeams>}

        </React.Fragment>
    )
};

export default Backdrop;