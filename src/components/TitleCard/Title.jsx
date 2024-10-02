import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import './Title.css'

const Title = () => {

  const [apiData,setApiData] = useState([]);
  
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNzQyOTc1M2E0MGI2NjQ0YTZmMmYxNTg2NjhkMzAyMyIsIm5iZiI6MTcyNzgwNjEwNy4yNzg3OSwic3ViIjoiNjZmYzM0ZTliZThhZDE4N2Q1YTY5NDY5Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.oC-WD-HkK_Tc_Www_kaSQarIvA54oHwx0rnIny1zv7I'
    }
  };
  
 
    useEffect(()=>{
      fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options)
      .then(response => response.json())
      .then(response => setApiData(response.results))
      .catch(err => console.error(err));
    })
  return (
    <div>
        <div className="Cards-title">
            <h2>Popular Movies</h2>
        </div>
        <div className="card-list">
            {apiData.map((data,index)=>{
                return <Link  to={`/Player/${data.id}`} className="cards" key={index}> <img src={`https://image.tmdb.org/t/p/w500`+data.backdrop_path} alt="" />
                <p >{data.original_title}</p>
                </Link>
            })}
        </div>
    </div>
  )
}

export default Title
