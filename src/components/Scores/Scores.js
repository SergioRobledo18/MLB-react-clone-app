import React from "react";
import classes from "./Scores.module.css";
import { games } from "../../data/games";

const Scores = (props) => {
    //object destructuring, looking at the website, I know im only going to have two days of data
    //so i can perform array destructuring on my mock data
    const [day1, day2] = games;
    return (
        <React.Fragment>
            {/* 
            <div className={classes.gameScoresContainer}>
                <div className={classes.scoreCenterContainer}>

                <div className={classes.dateContainer}>
                            <p>Jun</p>
                            <p>26</p>
                </div>
                    <div className={classes.scoreBoxContainer}>

                        <div className={classes.hoverContent}>

                            <div className={classes.topHoverContent}><p>Hello</p></div>
                            <div className={classes.bottomHoverContent}><p>Hello</p></div>
                        </div>
                        <div className={classes.gameInformation}>
                            <p className={classes.timeOfGame}>8:40 PM ET</p>
                            <div className={classes.teamContainers}>
                                <div className={classes.teamImage}>
                                    <img 
                                        src={require('../../images/logos/angels.png')}
                                        alt='angels logo'
                                    
                                    ></img>

                                </div>
                                <div className={classes.teamName}>
                                    LAA
                                </div>
                                <div className={classes.teamAndGameInfoActive}>
                                    <div className={classes.teamRecord}>35-40</div>
                                    <div className={classes.runsScored}>2 </div>
                                </div>
                            </div>
                            <div className={classes.teamContainers}>
                                <div className={classes.teamImage}>

                                    <img 
                                        src={require('../../images/logos/dodgers.png')}
                                        alt='angels logo'
                                    
                                    ></img>
                                </div>
                                <div className={classes.teamName}>
                                    LAD
                                </div>
                                <div className={classes.teamAndGameInfoNotActive}>

                                    <div className={classes.teamRecordNotActive}>35-40</div>
                                </div>
                           </div> 
                        </div>
                    </div>

                    <div className={classes.dateContainer}>
                    <p>Jun</p>
                    <p>26</p>
                    </div>
                    <div className={classes.scoreBoxContainer}>
                        <p>hello</p>
                    </div>
                    <div className={classes.scoreBoxContainer}>
                        <p>hello</p>
                    </div>
                    <div className={classes.scoreBoxContainer}>
                        <p>hello</p>
                    </div>
                    <div className={classes.scoreBoxContainer}>
                        <p>hello</p>
                    </div>
                    <div className={classes.scoreBoxContainer}>
                        <p>hello</p>
                    </div>

                    <div className={classes.dateContainer}>
                        <p>Jun</p>
                        <p>26</p>
                    </div>
                    <div className={classes.scoreBoxContainer}>
                        <p>hello</p>
                    </div>
                    <div className={classes.scoreBoxContainer}>
                        <p>hello</p>
                    </div>
                    <div className={classes.scoreBoxContainer}>
                        <p>hi</p>
                    </div>
                    <div className={classes.scoreBoxContainer}>
                        <p>hi</p>
                    </div>
                    <div className={classes.scoreBoxContainer}>
                        <p>hi</p>
                    </div>

                    <div className={classes.scoreBoxContainer}>
                        <p>hello</p>
                    </div>
                    <div className={classes.scoreBoxContainer}>
                        <p>hello</p>
                    </div>
                    <div className={classes.scoreBoxContainer}>
                        <p>hi</p>
                    </div>
                    <div className={classes.scoreBoxContainer}>
                        <p>hi</p>
                    </div>
                    <div className={classes.scoreBoxContainer}>
                        <p>hi</p>
                    </div>

                    <div className={classes.scoreBoxContainer}>
                        <p>hello</p>
                    </div>
                    <div className={classes.scoreBoxContainer}>
                        <p>hello</p>
                    </div>
                    <div className={classes.scoreBoxContainer}>
                        <p>hi</p>
                    </div>
                    <div className={classes.scoreBoxContainer}>
                        <p>hi</p>
                    </div>
                    <div className={classes.scoreBoxContainer}>
                        <p>hi</p>
                    </div>
                    

                </div>

                

                <div className={classes.buttonScoreContainer}>


                </div>

            </div> */}

            <div className={classes.gameScoresContainer}>
                <div className={classes.scoreCenterContainer}>
                    <div className={classes.dateContainer}>
                        <p>{day1.id.split(" ")[0]}</p>
                        <p>{day1.id.split(" ")[1]}</p>
                    </div>

                    {/* {day1.games.map((game)=>(
                        <div className={classes.scoreBoxContainer}>
                            <div className={classes.hoverContent}>
                                <div className={classes.topHoverContent}>
                                    <p>Wrap</p>
                                </div>
                                <div className={classes.bottomHoverContent}>
                                    <p>MLB.TV</p>
                                </div>
                            </div>

                            <div className={classes.gameInformation}>
                                <p className={classes.timeOfGame}>{game.innning}</p>
                                <div className={classes.teamContainers}>
                                    <div className={classes.teamImage}>
                                        <img
                                            src={require(`../../images/logos/${game.AwayTeamLogo}`)}
                                            alt={game.altLogoAway}
                                        ></img>
                                    </div>
                                    <div className={classes.teamName}>{game.AwayTeam}</div>
                                    <div className={classes.teamAndGameInfoActive}>
                                        <div className={classes.teamRecord}>
                                            {game.AwayTeamRecord}
                                        </div>
                                        <div className={classes.runsScored}>{game.AwayTeamScore} </div>
                                </div>
                                <div className={classes.teamContainers}>
                                    <div className={classes.teamImage}>
                                        <img
                                            src={require(`../../images/logos/${game.HomeTeamLogo}`)}
                                            alt={game.altLogoAway}
                                        ></img>
                                    </div>
                                    <div className={classes.teamName}>{game.HomeTeam}</div>
                                    <div className={classes.teamAndGameInfoActive}>
                                        <div className={classes.teamRecord}>
                                            {game.HomeTeamRecord}
                                        </div>
                                        <div className={classes.runsScored}>{game.HomeTeamScore} </div>
                                </div>
                            </div>
                            </div>
                            </div>

                        </div>
                        
                    ))}  */}

                    {day1.games.map((game)=>(
                    <div className={classes.scoreBoxContainer}>
                        <div className={classes.hoverContent}>
                            <div className={classes.topHoverContent}>
                                <p>Wrap</p>
                            </div>
                            <div className={classes.bottomHoverContent}>
                                <p>MLB.TV</p>
                            </div>
                        </div>

                        <div className={classes.gameInformation}>
                            <p className={classes.timeOfGame}>{game.innning}</p>
                            <div className={classes.teamContainers}>
                                <div className={classes.teamImage}>
                                    <img
                                        src={require(`../../images/logos/${game.AwayTeamLogo}`)}
                                        alt={game.altLogoAway}
                                    ></img>
                                </div>
                                <div className={classes.teamName}>{game.AwayTeam}</div>
                                <div className={classes.teamAndGameInfoActive}>
                                    <div className={classes.teamRecord}>
                                        {game.AwayTeamRecord}
                                    </div>
                                    <div className={classes.runsScored}>{game.AwayTeamScore} </div>
                                </div>
                            </div>
                            <div className={classes.teamContainers}>
                                <div className={classes.teamImage}>
                                    <img
                                        src={require(`../../images/logos/${game.HomeTeamLogo}`)}
                                        alt={game.altLogoHome}
                                    ></img>
                                </div>
                                <div className={classes.teamName}>{game.HomeTeam}</div>
                                <div className={classes.teamAndGameInfoActive}>
                                    <div className={classes.teamRecord}>
                                        {game.HomeTeamRecord}
                                    </div>
                                    <div className={classes.runsScored}>{game.HomeTeamScore} </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    ))}
                    <div className={classes.dateContainer}>
                        <p>{day2.id.split(" ")[0]}</p>
                        <p>{day2.id.split(" ")[1]}</p>
                    </div>

                    {day2.games.map((game)=>(
                    <div className={classes.scoreBoxContainer}>
                        <div className={classes.hoverContent}>
                            <div className={classes.topHoverContent}>
                                <p>Gameday</p>
                            </div>
                            <div className={classes.bottomHoverContent}>
                                <p>Tickets</p>
                            </div>
                        </div>

                        <div className={classes.gameInformation}>
                            <p className={classes.timeOfGame}>{game.innning}</p>
                            <div className={classes.teamContainers}>
                                <div className={classes.teamImage}>
                                    <img
                                        src={require(`../../images/logos/${game.AwayTeamLogo}`)}
                                        alt={game.altLogoAway}
                                    ></img>
                                </div>
                                <div className={classes.teamName}>{game.AwayTeam}</div>
                                <div className={classes.teamAndGameInfoNotActive}>
                                    <div className={classes.teamRecordNotActive}>
                                        {game.AwayTeamRecord}
                                    </div>
                                    <div className={classes.runsScored}>{game.AwayTeamScore} </div>
                                </div>
                            </div>
                            <div className={classes.teamContainers}>
                                <div className={classes.teamImage}>
                                    <img
                                        src={require(`../../images/logos/${game.HomeTeamLogo}`)}
                                        alt={game.altLogoHome}
                                    ></img>
                                </div>
                                <div className={classes.teamName}>{game.HomeTeam}</div>
                                <div className={classes.teamAndGameInfoNotActive}>
                                    <div className={classes.teamRecordNotActive}>
                                        {game.HomeTeamRecord}
                                    </div>
                                    <div className={classes.runsScored}>{game.HomeTeamScore} </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    ))}
                </div>



            </div>


        </React.Fragment>
    );
};

export default Scores;
