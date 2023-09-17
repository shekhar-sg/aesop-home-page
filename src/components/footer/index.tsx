import {Box, Checkbox, Divider, IconButton, InputAdornment, Stack, TextField, Typography} from "@mui/material";
import {ArrowForward, Copyright} from "@mui/icons-material";
import Utils from "@/src/components/utils";

const Footer = () => {
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

    return (
        <Box sx={{background: "#242222",}}>
            <Stack sx={{
                color: "white",
                flexDirection: "row",
                justifyContent: "space-between",
                padding: "54px 40px",
                height: "650px",
                overflow:"hidden",
                gap: 8,
            }}>
                <Stack sx={{height: "70%", width: "auto", justifyContent: "space-between"}}>
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
                                marginTop: "-11px",
                                padding: 0,
                                '&.Mui-checked': {
                                    color: "white",
                                },
                            }}/>
                            <Typography sx={{fontSize: "16px", fontWeight: 400, marginTop: "22px"}}>Subscribe to receive
                                communications from Aesop. By
                                subscribing, you confirm you have read and understood our <b
                                    style={{cursor: "pointer", textDecoration: "underline"}}>privacy
                                    policy</b>.</Typography>
                        </Stack>
                    </Stack>
                    <Box>
                        <Typography variant={"body1"}>Sustainability</Typography>
                        <Divider sx={{margin: "24px 0", width: "100%", borderColor: "white"}}/>
                        <Typography variant={"body1"}>All Aesop products are vegan, and we do not test our formulations
                            or
                            ingredients on animals. We are Leaping Bunny approved and a Certified B Corporation. Learn
                            more</Typography>
                    </Box>
                </Stack>
                <Stack sx={{flexDirection: "row", flexWrap: "wrap", gap: 3}}>
                    {
                        information.map((item, index) => {
                            return (
                                <Utils key={index} data={item}/>
                            )
                        })
                    }
                </Stack>
            </Stack>
            <Divider sx={{
                width: "100%",
                height: "1px",
                backgroundColor: "white",
                margin: "0",
                padding: "0"
            }}/>
            <Typography sx={{color:"white",padding:"24px 14px", text:"center"}}>
                <Copyright sx={{margin:"10px 2px -2px 8px", height:"16px", width:"16px"}}/>
                Aesop
            </Typography>
        </Box>
    );
};

export default Footer;
