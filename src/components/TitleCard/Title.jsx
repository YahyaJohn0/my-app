import React from 'react'
import cards from '../../assets/cards/Cards_data'

import './Title.css'

const Title = () => {
  return (
    <div>
        <div className="Cards-title">
            <h2>Popular Movies</h2>
        </div>
        <div className="card-list">
            {cards.map((data,index)=>{
                return <div className="cards" key={index}> <img src={data.image} alt="" />
                <p >{data.name}</p>
                </div>
            })}
        </div>
    </div>
  )
}

export default Title
