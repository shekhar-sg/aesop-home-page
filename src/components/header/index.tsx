'use client'
import {AppBar, Button, IconButton, Stack, Toolbar} from "@mui/material";
import {useState} from "react";
import {Search} from "@mui/icons-material";

const Navbar = () => {
    const tabs: string[] = ['Skin Care', 'Body & Hand', 'Hair', 'Fragrance', 'Home', 'Kits & Travel', 'Gifts', 'Read', 'Stores', 'Facial Appointments'];
    const [value, setValue] = useState('1');
    return (
        <AppBar sx={{boxShadow:"none"}}>
            <Toolbar sx={{background: "white", padding: "10px", justifyContent: "space-between"}}>
                <Stack sx={{flexDirection: "row", width: "100%", gap: 1.5}}>
                    {
                        tabs.map((tab, index) => (
                            <Button key={index}
                                    disableTouchRipple={true}
                                    sx={{
                                        fontWeight: "400",
                                        textTransform: "none",
                                        color: "black",
                                        "&:hover": {
                                            background:"none"
                                        }
                            }}>{tab}</Button>
                        ))
                    }
                    <IconButton>
                        <Search/>
                    </IconButton>
                </Stack>
                <Stack sx={{flexDirection: "row", gap: 1.5}}>
                    <Button sx={{textTransform: "none", color: "black", fontWeight: "400"}}>Login</Button>
                    <Button sx={{textTransform: "none", color: "black", fontWeight: "400"}}>Cabinet</Button>
                    <Button sx={{textTransform: "none", color: "black", fontWeight: "400"}}>Cart</Button>
                </Stack>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
