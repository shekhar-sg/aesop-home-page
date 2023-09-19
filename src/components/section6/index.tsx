import {IconButton, Stack, SxProps, Theme} from "@mui/material";
import Card1 from "@/src/components/cards/card1";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Scrollbar} from "swiper/modules";
import {KeyboardArrowLeft, KeyboardArrowRight} from "@mui/icons-material";

const Section6 = () => {
    return (
        <Stack sx={swiperWrapperSx}>
            <Card1 data={card_1_data}
                   sx={{
                       paddingLeft: {lg: "80px", sm: "12%", xs: "20px"},
                       paddingRight: {lg: "80px", sm: "12%", xs: "20px"},
                       width: {lg: "40%", md: "80%"},
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
            <Swiper
                slidesPerView={"auto"}
                loop
                scrollbar={true}
                modules={[Scrollbar, Navigation]}
                navigation={{
                    enabled: true,
                    prevEl: '.prev-button',
                    nextEl: '.next-button',
                }}
                style={{
                    alignSelf: "end", height: "auto", margin: 0,
                }}
            >
                {
                    images.map((image, index) => {
                        return (
                            <SwiperSlide key={index} style={{width: "100%", margin: 0}}>
                                <img src={image} alt={"image"}
                                     style={{width: "100%", height: "100%", objectFit: "cover"}}/>
                            </SwiperSlide>
                        )
                    })
                }
                <IconButton className={"prev-button"}
                            disableRipple
                >
                    <KeyboardArrowLeft
                        sx={{
                            color: 'white'
                        }}
                    />
                </IconButton>
                <IconButton className={"next-button"}
                            disableRipple
                >
                    <KeyboardArrowRight
                        sx={{
                            color: 'white'
                        }}
                    />
                </IconButton>
            </Swiper>
        </Stack>
    );
};

export default Section6;

const swiperWrapperSx: SxProps<Theme> = () => {
    return {
        paddingTop: {lg: "150px", md: "100px", xs: "80px"},
        // width: "100%",
        flexDirection: {lg: "row", xs: "column"},
        justifyContent: "space-between",
        gap: 5,
        '.swiper': {
            position: "relative",
            display: "flex",
            alignSelf: "end", height: "auto", margin: 0,
            alignItems: "center",
            width: "90%",
            paddingBottom: "50px",

            '.prev-button,.next-button': {
                zIndex: 9,
                borderRadius: 0,
                position: "absolute",
                backgroundColor: "black",
                padding: "20px 25px",
                transition: "all 0.5s linear",
            },
            '.prev-button': {
                left: "0",
                transform: "translateX(-200%)",
                '&.swiper-button-disabled': {
                    transform: "translateX(-200%) !important",
                }
            },
            '.next-button': {
                right: "0",
                transform: "translateX(200%)",
                '&.swiper-button-disabled': {
                    transform: "translateX(200%) !important",
                }
            },
            '&:hover': {
                '.next-button, .prev-button': {
                    transform: "translateX(0)"
                }
            },
            '.swiper-scrollbar': {
                height: "2px",
            }
        }
    }
}

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
