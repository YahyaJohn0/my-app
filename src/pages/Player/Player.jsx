import { useEffect, useState } from 'react';
import backArrow from '../../assets/back_arrow_icon.png'
import './Player.css'
import { useNavigate, useParams } from 'react-router-dom';

const Player = () => {
    const navigate = useNavigate();  // Updated name
    const [apiData, setApiData] = useState({
        name: '',
        key: '',
        type: '',
        published_at: ''
    });

    const { id } = useParams();

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNzQyOTc1M2E0MGI2NjQ0YTZmMmYxNTg2NjhkMzAyMyIsIm5iZiI6MTcyNzgwNjEwNy4yNzg3OSwic3ViIjoiNjZmYzM0ZTliZThhZDE4N2Q1YTY5NDY5Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.oC-WD-HkK_Tc_Www_kaSQarIvA54oHwx0rnIny1zv7I'
        }
    };

    useEffect(() => {
       
        fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
            .then(response => response.json())
            .then(response => {
                if (response.results && response.results.length > 0) {
                    setApiData(response.results[0]);  // Check if results exist
                }
            })
            .catch(err => console.error(err));
    }); 

    return (
        <div className='player'>
            <img src={backArrow} alt="Back" onClick={() => { navigate(-1)}} />

            {apiData.key && (
                <iframe width='90%' height='90%' title='song' src={`https://www.youtube.com/embed/${apiData.key}`} allowFullScreen></iframe>
            )}
            <div className="player-info">
                <p>{apiData.published_at}</p>
                <p>{apiData.name}</p>
                <p>{apiData.type}</p>
            </div>
        </div>
    );
}

export default Player;
