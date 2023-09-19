import {Box, Stack, Typography} from "@mui/material";
import Card1 from "@/src/components/cards/card1";

const Section7 = () => {
    return (
        <>
            <Stack sx={{
                paddingTop: {lg: "150px", md: "100px", xs: "80px"},
                flexDirection: {lg: "row", xs: "column"},
                justifyContent: "space-between",
                gap: 5
            }}>
                <Box sx={{alignSelf: "start", width: {lg: "60%", xs: "90%"}}}>
                    <img src={imageUrl} alt={"imageUrl"} style={{width: "100%", height: "auto", objectFit: "cover"}}/>
                </Box>
                <Card1 data={card_1_data}
                       sx={{
                           paddingLeft: {lg: "80px", sm: "12%", xs: "20px"},
                           paddingRight: {lg: "80px", sm: "80px", xs: "20px"},
                           width: {lg: "40%", md: "70%"},
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
                       }}
                />
            </Stack>
            <Stack
                sx={{
                    width: "70%",
                    mx: "auto",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: 3,
                    height: "500px"
                }}>
                <Typography variant={"h4"} sx={{textAlign: "center"}}>‘Nothing is ever ended, everything only
                    begun.’</Typography>
                <Typography variant={"body1"}>Sara Teasdale</Typography>
            </Stack>
        </>
    );
};

export default Section7;
const imageUrl = "https://www.aesop.com/u1nb1km7t5q7/6a0rFYweQvQusUfEHpowUJ/32611c5a1ea838756fd635261d88d2db/Aesop-Generic-Images-Facial-Appointments-1-Mid-Desktop-2560x1440px.jpg"
const card_1_data = {
    heading: "Facial Appointments",
    title: "Composure for the skin and senses",
    subtitle: "For a well-rounded skin care regimen, Aesop Facial Appointments offer a series of treatments tailored to balance, stimulate and intensely nourish the skin.",
    button: "Learn more",
    color: "black",
    hoverColor: "white",
    width: "32.5%",
    font: "16px",
    margin: "0"
}
