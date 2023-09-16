import {Card, CardContent, CardMedia, Typography} from "@mui/material";

interface Card2Props {
    data: {
        image: string,
        title: string,
        subtitle: string
    }
}

const Card2 = (props: Card2Props) => {
    const {data} = props;
    const {image, title, subtitle} = data;
    const product = "https://www.aesop.com/u1nb1km7t5q7/6fS7KvwhtoYYrcc6zwJilY/4e2cb9b2e23b98648aae11ae7d0fa4e0/Aesop_Fragrance_Ouranon_Eau_de_Parfum_50mL_Web_Front_Large_900x878px.png"
    return (
        <Card sx={{width: "fit-content", boxShadow: "none", border: 0, cursor:"pointer"}}>
            <CardMedia component={"img"} src={image} sx={{width: "405px"}}/>
            <CardContent sx={{textAlign: "center",  p: 0}}>
                <Typography fontSize={"15px"} lineHeight={"26px"} fontWeight={500}>{title}</Typography>
                <Typography fontSize={"13px"}>{subtitle}</Typography>
            </CardContent>
        </Card>
    );
};

export default Card2;
