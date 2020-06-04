import React, { useState, useEffect } from 'react'
import LazyHero from 'react-lazy-hero'
import Navbar from './Navbar'
import 'bulma'

import axios from 'axios'
// import { Link } from 'react-router-dom'

import AboutStats from './AboutStats' 

export default function About() {

  const [article, setArticle] = useState('')

  
  useEffect(() => {
    axios.get('https://api.nhs.uk/conditions/coronavirus-covid-19?url=bookdoctorsappointments.com&modules=false')
      .then(res => setArticle(res.data))
  }, []) 
    
  
  console.log(article)

  return (
    <div>
      <Navbar />
      <LazyHero
        imageSrc="https://i.imgur.com/LcwSFCg.jpg" 
        parallaxOffset={100} 
        opacity={0.6}
        minHeight={'140vh'}
        style={{ overflow: 'hidden' }}>
        <h1 className='title'>Stay Home | Save Lives</h1>
        <p className='content'>Find out more on how to keep yourself and your family safe</p>
      </LazyHero>

      <div className="tile is-ancestor">
        <div className="tile is-vertical is-8">
          <div className="tile">
            <div className="tile is-parent is-vertical">

              <article className="tile is-child notification">
                <p className="title">Coronavirus Explained</p>
                <p className="subtitle">{article.headline}</p>
                <p className="subtitle">{article.text}</p>

                <p>
                  {article.itemListElement && article.itemListElement.map((info, i)=> {
                    return <p key={i}>{info.name}</p> 
                  }
                  )}
                </p>

                <p>
                  {article.hasPart && article.hasPart.map((info, i)=> {
                    return <p key={i}>{info.description}</p> 
                  }
                  )}
                </p>

                {/* <figure className="image is-4by3">
                  <img src="https://i.imgur.com/6WnBISG.jpg" />
                </figure> */}

              </article>


              <article className="tile is-child notification">
                <p className="subtitle">Can I Get Tested for Coronavirus? Testing and tracing</p>
                <p className="subtitle">Self-isolation and treatment if you have symptoms</p>
                <p className="subtitle">GOV.UK: coronavirus advice for traveller- should I tell my GP Im going away?</p>
                <p className="subtitle">GOV.UK: coronavirus action plan</p>
                <p className="subtitle">Government information and advice</p>
                <p className="subtitle">People at higher risk</p>
                <p className="subtitle">How to check if your child has symptoms</p>
                <p className="subtitle">Social distancing and changes to everyday lif</p>
                {/* new block for doctors? */}
                <p className="subtitle">Information For Health Professionals</p>
     
                {/* <p>{article.mainEntityOfPage[0].mainEntityOfPage.text && article.mainEntityOfPage[0].mainEntityOfPage.text}</p> */}
                
                {/* <p>{article.mainEntityOfpage && article.mainEntityOfPage[0].mainEntityOfPage[0].text}</p> */}

                {/* <p>
                  {article.mainEntityOfpage && article.mainEntityOfPage[0].mainEntityOfPage.map((info, i)=> {
                    return <p key={i}>{info.text}</p>
                  }
                  )}
                </p> */}

                {/* <p>
                  {article.mainEntityOfPage[1] && article.mainEntityOfPage[1].map((info, i)=> {
                    return <p key={i}>{info.text}</p> 
                  }
                  )}
                </p> */}

                <p className="subtitle">Where can I find more information?</p>
                <p className="subtitle">{article.description}</p>
                <p>For more information, please check out our</p><a href={article.url} target="_blank" rel="noreferrer">NHS Resources here</a>
              </article>
            </div>

            <div className="tile is-parent">
              <article className="tile is-child notification">
                <p className="title">
                  The Importance of Selfcare
                </p>
                <div className="content">
                  <p className="subtitle"> {article.hasPart && article.hasPart[3].text.replace(/<[^>]*>/g, ' ')}</p>
                  <p className="subtitle"> <a href={article.hasPart && article.hasPart[3].url} target="_blank" rel="noreferrer">Find out more on Selfcare</a></p>
                </div>

                <figure className="image is-4by7">
                  <img src="https://i.imgur.com/KbkSHZJ.jpg" />
                </figure>
              </article>
            </div>
          </div>
         
          <div className="tile is-parent">
            <article className="tile is-child notification">
              <p className="title">Symptoms</p>

              {/* //trying to access the second haspart object */}
              <div className="content">
              
                {/* <p className="subtitle">{article.hasPart && article.hasPart[1].description}</p> */}
                <p className="subtitle">{article.hasPart && article.hasPart[1].text.replace(/<[^>]*>/g, ' ')}</p>
                
                <p><a href={article.hasPart && article.hasPart[1].url} target="_blank" rel="noreferrer">More info here</a></p>
              </div>
             
              {/* <figure className="image is-4by3">
                <img src="https://i.imgur.com/aOroNmZ.jpg" />
              </figure> */}
    
            </article>
          </div>
        </div>
        <div className="tile is-parent">
          <article className="tile is-child notification">
            <div className="content">
              
              <p className="title">
                  Live UK Stats</p>

              <AboutStats />
                
        
              <div className="content">
        
                {/* full article works more information on covid: */}
                {/* <p>
                  {article.hasPart && article.hasPart.map((info, i)=> {
                    return <p key={i}>{info.text.replace(/<[^>]*>/g, '')}</p> 
                  }
                  )}
                </p> */}
               
                         
                <p className="title">Prevention</p>
                <p className="subtitle"> {article.hasPart && article.hasPart[5].description.replace(/<[^>]*>/g, ' ')}</p>
                <p className="subtitle"> {article.hasPart && article.hasPart[5].text.replace(/<[^>]*>/g, ' ')}</p>
                <p>NHS guidelines for more information, on prevention </p><a href={article.hasPart && article.hasPart[5].url} target="_blank" rel="noreferrer">here</a>

                <p className="title">Treatments</p>
                <p className="subtitle"> {article.hasPart && article.hasPart[4].text.replace(/<[^>]*>/g, ' ')}</p>

              </div>
            </div>
          </article>
        </div>
      </div>

    </div>
  )
}



// export default About 