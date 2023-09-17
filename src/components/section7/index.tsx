import {Stack, Typography} from "@mui/material";
import Card1 from "@/src/components/cards/card1";

const Section7 = () => {
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
    return (
        <>
            <Stack sx={{
                padding: "150px 80px 0 0",
                flexDirection: "row",
                justifyContent: "space-between"
            }}>
                <img src={imageUrl} alt={"imageUrl"} style={{width: "60%",height:"auto", objectFit: "cover"}}/>
                <Card1 data={card_1_data}/>
            </Stack>
            <Stack sx={{justifyContent: "center", alignItems:"center", gap: 3,height:"500px"}}>
                <Typography variant={"h4"}>‘Nothing is ever ended, everything only begun.’</Typography>
                <Typography variant={"body1"}>Sara Teasdale</Typography>
            </Stack>
        </>
    );
};

export default Section7;
