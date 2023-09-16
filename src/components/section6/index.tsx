import {Stack} from "@mui/material";
import Card1 from "@/src/components/cards/card1";
import {Swiper, SwiperSlide} from "swiper/react";
import {Scrollbar} from "swiper/modules";

const Section6 = () => {
    const card_1_data = {
        title: "Store locator",
        subtitle: "Our consultants are available to host you in-store and provide tailored guidance on gift purchases.",
        button: "Find a nearby store",
        color: "black",
        hoverColor: "white",
        width: "435px",
        font: "16px",
        margin: "0"

    }
    const images: string[] = [
        "https://www.aesop.com/u1nb1km7t5q7/iC1baQuIzXXC6Ho3lZSFW/1226a07142e70fec26df3f0b72578cbd/Aesop_HK_Store_IFC_III_Hero_Bleed_Desktop_2880x1620px.jpg",
        "https://www.aesop.com/u1nb1km7t5q7/4StXXhzwKgYMIFgTSIOgUk/8c3406be7d5c1194b0e267b773fa66e6/Aesop_MOKO_II_Mid_Desktop_2560x1440px.jpg",
        "https://www.aesop.com/u1nb1km7t5q7/5U8aDtbYkybIgilkq1tJ7w/41bdf1c8b1eb863fd9ac7cde0ee1c64a/Aesop_Fashion_Walk_II_Mid_Desktop_2560x1440px.jpg"
    ]
    return (
        <Stack sx={{
            padding: "150px 0 0 80px",
            flexDirection: "row",
            justifyContent: "space-between"
        }}>
            <Card1 data={card_1_data}/>
            <Swiper
                slidesPerView={"auto"}
                loop
                scrollbar={true}
                modules={[Scrollbar]}
                style={{width: "1107px", height: "630px", margin: 0, objectFit: "cover"}}
            >
                {
                    images.map((image, index) => {
                        return (
                            <SwiperSlide key={index} style={{width: "auto", margin: 0}}>
                                <img src={image} alt={"image"}
                                     style={{width: "100%", height: "100%", objectFit: "cover"}}/>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </Stack>
    );
};

export default Section6;
