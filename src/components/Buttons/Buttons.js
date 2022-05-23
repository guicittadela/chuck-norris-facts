import { Facts } from '../Facts/Facts'
import Button from '@mui/material/Button'
import { useState, useEffect } from 'react'
import { API } from '../../Services/API'




export const Buttons = ({term, category}) => {
    const [joke, setJoke] = useState('')

    const handleClick = (searchClick, categoryClick) => {
        {   
            let url = BuildUrl(categoryClick, searchClick);
            console.log(url);
            if(url === "random") {
                API(url).then(result => {
                    setJoke(result.value)
                })
                return
            };
            if(categoryClick !== '' && searchClick === ''){
                API(url).then(result => {
                    console.log(result);
                    setJoke(result.value)
                })
                return
            }
            (async () => {
                const jokeObject = await API(url)
                console.log(jokeObject.value);
                let jokes = []
                jokeObject.result.map((object)=>{
                    {   
                        if(categoryClick !== ''){
                            if(object.categories.length > 0 && object.categories[0] === categoryClick){
                                jokes.push(object.value)
                        }

                    }else{
                        jokes.push(object.value)
                    }
                    
                    }
        
                })
                if(jokes.length > 0){
                    setJoke(jokes[Math.floor(Math.random() * jokes.length)])
                }else{
                    setJoke('No jokes found with this term/category!')
                }

            })()
        }
    
      }
    
    return(
        <>
            <Facts value={joke}/>
            <Button 
            style={{width: 250, height: 50}} 
            variant="contained" 
            color="success" 
            onClick={()=>{
                handleClick(term, category)
                }}>
                Get a new random fact!
            </Button>
        </>
    )
}

const BuildUrl = (category, search) => {
    let url = 'random';
    if(category !== ''){
        url = `random?category=${category}`
    }
    if(search !== ''){
        url = `search?query=${search}`
    }
    return url
}
