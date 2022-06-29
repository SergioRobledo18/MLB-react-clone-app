import React from 'react';
import classes from './Navbar.module.css'
import NavbarItem from './NavbarItem';

const Navbar = props =>{

    const navTitlesLeft=[
        {
            id: "News",
            text:"News",
            subContents:["Probable Pitchers", "Prospect Rankings", "Great Stories", "Pipeline"]
        },
        {
            id:"Watch",
            text:"Watch",
            subContents:["Film Room Search", "Watch Live Games", "MLB Network", "Podcasts"]
        },
        {
            id:"Scores",
            text:"Scores",
            subContents:[]
        },
        {
            id:"Schedule", 
            text:"Schedule", 
            subContents:["2022 Regular Season Schedule", "Important Dates", "Team by Team Schedule","National Broadcasts"]
        },
        {
            id:"Stats",
            text:"Stats",
            subContents:["Regular Season Stats", "Spring Training Stats", "Postseason stats", "Statcast Leaders"]
        },
        {
            id:"Standings",
            text:"Standings",
            subContents:["2022 Regular Season Standings", "2022 Spring Training Stats", "2021 Regular Season Standings", "2021 Spring Training Stats"]
        }, 
        {
            id:"Youth",
            text:"Youth", 
            subContents:["Play Ball", "Youth Baseball and Softball"]
        },
        {
            id: "Players",
            text: "Players",
            subContents:["Prospect Rankings", "Depth Charts", "Negro Leagues"]
        }
    ]

    const navTitlesRight=[
        {
            id:"Tickets",
            text:"Tickets",
            subContents: []
        },
        {
            id:"Shop",
            text:"Shop", 
            subContents:["Auction", "Authentication", "Autograph", "Jersey"]
        },
        {
            id:"Team",
            text:"Team", 
            subContents:["AL East", "AL Center", "AL West", "NL East", "NL Center", "NL West"]
        },
        {
            id:"ES",
            text:"ES",
            subContents:[]
        },
        {
            id:"Search",
            text:"Search",
            subContents:[]
        }, 
        {
            id:"Account",
            text:"Account",
            subContents:["Account Settings", "My Teams", "Manage Subscriptions", "Email Newsletter", "Logout"]
        }
    ]
    
    return (
        <div className={classes.body}>
            <div className={classes.leftNavbar}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128.15 72"><path fill="#fff" d="M117.44 0H10.68a10.76 10.76 0 0 0-7.57 3.08A10.64 10.64 0 0 0 0 10.7v47.64a10.56 10.56 0 0 0 3.1 7.59 10.69 10.69 0 0 0 7.58 3.13h106.76a10.71 10.71 0 0 0 10.66-10.72V10.69A10.61 10.61 0 0 0 117.44 0z"/><path fill="#bf0d3e" d="M124.35 10.69a6.86 6.86 0 0 0-6.91-6.94H87.6l17.12 28.61 1.58.2 1 1.31v1.22l1.08.22 1 1.36v1.18l1.12.2 1.13 1.23V42a18.54 18.54 0 0 0 4.5 3c1.51.58 1.68 3 2.59 4.29 1.14 1.88 2.7 2.63 2.37 3.68-.76 2.81-3.64 7.55-6.32 7.77h-10.6v4.54h13.28a6.94 6.94 0 0 0 6.91-7V10.69"/><path fill="#041e42" d="M51.35 60.81h-5.13c0-12.82 4.33-19.91 9.52-21.32.71-.13.37-3.63-.53-4.7h-3c-.48 0-.2-.9-.2-.9l2.43-5.19-.33-1.42h-8.98l7.38-5.16c.34-13.61 14.3-14.67 22.71-9 5 3.31 5.38 9.87 5 14.4-.06.29-1.3.1-1.3.1s-.85 5 1.37 5h9.81c4-.16 7.86 2.55 7.86 2.55l.94-3.43L77.41 3.75H10.68a7 7 0 0 0-4.94 2 6.93 6.93 0 0 0-2 4.94v47.65a6.84 6.84 0 0 0 2 4.92 7 7 0 0 0 4.94 2.05H54c-1.06-1.82-2.27-3.89-2.64-4.5"/><path fill="#fff" d="M13.36 50.7a4.74 4.74 0 1 1 4.7 4.74 4.69 4.69 0 0 1-4.7-4.74M127.18 69.68c0-.54-.32-.61-.78-.61h-1v2h.42v-.79h.34l.46.79h.47l-.48-.79a.52.52 0 0 0 .53-.59m-.77.23h-.56v-.49h.46c.2 0 .45 0 .45.22s-.12.27-.35.27"/><path fill="#fff" d="M126.23 68.15a1.92 1.92 0 1 0 1.92 1.93 1.9 1.9 0 0 0-1.92-1.93m0 3.43a1.5 1.5 0 0 1 0-3 1.5 1.5 0 0 1 0 3"/></svg>
            </div>
            <div className={classes.centerNavbar}>{/* Left buttons will go here  */}

                {/* Mapping the array at the top such that we can create a navItem for each one*/}
                {navTitlesLeft.map((title)=>(
                    <NavbarItem key={title.id} text={title.text} subContents={title.subContents} side="left"></NavbarItem>

                ))}
            </div>
            <div className={classes.rightNavbar}>{/* Right buttons will go here */}
                {/* Mapping the array at the top such that we can create a navItem for each one*/}
                {navTitlesRight.map((title)=>(
                    <NavbarItem key={title.id} text={title.text} subContents={title.subContents} side="right"></NavbarItem>

                ))}
            </div>
        </div>
    )
};

export default Navbar;