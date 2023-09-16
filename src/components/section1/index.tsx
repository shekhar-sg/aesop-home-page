import {Stack} from "@mui/material";
import Image from "next/image";
import AesopLogo from "../../assets/Aesop.png";
import Card1 from "@/src/components/cards/card1";

const Section1 = () => {
    const imageUrl = "https://www.aesop.com/u1nb1km7t5q7/51ATQtZl3wy8KBBgt4MACM/1588c8b4d7e2291b47796d3d42884f1f/Aesop_Othertopias_2023_Web_Homepage_2_Primary_Full_Bleed_Desktop_2880x1044px.jpg"
    const card_1_Data = {
        heading: "Doorways to the undiscovered",
        title: "Othertopias: a collection of unorthodox fragrances",
        subtitle: "Step inside six fragrant worlds that transcend our immediate perception-vivid and distinctive.",
        button: "Discover the fragrances",
        color: "white",
        hoverColor: "black",
        width: "30%",
        margin:"62px 0 152px 0",
    }
    return (
        <Stack sx={{
            backgroundImage: `url(${imageUrl})`,
            backgroundSize: "cover",
            backgroundPositionY: "100%",
            flexDirection: "row",
            height: "fit-content",
            width: "100%",
            padding: "62px 0",
            gap: 13
        }}>
            <Image src={AesopLogo} alt={"logo"} width={150}
                   style={{filter: "invert(100%) brightness(142%)", margin: "32px"}}/>
            <Card1 data={card_1_Data}/>
        </Stack>
    );
};

export default Section1;
