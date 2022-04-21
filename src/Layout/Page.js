import React from 'react'

const Page = ({ type, children }) => {
    const containerType = type === 'container-fluid' ? 'container-fluid py-4' : 'container py-4'
    
    return <div className={containerType}> {children} </div>
}

export default Page
