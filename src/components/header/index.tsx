'use client'
import {
    AppBar,
    Button,
    Divider,
    Drawer,
    IconButton,
    Slide,
    Stack,
    Toolbar,
    useMediaQuery,
    useScrollTrigger,
    useTheme
} from "@mui/material";
import {KeyboardReturnRounded, Menu, Search} from "@mui/icons-material";
import {useState} from "react";

const Navbar = () => {

    const trigger = useScrollTrigger();
    const theme = useTheme()
    const isUpLg = useMediaQuery(theme.breakpoints.up("lg"))
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            <AppBar sx={{boxShadow: "none"}}>
                <Toolbar
                    sx={{background: "white", minHeight: "64px", padding: "10px 24px", justifyContent: "space-between"}}>
                        <Drawer
                            anchor="left"
                            open={isDrawerOpen}
                            onClose={() => setIsDrawerOpen(false)}
                            sx={{
                                display: {lg: "none", xs: "flex"},
                                "& .MuiDrawer-paper": {
                                    width: {md:"30%", sm:"40%", xs:"50%"},
                                    padding: "10px 0",
                                    alignItems: "flex-start",
                                    gap: 1
                                }
                            }}
                        >
                            <IconButton
                                onClick={() => setIsDrawerOpen(false)}
                                sx={{alignSelf: "end"}}
                            >
                                <KeyboardReturnRounded/>
                            </IconButton>
                            <Stack sx={{width: "90%"}}>
                                {
                                    fullWidth.map((tab, index) => {
                                        return (
                                            <>
                                                <Button key={index}
                                                        disableTouchRipple={true}
                                                        sx={{
                                                            fontSize: "15px",
                                                            fontWeight: "400",
                                                            textTransform: "none",
                                                            textAlign: "start",
                                                            justifyContent: "start",
                                                            color: "black",
                                                            padding: "0 9px",
                                                            "&:hover": {
                                                                background: "none"
                                                            }
                                                        }}>
                                                    {tab}
                                                </Button>
                                                <Divider sx={{margin: "12px 0", width: "100%"}}/>
                                            </>
                                        )
                                    })
                                }
                            </Stack>
                        </Drawer>
                    {
                        isUpLg ?
                            <Stack sx={{flexDirection: "row", gap: 0.5}}>
                                {
                                    fullWidth.map((tab, index) => (
                                        <Button key={index}
                                                disableTouchRipple={true}
                                                sx={{
                                                    fontSize: "15px",
                                                    fontWeight: "400",
                                                    textTransform: "none",
                                                    minWidth: "fit-content",
                                                    color: "black",
                                                    padding: "0 6px",
                                                    "&:hover": {
                                                        background: "none"
                                                    }
                                                }}>{tab}</Button>
                                    ))
                                }
                                <IconButton>
                                    <Search/>
                                </IconButton>
                            </Stack> :
                            <Stack sx={{flexDirection: "row", gap: 0.5}}>
                                <IconButton
                                    disableTouchRipple={true}
                                    onClick={() => setIsDrawerOpen(true)}
                                >
                                    <Menu/>
                                </IconButton>
                                {
                                    midWidth.map((tab, index) => {
                                        return (
                                            <Button key={index}
                                                    disableTouchRipple={true}
                                                    sx={{
                                                        fontSize: "15px",
                                                        fontWeight: "400",
                                                        textTransform: "none",
                                                        minWidth: "fit-content",
                                                        color: "black",
                                                        padding: "0 6px",
                                                        "&:hover": {
                                                            background: "none"
                                                        }
                                                    }}>
                                                {tab}
                                            </Button>
                                        )
                                    })
                                }
                                <IconButton
                                    sx={{textTransform: "none", color: "black", fontSize: "15px", fontWeight: "400"}}>
                                    <Search/>
                                </IconButton>
                            </Stack>
                    }
                    <Stack sx={{flexDirection: "row", gap: 0.5,display: {sm: "flex",xs:"none"}}}>
                        {
                            user.map((option, index) => {
                                return (
                                    <Button key={index}
                                            sx={{
                                                textTransform: "none",
                                                color: "black",
                                                fontSize: "15px",
                                                fontWeight: "400",
                                                "&:hover": {
                                                    background: "none"
                                                }
                                            }}
                                    >
                                        {option}
                                    </Button>
                                )
                            })
                        }
                    </Stack>
                </Toolbar>
            </AppBar>
        </Slide>
    );
};
export default Navbar;

const user: string[] = ["Login", "Cabinet", "Cart"];
const fullWidth: string[] = ['Skin Care', 'Body & Hand', 'Hair', 'Fragrance', 'Home', 'Kits & Travel', 'Gifts', 'Read', 'Stores', 'Facial Appointments'];
const midWidth: string[] = ["Shop", "Read", "Stores"]
