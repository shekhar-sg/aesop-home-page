import '../../../node_modules/swiper/swiper-bundle.min.css';
import {Swiper, SwiperSlide} from "swiper/react";
import Card2 from "@/src/components/cards/card_2";
import Card1 from "@/src/components/cards/card1";
import {Box, IconButton, SxProps, Theme} from "@mui/material";
import {Navigation, Scrollbar} from "swiper/modules";
import {KeyboardArrowLeft, KeyboardArrowRight} from "@mui/icons-material";


const Section2 = () => {

    return (
        <Box sx={swiperWrapperSx}>
            <Card1
                sx={{
                    display: {md: "none", xs: "block"},
                    paddingLeft: {lg: "80px", sm: "12%", xs: "20px"},
                    paddingRight: {lg: "80px", sm: "12%", xs: "20px"},
                    width: {lg: "40%", md: "80%"},
                    marginBottom: {sm: "100px", xs: "60px"},
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
                className={"outer-card"}
                data={card_1_Data}/>
            <Swiper
                slidesPerView={"auto"}
                scrollbar={true}
                modules={[Scrollbar, Navigation]}
                navigation={{
                    enabled: true,
                    prevEl: '.prev-button',
                    nextEl: '.next-button',
                }}
            >
                <SwiperSlide style={{width: "auto", margin: "0 0 0 80px"}}>
                    <Card1
                        className={"inner-card"}
                        data={card_1_Data}
                        sx={{
                            display: {md: "block", xs: "none"},
                            width: "435px",
                        }}
                        ButtonProps={{
                            sx: {
                                width: "70%",
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
                </SwiperSlide>
                {
                    products.map((product, index) => {
                        return (
                            <SwiperSlide key={index} style={{width: "435px", margin: 0}}>
                                <Card2 data={product}/>
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
        </Box>
    );
};

export default Section2;


const swiperWrapperSx: SxProps<Theme> = () => {
    return {
        paddingTop: {lg: "150px", md: "100px", xs: "80px"},
        // width: "100%",
        '.swiper': {
            position: "relative",
            display: "flex",
            alignItems: "center",
            paddingBottom: "30px",

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

const card_1_Data = {
    heading: "Fragrance",
    title: "Our personal scents",
    subtitle: "Unorthodox, evocative, and refined, Aesop fragrances are sensory bridges to memory and connection points to those around us.",
    button: "See all Fragrances",
}

const products: {
    image: string,
    title: string,
    subtitle: string
}[] = [
    {
        image: "https://www.aesop.com/u1nb1km7t5q7/6fS7KvwhtoYYrcc6zwJilY/4e2cb9b2e23b98648aae11ae7d0fa4e0/Aesop_Fragrance_Ouranon_Eau_de_Parfum_50mL_Web_Front_Large_900x878px.png",
        title: "Ouranon Eau de Parfum",
        subtitle: "Woody,spicy,resinous"
    },
    {
        image: "https://www.aesop.com/u1nb1km7t5q7/5JnjTiylieRSYutnMFeyVK/0c78718d9172cd5384064512e06f0b52/Aesop_Fragrance_Gloam_Eau_de_Parfum_50mL_Web_Front_Large_900x878px.png",
        title: "Gloam Eau Parfum",
        subtitle: "Floral,spicy,green"
    },
    {
        image: "https://www.aesop.com/u1nb1km7t5q7/6otLbkgZuAv2oDJ3UG3r53/752eb0a5fe1f836a105247851d0200b8/Aesop_Fragrance_Eidesis_Eau_de_Parfum_50mL_Web_Front_Large_900x878px.png",
        title: "Eidesis Eau de Parfum ",
        subtitle: "Woody,spicy,ambery"
    },
    {
        image: "https://www.aesop.com/u1nb1km7t5q7/J4lTP53G5Qg3MtFjmhnRW/945d6746058105e97c0552e3b0fbf54b/Aesop_Fragrance_Eremia_Eau_de_Parfum_50mL_Web_Front_Large_900x878px.png",
        title: "Erémia Eau de Parfum",
        subtitle: "Green, floral, citrus"
    },
    {
        image: "https://www.aesop.com/u1nb1km7t5q7/4xJBSrjM8KCIc1c98Y2V08/38105def050ed90c4f47b58a22c32f97/Aesop_Fragrance_Miraceti_Eau_de_Parfum_50mL_Web_Front_Large_900x878px.png",
        title: "Miraceti Eau de Parfum",
        subtitle: "Resinous, woody, spicy"
    },
    {
        image: "https://www.aesop.com/u1nb1km7t5q7/cc3b7QvhMcApvi0MCw9Xa/c2f5d7e204d7f2e9a5be48aaf66aff3d/Aesop_Fragrance_Karst_Eau_de_Parfum_50mL_Web_Front_Large_900x878px.png",
        title: "Karst Eau de Parfum",
        subtitle: "Fresh, herbaceous, marine"
    },
];
