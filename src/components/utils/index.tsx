import {Box, Divider, Stack, Typography} from "@mui/material";

interface UtilsProps {
    data: {
        title: string,
        links: {
            link1: string,
            link2?: string,
            link3?: string,
            link4?: string,
            link5?: string,
            link6?: string,
        }
    }
}


const Utils = (props:UtilsProps) => {
    const {data} = props
    const {title, links} = data
    return (
        <>
            <Stack sx={{width: "331px", height: "273px", gap:1.5}}>
                <Typography variant={"body1"}>{title}</Typography>
                <Divider sx={{margin: "24px 0", width: "100%", borderColor: "white"}}/>
                {
                    Object.values(links).map((link, index) => {
                        return (
                            <Typography key={index} sx={{cursor: "pointer", width: "fit-content"}}
                                        variant={"body1"}>{link}</Typography>
                        )
                    })
                }
                {/*<Typography variant={"body1"}></Typography>*/}
            </Stack>
        </>
    );
};

export default Utils;
