import {Box, Stack} from "@mui/material";
import Card1 from "@/src/components/cards/card1";

const Section4 = () => {
    return (
        <Stack
            sx={{
                paddingTop: {lg: "150px", md: "100px", xs: "80px"},
                flexDirection: {lg: "row", xs: "column"},
                justifyContent: "space-between",
                gap: 5
            }}>
            <Box sx={{width: "90%"}}>
                <video
                    style={{width: "100%"}}
                    autoPlay
                    loop
                    src={video_src}/>
            </Box>
            <Card1 data={card_1_Data}
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
    );
};

export default Section4;

const card_1_Data = {
    heading: "The Athenaeum",
    title: "Decoding fragrance",
    subtitle: "The language of notes, sillage and aromatic profiles allows us to describe perfume. Discover our guide to selecting a signature fragrance.",
    button: "Read more",
}
const video_src = "https://videos.ctfassets.net/u1nb1km7t5q7/1fy7IJOkhkLfiBJNrqqZlL/55ce2547d65d261beb120b441a0ed0df/Aesop_A_Guide_to_Fragrance_Web_Secondary_Mid_01_Rose_Desktop_1920x1080px.mp4"

