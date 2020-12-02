import React from 'react';
import style from './seacrh-box.module.css';

export const SearchBox = ({placeholder, onChange}) => (
    <input
        className={style.search}
        type="search"
        placeholder={placeholder}
        onChange={onChange}
    />
)