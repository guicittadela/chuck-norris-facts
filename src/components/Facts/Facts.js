
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";


export const Facts = ({value}) =>{

    return(
    <>
        <Card sx={{ maxWidth: 500, minHeight: 150, minWidth: 500 }}>
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    {value}
                </Typography>
            </CardContent>
        </Card>
    </>)
}