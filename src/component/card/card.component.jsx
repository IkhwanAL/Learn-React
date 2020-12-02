import React from 'react'
import style from './card.module.css'

export const Card = props => {
    return (
        <div className={style.cardcontainer}>
            <img alt={props.user.name} src={`https://robohash.org/${props.user.id}?set=set1`}/>
            <h3>{props.user.username}</h3>
            <small>{props.user.email}</small>
        </div>
    )
}