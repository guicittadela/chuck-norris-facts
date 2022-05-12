export const API = async (url) =>{
    try{
        const response = await fetch(`https://api.chucknorris.io/jokes/${url}`)
        const result = await response.json()
        return result

    }catch(erro){
        console.error(erro.message)
    }
}