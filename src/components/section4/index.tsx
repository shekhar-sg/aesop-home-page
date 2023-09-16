import {Stack} from "@mui/material";
import Card1 from "@/src/components/cards/card1";

const Section4 = () => {
    const card_1_Data = {
        heading: "The Athenaeum",
        title: "Decoding fragrance",
        subtitle: "The language of notes, sillage and aromatic profiles allows us to describe perfume. Discover our guide to selecting a signature fragrance.",
        button: "Read more",
        color: "black",
        hoverColor: "white",
        width: "30%",
        margin:"80px"
    }
    return (
        <Stack sx={{paddingTop: "150px", flexDirection: "row", justifyContent: "space-between"}}>
            <video
                style={{width: "56%"}}
                autoPlay
                loop
                src={"https://videos.ctfassets.net/u1nb1km7t5q7/1fy7IJOkhkLfiBJNrqqZlL/55ce2547d65d261beb120b441a0ed0df/Aesop_A_Guide_to_Fragrance_Web_Secondary_Mid_01_Rose_Desktop_1920x1080px.mp4"}/>
            <Card1 data={card_1_Data}/>
        </Stack>
    );
};

export default Section4;
