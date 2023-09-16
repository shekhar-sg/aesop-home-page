import {Button, Card, CardActions, CardContent, CardHeader, Typography} from "@mui/material";
import {East} from "@mui/icons-material";

interface CardProps {
    data: {
        heading: string,
        title: string,
        subtitle: string,
        button: string,
        color?: string,
        hoverColor?:string,
        width?: string,
        font?:string,
        margin?:string
    }
}

const Card1 = (props: CardProps) => {
    const {data} = props;
    const {heading, button, subtitle, title,color,hoverColor, width,font,margin} = data;
    return (
        <>
            <Card sx={{
                background: "transparent",
                boxShadow: "none",
                color: `${color}`,
                width: `${width}`,
                margin: `${margin}`
            }}>
                <CardHeader title={heading}
                            titleTypographyProps={{variant: "subtitle2"}}
                            sx={{py: 0}}/>
                <CardContent>
                    <Typography sx={{fontSize: "30px", marginBottom: "13px", lineHeight: "normal"}}>{title}</Typography>
                    <Typography variant={"subtitle1"} sx={{fontSize:`${font}`}}>{subtitle}</Typography>
                </CardContent>
                <CardActions>
                    <Button variant={"outlined"}
                            sx={{
                                background: "transparent",
                                color: `${color}`,
                                textTransform: "none",
                                fontWeight: "400",
                                border: `1px solid ${color}`,
                                padding: "16px 24px",
                                borderRadius: 0,
                                marginLeft: "8px",

                                "&:hover": {
                                    background: `${color}`,
                                    border: `1px solid ${color}`,
                                    color: `${hoverColor}`
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

export default Card1;
