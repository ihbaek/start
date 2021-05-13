import React from 'react'
import Item from './Item.jsx'

const List = ({data, loading}) => {
    let dataList = <div>Loading...</div>;

    if(!loading) dataList = data.map( (list) => <Item key="list.market" />)

    return (
        <ul>{dataList}</ul>
    )
}

export default List