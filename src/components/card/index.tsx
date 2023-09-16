import {Button, Card, CardActions, CardContent, CardHeader, Typography} from "@mui/material";
import {East} from "@mui/icons-material";

interface CardProps {
    heading: string,
    title: string,
    subtitle: string,
    button: string
}

const CardComponent = (props: CardProps) => {
    const {heading, button, subtitle, title} = props;
    return (
        <>
            <Card sx={{
                background: "transparent",
                boxShadow: "none",
                color: "white",
                width: "30%",
                margin: "62px 0 152px 0"
            }}>
                <CardHeader title={heading}
                            titleTypographyProps={{variant: "subtitle2"}}
                            sx={{py: 0}}/>
                <CardContent>
                    <Typography sx={{fontSize: "30px", marginBottom: "13px", lineHeight: "normal"}}>{title}</Typography>
                    <Typography variant={"subtitle1"}>{subtitle}</Typography>
                </CardContent>
                <CardActions>
                    <Button variant={"outlined"}
                            sx={{
                                background: "transparent",
                                color: "White",
                                textTransform: "none",
                                fontWeight: "400",
                                border: "1px solid white",
                                padding: "16px 24px",
                                borderRadius: 0,

                                "&:hover": {
                                    background: "white",
                                    border: "1px solid white",
                                    color: "Black"
                                }
                            }}>
                        {button}
                        <East sx={{marginLeft: "78px", fontSize: "16px"}}/>
                    </Button>
                </CardActions>
            </Card>
        </>
    );
};

export default CardComponent;
