import {
    Box,
    Checkbox,
    Divider,
    IconButton,
    InputAdornment,
    Stack,
    TextField,
    Typography,
    useMediaQuery
} from "@mui/material";
import {ArrowForward, Copyright, Instagram, LinkedIn, Twitter} from "@mui/icons-material";
import Utils from "@/src/components/utils";
import {useMemo} from "react";

const Footer = () => {

    const isDownMd = useMediaQuery('(max-width:900px)')

    const footerInfos = useMemo(() => isDownMd ? information.slice(0, 4) : information, [isDownMd])

    return (
        <Box sx={{background: "#242222"}}>
            <Stack sx={{
                color: "white",
                flexDirection: {lg: "row", xs: "column"},
                justifyContent: "space-between",
                padding: "54px 40px 0 40px",
                height: "auto",
                width: {lg: "auto",},
                overflow: "hidden",
                gap: 8,
            }}>
                <Stack
                    sx={{height: "70%", width: {lg: "50%", md: "100%", xs: "100%"}, justifyContent: "space-between"}}>
                    <Stack sx={{width: "100%"}}>
                        <Typography>Subscribe to Aesop communications</Typography>
                        <Divider sx={{margin: "24px 0", width: "103%", borderColor: "white"}}/>
                        <TextField InputProps={{
                            defaultValue: "Email address",
                            endAdornment: <InputAdornment position={'end'}>
                                <IconButton centerRipple={false}>
                                    <ArrowForward sx={{color: "white", fontSize: "16px"}}/>
                                </IconButton>
                            </InputAdornment>,
                            sx: {
                                color: "white",
                                height: "32px",
                                fontSize: "20px"
                            }
                        }}
                                   sx={{
                                       width: "100%",
                                       padding: "3px 6px",
                                       border: "1px solid white",
                                       borderRadius: "4px",
                                       fieldset: {
                                           display: "none"
                                       }
                                   }}
                        />
                        <Stack direction={"row"} gap={2} alignItems={"center"}>
                            <Checkbox sx={{
                                color: "white",
                                padding: 0,
                                marginBottom: {md:"-15px"},
                                '&.Mui-checked': {
                                    color: "white",
                                },
                            }}/>
                            <Typography sx={{fontSize: "13.5px", fontWeight: 400, lineHeight: "2", paddingTop: "14px"}}>Subscribe
                                to receive
                                communications from Aesop. By
                                subscribing, you confirm you have read and understood our <b
                                    style={{cursor: "pointer", textDecoration: "underline"}}>privacy
                                    policy</b>.</Typography>
                        </Stack>
                    </Stack>
                    <Stack sx={{marginTop: "26px", display: {}}}>
                        <Typography variant={"body1"}>Sustainability</Typography>
                        <Divider sx={{margin: "18px 0", width: "100%", borderColor: "white"}}/>
                        <Typography variant={"body1"}>All Aesop products are vegan, and we do not test our formulations
                            or
                            ingredients on animals. We are Leaping Bunny approved and a Certified B Corporation. Learn
                            more</Typography>
                    </Stack>
                </Stack>
                <Stack sx={{flexDirection: "row", width: {sx:"800px",xs:"100%"}, flexWrap: "wrap", justifyContent: "space-between"}}>
                    {
                        footerInfos.map((item, index) => {
                            return (
                                <Utils key={index} data={item}/>
                            )
                        })
                    }
                </Stack>
            </Stack>
            <Divider variant={"middle"} sx={{marginY: "20px", backgroundColor: "white", height: "1px"}}/>
            <Stack direction={"row"} justifyContent={'space-between'}>
                <Typography sx={{color: "white", padding: "0 14px 28px", text: "center"}}>
                    <Copyright sx={{margin: "10px 2px -2px 8px", height: "16px", width: "16px"}}/>
                    Aesop
                </Typography>
                <Stack direction={"row"}
                       sx={{display: {md: "none", xs: "flex"}, marginRight: "24px", gap: 5, alignItems: "start"}}>
                    <IconButton>
                        <Instagram sx={{color: "white",}}/>
                    </IconButton>
                    <IconButton>
                        <Twitter sx={{color: "white"}}/>
                    </IconButton>
                    <IconButton>
                        <LinkedIn sx={{color: "white"}}/>
                    </IconButton>
                </Stack>
            </Stack>
        </Box>
    );
};

export default Footer;

const information: {
    title: string,
    links: {
        link1: string,
        link2?: string,
        link3?: string,
        link4?: string,
        link5?: string,
        link6?: string,
    }
}[] = [
    {
        title: "Orders and support",
        links: {
            link1: "Contact us",
            link2: "FAQs",
            link3: "Shipping",
            link4: "Returns",
            link5: "Order history",
            link6: "Terms and conditions",
        }
    },
    {
        title: "Services",
        links: {
            link1: "Live assistance",
            link2: "Corporate gifts",
            link3: "Facial Appointments",
            link4: "Click and Collect",
            link5: "Video consultation",
        }
    },
    {
        title: "Location preferences",
        links: {
            link1: "Shipping:",
            link2: "Hong Kong SAR, China",
            link3: "Language:",
            link4: "English",
            link5: "繁體中文",
        }
    },
    {
        title: "About",
        links: {
            link1: "Our story",
            link2: "Foundation",
            link3: "Careers",
            link4: "Privacy policy",
            link5: "Accessibility",
            link6: "Cookie Policy",
        }
    },
    {
        title: "Social Media",
        links: {
            link1: "Instagram",
            link2: "Twitter",
            link3: "LinkedIn",
            link4: "WeChat",
            link5: "Weibo",
        }
    },
];
