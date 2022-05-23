import  Box  from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import { useState, useEffect } from 'react'
import { API } from '../../Services/API'
import { Buttons } from '../Buttons/Buttons'


export const Inputs = () =>{
    const [category, setCategory] = useState('')
    const [term, setTerm] = useState('')
    const [listCategory, setListCategory] = useState(null)
    const [joke, setJoke] = useState('')


    const changeCategory = (event) => {
      setCategory(event.target.value)
    }

    const changeTerm = (event) => {
      setTerm(event.target.value)
    }


    useEffect(()=>{
        (async () => {
            const categories = await API("categories")
            setListCategory(categories)
        })()
    },[])

    
      
    if(listCategory ===null) return(<></>)
    return(
    <>  
        <div style={{display: 'flex', justifyContent: 'space-between', width: 500}}>
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
            >
            <TextField onChange={changeTerm} id="standard-basic" label="Search" variant="standard" />
        </Box>
        <FormControl variant="standard" sx={{ m: 1, minWidth: '25ch' }}>
            <InputLabel id="demo-simple-select-standard-label">Category</InputLabel>
            <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={category}
                onChange={changeCategory}
                label="category"
                >
                <MenuItem value="">
                    <em>any</em>
                </MenuItem>
                    {listCategory.map((category)=> <MenuItem value={category}><em>{category}</em></MenuItem>)}
            </Select>
        <Buttons term={term} category={category}/>
        </FormControl>
        </div>


    </>
    )
}


