import React from 'react'
import './style.scss'
import ContentWrapper from '../../components/contentWrapper/ContentWrapper'

const PageNotFound = () => {
  return (
    <div>
      <ContentWrapper>
        <div className="not-found-text">
          Page Not Found!!
        </div>
      </ContentWrapper>
    </div>
  )
}

export default PageNotFound