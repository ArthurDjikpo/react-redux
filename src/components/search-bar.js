import React, {useState} from 'react'

const SearchBar = ()=>{
    const [SearchText, SetSearchText] = useState()
    const placeHolder = 'Tapez votre film ....'

    const handleChange = (e) =>{
        SetSearchText(e.target.value)
        console.log(SearchText)
    }
    
    return (
        <div>
            <input
                onChange={handleChange}
                placeholder={placeHolder}
            />
            <p>{SearchText}</p>
        </div>
    )
}

export default SearchBar;