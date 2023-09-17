import {Box, Stack} from "@mui/material";
import Card1 from "@/src/components/cards/card1";

const Section3 = () => {
    const card_1_Data = {
        heading: "Parsley Seed Skin Care",
        title: "In warm or humid urban settings, skin is vulnerable to a range of environmental factors.",
        subtitle: "Pollution, air-conditioning and the stresses of city life can heighten skin’s susceptibility to free radical damage and dehydration. Anti-oxidant rich Parsley Seed formulations help to support skin against these effects.",
        button: "Regimens for warm climates",
        color: "black",
        hoverColor: "white",
        font: "16px",
        width: "30%",
        margin:"36px",
        responsiveWidth: {
            xl: "30%",
            lg: "40%",
            md: "700%",
        }
    }
    const picture = "https://www.aesop.com/u1nb1km7t5q7/7tPk6zFo84MiOR6dy8WNAg/1f71197de94be5fb07cbd03365132775/Aesop-Parsley-Seed-Performance-Campaign-2020-Hybris-Homepage-Secondary-1-Mid-Desktop-1690x1185px.jpg"
    return (
        <Stack
            sx={{paddingTop: "150px", flexDirection: {xl: "row", lg: "row", md: "column"}, justifyContent: {xl: "space-between", lg: "space-between", md: "center"}, marginLeft: "80px", gap: {md: 4}}}>
            <Card1 data={card_1_Data}/>
            <Box sx={{width:{xl:"60%", md:"100%"}}}>
                <img src={picture} alt={""} width={"100%"} height={"auto"}/>
            </Box>
        </Stack>
    );
};

export default Section3;
