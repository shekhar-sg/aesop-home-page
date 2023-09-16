import {Swiper, SwiperSlide} from "swiper/react";
import {Scrollbar} from "swiper/modules";
import Card1 from "@/src/components/cards/card1";
import Card2 from "@/src/components/cards/card_2";
import {Box} from "@mui/material";

const Section5 = () => {
    const card_1_Data = {
        heading: "For warm climates",
        title: "Adjusting to seasonal change",
        subtitle: "In the warmer months, high temperatures and humidity can lead to increased sebum production for normal, combination, and oily skins. Accordingly, the use of slightly lighter formulations is recommended.",
        button: "See more",
        color: "black",
        hoverColor: "white",
        width: "435px",
        font: "13.3px",
        margin: "0"
    }
    const products: {
        image: string,
        title: string,
        subtitle: string
    }[] = [
        {
            image: "https://www.aesop.com/u1nb1km7t5q7/4MDDVixhlDFtOpXTyqjdcG/ead865d7568cefb70d74a989715c380b/Aesop-Skin-Immediate-Moisture-Facial-Hydrosol-50mL-Large-782x796px.png",
            title: "Immediate Moisture Facial Hydrosol",
            subtitle: "A refreshing mist hydrator"
        },
        {
            image: "https://www.aesop.com/u1nb1km7t5q7/4Okm4NhHan5ptJ1yApzHUn/04e93e8181d2dff9ff94b3534fc06cc0/Aesop-Skin-Purifying-Facial-Exfoliant-Paste-75mL-large.png",
            title: "Purifying Facial Exfoliant Paste",
            subtitle: "A deep cleansing exfoliating cream"
        },
        {
            image: "https://www.aesop.com/u1nb1km7t5q7/4dDnzrqcgMeqKPXni0V0iV/d32a161375b1e4f21f5fe79471ef4b3c/Aesop-SkinParsley-Seed-Facial-Cleanser-100mL-large.png",
            title: "Parsley Seed Facial Cleanser",
            subtitle: "For those in polluted urban environments"
        },
        {
            image: "https://www.aesop.com/u1nb1km7t5q7/7yJf5YQN92ZpYUny8akwhX/6040b91ad964a01bca8da1ba484d56b0/Aesop-Skin-B-Tea-Balancing-Toner-100mL-large.png",
            title: "B & Tea Balancing Toner",
            subtitle: "Balancing and hydrating, a light finish"
        },
        {
            image: "https://images.ctfassets.net/u1nb1km7t5q7/3QfGNj3NpYM5h3zLpQHWK0/6ac142e435309dc51f2dc2e477b54a95/Aesop_Skin_Lucent_Facial_Concentrate_60mL_Web_Large_684x668px.png",
            title: "Protective Facial Lotion SPF25",
            subtitle: "A Vitamin c-rich layering serum"
        },
        {
            image: "https://www.aesop.com/u1nb1km7t5q7/SFLFFcSkkuEojFBCs26Xo/97bb554badcd4f5265b972bed612b2ac/Aesop-Skin-Parsley-Seed-Anti-Oxidant-Intense-Serum-60mL-Web-Large-684x668px.png",
            title: "Protective Lip Balm SPF30",
            subtitle: "A hydrating serum to bolster skin"
        },
        {
            image: "https://www.aesop.com/u1nb1km7t5q7/7rQwKlCTwpQ5vNOQBwg7KA/8c79ad1019aa5dfe09583f5a02c77701/Aesop_Skin_Protective_Facial_Lotion_SPF25_Asia_EU_Web_Large_782x796px.png",
            title: "Lucent Facial Concentrate",
            subtitle: "Board-spectrum protection and hydration"
        },
        {
            image: "https://www.aesop.com/u1nb1km7t5q7/3KtuNWOP4wjNqZL1c6V9sB/82d8bb75c5769a49d6d58acc82ab24bf/Aesop-Skin-Protective-Lip-Balm-SPF30-5-5g-large.png",
            title: "Parsley Seed Anti-Oxidant Intense Serum",
            subtitle: "Nourishing SPF30 protection"
        }
    ]
    return (
        <Box sx={{paddingTop:"150px"}}>
            <Swiper
                slidesPerView={"auto"}
                scrollbar={true}
                modules={[Scrollbar]}
            >
                <SwiperSlide style={{width: "auto", margin: "0 0 0 80px"}}><Card1 data={card_1_Data}/></SwiperSlide>
                {
                    products.map((product, index) => {
                         return (
                            <SwiperSlide key={index} style={{width: "435px", margin: 0}}>
                                <Card2 data={product}/>
                            </SwiperSlide>
                        )
                    })
                }

            </Swiper>
        </Box>
    );
};

export default Section5;
