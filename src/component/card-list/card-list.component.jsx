import React from 'react'
import {Card} from '../card/card.component'
import style from './card-list.module.css'

export const CardList = props => {
    return (
        <div className={style.cardlist}>
        {
            props.users.map(user => (
                <Card key={user.id} user={user}/>
            ))
        }
        </div>
    )
}