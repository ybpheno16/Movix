import React from 'react'
import { useSelector } from 'react-redux'
import './style.scss'

const Genres = ({ data }) => {
    const { genres } = useSelector((state) => state.home)

    return (
        <div className='genres'>
            {/* {console.log(data ? data : "")} */}
            {data?.map((g) => {
                if(!genres[g]?.name) {
                    return;
                }
                return (
                    <div key={g.id} className="genre">
                        {genres[g]?.name}
                    </div>
                )
            })}
        </div>
    )
}

export default Genres