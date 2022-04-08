import React from 'react'
import ContentLoader from 'react-content-loader'

const Preloader = () => (
    <ContentLoader
        height="700"
        width="400"
        viewBox="0 0 380 650"
        backgroundColor="#5BD6A4"
        foregroundColor="#cee3db"
    >
        <rect x="15" y="15" rx="4" ry="4" width="350" height="40" />
        <rect x="15" y="65" rx="4" ry="4" width="350" height="40" />
        <rect x="15" y="115" rx="2" ry="2" width="350" height="500" />
    </ContentLoader>
)

export default Preloader