import {Stack} from "@mui/material";
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
        width: "598px",
    }
    const picture = "https://www.aesop.com/u1nb1km7t5q7/7tPk6zFo84MiOR6dy8WNAg/1f71197de94be5fb07cbd03365132775/Aesop-Parsley-Seed-Performance-Campaign-2020-Hybris-Homepage-Secondary-1-Mid-Desktop-1690x1185px.jpg"
    return (
        <Stack sx={{paddingTop: "150px",flexDirection:"row",justifyContent:"space-between", marginLeft: "80px"}}>
            <Card1 data={card_1_Data}/>
            <img src={picture} alt={""} width={1110} height={775} style={{marginLeft:"auto"}}/>
        </Stack>
    );
};

export default Section3;
