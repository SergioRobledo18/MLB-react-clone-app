import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Headline from './components/Card/Headline';
import News from './components/Card/News';
import FavoriteTeams from './components/Favorites/FavoriteTeams';
import Scores from './components/Scores/Scores';
import {articles} from './data/articles.js';
import {newsOne} from './data/news1.js';

function App() {
  return (
    <React.Fragment>
      <div className='adContainer'></div>
      <Navbar></Navbar>
      <Scores></Scores>
      <div className='mainAppContainer'>
        <div className='leftColumn'> 
          <FavoriteTeams></FavoriteTeams>
        </div>

        <div className='rightColumns'>
          <div className='rightColumnOne'>
            {
              articles.map((contents)=>(
                <Headline 
                    key= {contents.id} isAd={contents.ad} address={contents.address}
                    altText={contents.altText} headline={contents.headline} text={contents.text}
                ></Headline>
              ))
            }
          </div>

          <div className='rightColumnTwo'>

            <div className='latestNewsContainer'>
                <h2> Latest News</h2>
                <div className='grid'>
                  {
                    newsOne.map((news)=>(
                      <News
                        key={news.id} address={news.address} altText={news.altText} text={news.text}
                      ></News>
                    ))
                  }
                </div>
            </div>

          </div>
        
        </div>
      </div>
      <div className='appFooter'>
        <h1>This app is a clone of <a href='https://www.mlb.com/' target={'_blank'} rel="noreferrer"> MLB.com </a></h1> 
      </div>
    </React.Fragment>
  );
}

export default App;
