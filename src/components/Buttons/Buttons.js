import { Facts } from '../Facts/Facts'
import Button from '@mui/material/Button'



export const Buttons = ({term, category}) => {
    
    
    return(
        <>
            <Facts/>
            <Button style={{width: 250, height: 50}} variant="contained" color="success" onClick={handleClick(term, category)}>
                Get a new random fact!
            </Button>
        </>
    )
}

function handleClick(searchClick, categoryClick){
    {   
        console.log(searchClick, categoryClick)
        /*let url = ''
        if(searchClick === ''){
            if(categoryClick ===''){
                url = 'random'
            }else{
                url = `random?category=${categoryClick}`
            }
        }else{url = `search?query=${searchClick}`}

        console.log(url)
        (async () => {
            
            const joke = await API(url)
            setJoke(joke)
        })()
        let jokes = []
        joke.result.map((object)=>{
            if (object.categories = categoryClick ){
                jokes.push(object.value)
            }

        })
        let index = Math.floor(Math.random() * jokes.length);
        return jokes[index]*/
    }

  }