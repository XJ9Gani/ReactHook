import React from "react"
export default function List({item}){
    if(item?.length){
    return(
        <>
        <ul>
            {
                item.map((el , i) => (
                     <li key={i}>
                        <span>id:{el?.id || 'id не найдено'}|      </span>
                        <span>   name:{el?.name || 'name не найдено'}|       </span>
                        <span>   sername:{el?.surname || 'surname не найдено'}|     </span>
                     </li>
                    ))
                
            }
        </ul>
        </>
    )}else{
        return(
            <>
            <div>Данных нету</div>
            </>
        )
    }
}