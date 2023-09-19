import {
    Button,
    ButtonProps,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    CardHeaderProps,
    CardProps,
    Typography,
    TypographyProps
} from "@mui/material";
import {East} from "@mui/icons-material";

export interface Card1Props extends Omit<CardProps, 'children'> {
    data: {
        heading?: string,
        title: string,
        subtitle: string,
        button: string,
    }
    CardHeaderProps?: Omit<CardHeaderProps, 'children'>,
    SubtitleProps?: Omit<TypographyProps, 'children'>,
    ButtonProps?: Omit<ButtonProps, 'children'>,
}

const Card1 = (props: Card1Props) => {
    const {data, CardHeaderProps, SubtitleProps, ButtonProps, sx, ...restCardProps} = props;
    const {heading, button, subtitle, title} = data;


    return (
        <>
            <Card
                sx={[
                    {
                        background: "transparent",
                        boxShadow: "none",
                        height: "fit-content",
                        '*': {
                            color: 'inherit',
                            borderColor: 'inherit'
                        }
                    },
                    ...(Array.isArray(sx) ? sx : [sx])
                ]}
                {...restCardProps}
            >
                <CardHeader
                    title={heading}
                    titleTypographyProps={{
                        variant: "subtitle2",
                        color: "inherit",
                        mb: '15px',
                        ...(CardHeaderProps?.titleTypographyProps && CardHeaderProps?.titleTypographyProps)
                    }}
                    subheader={title}
                    subheaderTypographyProps={{
                        color: "inherit",
                        fontSize: "30px",
                        lineHeight: "normal",
                        ...(CardHeaderProps?.subheaderTypographyProps && CardHeaderProps?.subheaderTypographyProps)
                    }}
                    sx={[
                        {
                            py: 0,
                        },
                        ...(CardHeaderProps ? Array.isArray(CardHeaderProps?.sx) ? CardHeaderProps?.sx : [CardHeaderProps?.sx] : [])
                    ]}
                    {...CardHeaderProps}
                />
                <CardContent
                    sx={{
                        color: "inherit",
                    }}
                >
                    <Typography variant={"subtitle1"} color={"inherit"} {...SubtitleProps}>
                        {subtitle}
                    </Typography>
                </CardContent>
                <CardActions
                    color={"inherit"}
                >
                    <Button variant={"outlined"}
                            {...ButtonProps}
                            sx={[{
                                color: "inherit",
                                background: "transparent",
                                textTransform: "none",
                                fontWeight: "400",
                                padding: "16px 24px",
                                borderRadius: 0,
                                marginLeft: "8px",
                                borderColor: "currentColor",
                                '&:hover': {
                                    background: "white",
                                    borderColor: "white",
                                    color: "black",
                                },
                            },
                                ...(ButtonProps ? Array.isArray(ButtonProps?.sx) ? ButtonProps?.sx : [ButtonProps?.sx] : [])
                            ]}
                            endIcon={<East sx={{fontSize: "16px"}}
                            />}
                    >{button}</Button>
                </CardActions>
            </Card>
        </>
    );
};

export default Card1;
