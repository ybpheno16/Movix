import React, {useState, useEffect} from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import './style.scss'
import Img from '../../../components/lazyLoadImage/Img'
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper'
import useFetch from '../../../hooks/useFetch' 

const HeroBanner = () => {
  const [background, setBackground] = useState("");
  const [query, setQuery] = useState("");
  const { url } = useSelector((state) => state.home);
  const {data, loading} = useFetch("/movie/upcoming");
  const navigate = useNavigate();

  useEffect(() => {

    const bg = url.backdrop + data?.results[Math.floor(Math.random()*20)]?.backdrop_path;
    console.log(bg);
    setBackground(bg)
  }, [data]);


  const searchQueryHandler = (event) => {
    if(event.key === 'Enter' && query.length > 0) {
      navigate(`/search/${query}`)
    }
  }


  return (
    <div>
      <div className="heroBanner">
        {!loading && <div className="backdrop-img">
          <Img src={background}/>
        </div>}
        
        <div className="opacity-layer">

        </div>

        <ContentWrapper>

        <div className="wrapper">
          <div className="heroBannerContent">
            <span className="title">Welcome</span>

            <span className="subTitle">
              Millions of movies, tv shows and people to
              discover. Explore now.
            </span>

            <div className="searchInput">
              <input 
                type="text"
                placeholder="Search for a movie or tv shows..." 
                onChange={(e) => setQuery(e.target.value)}
                onKeyUp={searchQueryHandler}
              />
              <button>Search</button>
            </div>
          </div>
        </div>
        </ContentWrapper>
      </div>
    </div>
  )
}

export default HeroBanner