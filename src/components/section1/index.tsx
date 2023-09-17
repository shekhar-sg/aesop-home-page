import {Stack} from "@mui/material";
import Card1, {Card1Props} from "@/src/components/cards/card1";
import Logo from "@/src/components/logo";

const Section1 = () => {

    return (
        <>
            <Stack sx={{
                backgroundImage: {xl: `url(${imageUrl_1})`, sm: `url(${imageUrl_2})`},
                backgroundSize: 'cover',
                backgroundRepeat: "no-repeat",
                backgroundPosition: "bottom center",
                flexDirection: "row",
                pt: "110px",
                pb: "180px",
                px: 5,
                gap: 18
            }}>
                <Logo/>
                <Card1 {...card1Props}/>
            </Stack>
            <Card1 {...card1Props} sx={{
                backgroundColor: "brown",
            }}
                   ButtonProps={{
                       fullWidth: true,
                       sx: {
                           color: "white",
                           borderColor: "white",
                           '&:hover': {
                               color: "brown",
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
const card1Props: Card1Props = {
    data: {
        heading: "Doorways to the undiscovered",
        title: "Othertopias: a collection of unorthodox fragrances",
        subtitle: "Step inside six fragrant worlds that transcend our immediate perception-vivid and distinctive.",
        button: "Discover the fragrances",
    },
    sx: {
        color: "white",
        width: {
            sm: "100%",
            md: "30%",
            xl: "31%",
        },
    }
}