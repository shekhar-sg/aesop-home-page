import {Card, CardContent, CardMedia, CardProps, Typography, TypographyProps} from "@mui/material";

export interface Card2Props extends Omit<CardProps, 'children'>{
    data: {
        image: string,
        title: string,
        subtitle: string
    }
    CardMediaProps?: Omit<CardProps, 'children'>
    SubtitleProps?: Omit<TypographyProps, 'children'>,
}

const Card2 = (props: Card2Props) => {
    const {data,CardMediaProps, SubtitleProps,sx,...restCardProps} = props;
    const {image, title, subtitle} = data;
    // const product = "https://www.aesop.com/u1nb1km7t5q7/6fS7KvwhtoYYrcc6zwJilY/4e2cb9b2e23b98648aae11ae7d0fa4e0/Aesop_Fragrance_Ouranon_Eau_de_Parfum_50mL_Web_Front_Large_900x878px.png"
    return (
        <Card sx={[
            {
                width: "fit-content",
                boxShadow: "none",
                border: 0,
                cursor:"pointer"
            },
            ...(Array.isArray(sx) ? sx : [sx])
            ]}
              {...restCardProps}>
            <CardMedia component={"img"} src={image} sx={{width: "405px",height:"413px !important",objectFit:"contain"}} {...CardMediaProps}/>
            <CardContent sx={{textAlign: "center",  p: 0}}>
                <Typography fontSize={"15px"} lineHeight={"26px"} fontWeight={500} {...SubtitleProps}>{title}</Typography>
                <Typography fontSize={"13px"} {...SubtitleProps} >{subtitle}</Typography>
            </CardContent>
        </Card>
    );
};

export default Card2;
