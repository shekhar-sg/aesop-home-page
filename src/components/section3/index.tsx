import {Box, Stack} from "@mui/material";
import Card1 from "@/src/components/cards/card1";

const Section3 = () => {
    return (
        <Stack
            sx={{
                paddingTop: {lg: "150px", md: "100px", xs: "80px"},
                flexDirection: {lg: "row", sm: "column"},
                justifyContent: {xl: "space-between", lg: "space-between", md: "center"},
                gap: {md: 8, xs: 5}
            }}>
            <Card1 data={card_1_Data}
                   sx={{
                       paddingLeft: {lg: "80px", sm: "12%", xs: "20px"},
                       paddingRight: {lg: "80px", sm: "12%", xs: "20px"},
                       width: {lg: "40%", md: "80%"},
                       // paddingLeft: {md: "80px", sm: "12%", xs: "20px"},
                       // paddingRight: {md: 0, sm: "12%", xs: "20px"},
                       color: "black"
                   }}
                   CardHeaderProps={{
                       subheaderTypographyProps: {
                           fontSize: "20px",
                           lineHeight: "32px",
                           fontWeight: "500",
                           marginBottom: "10px"
                       }
                   }}
                   ButtonProps={{
                       sx: {
                           width: {lg: "100%", md: "60%", sm: "70%", xs: "100%"},
                           justifyContent: "space-between",
                           color: "black",
                           borderColor: "lightgray",
                           '&:hover': {
                               color: "white",
                               backgroundColor: "black",
                           }
                       }
                   }}/>
            <Box sx={{alignSelf: "end", width: {lg: "60%", xs: "90%"}}}>
                <img src={picture_1} alt={""} width={"100%"} height={"auto"}/>
            </Box>
        </Stack>
    );
};

export default Section3;

const card_1_Data = {
    heading: "Parsley Seed Skin Care",
    title: "In warm or humid urban settings, skin is vulnerable to a range of environmental factors.",
    subtitle: "Pollution, air-conditioning and the stresses of city life can heighten skin’s susceptibility to free radical damage and dehydration. Anti-oxidant rich Parsley Seed formulations help to support skin against these effects.",
    button: "Regimens for warm climates",
    responsiveWidth: {
        xl: "30%",
        lg: "40%",
        md: "700%",
    }
}
const picture_1 = "https://www.aesop.com/u1nb1km7t5q7/7tPk6zFo84MiOR6dy8WNAg/1f71197de94be5fb07cbd03365132775/Aesop-Parsley-Seed-Performance-Campaign-2020-Hybris-Homepage-Secondary-1-Mid-Desktop-1690x1185px.jpg"
const picture_2 = "https://www.aesop.com/u1nb1km7t5q7/6Xievk7zuv03JAEOiubKzJ/c2732392c094a3909c3518ac09873214/Aesop-Parsley-Seed-Performance-Campaign-2020-Hybris-Homepage-Secondary-1-Mid-Mobile-600x468px.jpg"

