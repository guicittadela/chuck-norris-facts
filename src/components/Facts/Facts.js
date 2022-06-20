
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";


export const Facts = ({value, search}) =>{
    
    return(
    <>
        <Card sx={{ maxWidth: '100%', height: 200 }} >
            <CardContent>
                <Typography style={{textAlign: 'center'}} variant="body2" color="text.secondary">
                    {value}
                </Typography>
            </CardContent>

        </Card>
    </>)
}