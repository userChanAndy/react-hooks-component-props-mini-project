import React from "react"



function Article ({title,date, preview}) {
    return (
    <>
        <h3>{title}</h3>
        <small>{date}</small>
        <p>{preview}</p>
    </>    
    )}

export default Article