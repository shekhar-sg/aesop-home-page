import {Divider, Stack, Typography} from "@mui/material";

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


const Utils = (props: UtilsProps) => {
    const {data} = props
    const {title, links} = data
    return (
        <>
            <Stack sx={{width: {sm: "30%", xs: "44%"}, height: "273px", gap: 0.5}}>
                <Typography variant={"body1"}>{title}</Typography>
                <Divider sx={{margin: "16px 0", width: "100%", borderColor: "white"}}/>
                {
                    Object.values(links).map((link, index) => {
                        return (
                            <Typography key={index}
                                        sx={{
                                            cursor: "pointer",
                                            // fontSize: {sm: "inherit", xs: "11px"},
                                            lineHeight: "24px",
                                            width: "fit-content"
                                        }}
                                        variant={"body1"}>{link}</Typography>
                        )
                    })
                }
            </Stack>
        </>
    );
};

export default Utils;
