import { Link as RouterLink} from "react-router-dom";
import {Card, CardMedia, CardContent, Typography, CardActions, Button} from "@mui/material";

interface Props {
    id: number
    title: string;
    popularity: number;
    overview: string;
    image?: string;
}

function MovieCard({ id, title, overview, popularity, image = "/movie-thumb.png" }: Props) {
    return (
        <Card sx={{height: "100%", display: "flex", flexDirection: "column"}}>
            <CardMedia component="div" image={image} sx={{pt: "56.25%"}}/>
            <CardContent sx={{flexGrow: 1}}>
                <Typography variant="h5" gutterBottom>
                    {/* <Link to={`/movies/${id}`}>{title}</Link> */}
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">{overview}</Typography>
                <Typography variant="button" display="block" mt={2}>{popularity}</Typography>
            </CardContent>
            <CardActions>
                <Button component={RouterLink} to={`/movies/${id}`} color="secondary">Details</Button>
            </CardActions>
        </Card>
    );
}

export default MovieCard;