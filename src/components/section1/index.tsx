import {Stack, SxProps, Theme} from "@mui/material";
import Card1, {Card1Props} from "@/src/components/cards/card1";
import Logo from "@/src/components/logo";

const Section1 = () => {

    return (
        <>
            <Stack sx={section1Sx}>
                <Logo/>
                <Card1 {...card1Props}
                       ButtonProps={{
                           sx: {
                               justifyContent: "space-between",
                               width: {md: "70%", sm:"80%"},
                           }
                       }}
                />
            </Stack>
            <Card1 {...card1Props} sx={{
                backgroundColor: "#5b3e45",
                borderRadius: 0,
                color: "white",
                padding: "48px 11px",
                display: {
                    sm: "none",
                    xs: "block",
                },
            }}
                   ButtonProps={{
                       fullWidth: true,
                       sx: {
                           justifyContent: "space-between",
                           color: "white",
                           borderColor: "white",
                           '&:hover': {
                               color: "black",
                               backgroundColor: "white",
                           }
                       }
                   }}
            />
        </>
    );
};

export default Section1;


const imageUrl_1 = "https://www.aesop.com/u1nb1km7t5q7/7sjMNyKzg6RFoPJmdenXJX/ad079301081ab714abf661664e4002c2/Aesop_Othertopias_2023_Web_Homepage_2_Primary_Full_Bleed_Desktop_XL_5120x1856px.jpg"
const imageUrl_2 = "https://www.aesop.com/u1nb1km7t5q7/7qdOZ7s2XJJm3sL2FEBeKv/cd503de8dc71b8db55b5c7bdb52dc6cd/Aesop_Othertopias_2023_Web_Homepage_2_Primary_Full_Bleed_Tablet_1536x1230px.jpg"
const imageUrl_3 = "https://www.aesop.com/u1nb1km7t5q7/3ccjmGNC3QwjozFGV7GzLK/d69c356836131d70e0b6900ac3b20beb/Aesop_Othertopias_2023_Web_Homepage_2_Primary_Full_Bleed_Mobile_640x640px.jpg"
const card1Props: Card1Props = {
    data: {
        heading: "Doorways to the undiscovered",
        title: "Othertopias: a collection of unorthodox fragrances",
        subtitle: "Step inside six fragrant worlds that transcend our immediate perception-vivid and distinctive.",
        button: "Discover the fragrances",
    },
    sx: {
        color: "white",
        pt: {md: 0, sm: "90px"},
        width: {
            lg: "40%",
            md: "45%",
            sm: "65%",
            xl: "31%",
        },
        display: {
            sm: "block",
            xs: "none",
        },
    }
}
const section1Sx: SxProps<Theme> = () => {
    return {
        backgroundImage: {lg: `url(${imageUrl_1})`, sm: `url(${imageUrl_2})`, xs: `url(${imageUrl_3})`},
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "bottom center",
        backgroundOrigin: "border-box",
        flexDirection: {md: "row", sm: "column"},
        pt: {md: "110px", xs: "20px"},
        pb: {sm: "180px", xs: "70%"},
        px: 5,
        gap: {lg: "8%", md: "4%", sm: "2%"}
    }
}