import React, { useState } from 'react'
import ContentWrapper from '../contentWrapper/ContentWrapper'
import './style.scss'

const Switch = ({ data, onTabChange }) => {
    const [selectedTab, setSelectedTab] = useState(0)
    const [left, setLeft] = useState(0)

    const activeTab = (tab,index) => {
        setLeft(index*100);
        setTimeout(() => {
            setSelectedTab(index)
        }, 300);
        onTabChange(tab, index)
    }

    return (
        <div className='switchingTabs'>
            {console.log(data)}
            <div className="tabItems">
                {data.map((tab, index) => {
                    return(
                        <span 
                            key={index}
                            className={`tabItem ${selectedTab==index?"active":""}`}
                            onClick={() => activeTab(tab, index)}
                        >
                            {tab}
                        </span>
                    );
                })}
                <span className="movingBg" style={{ left }}/>
            </div>
        </div>
    )
}

export default Switch