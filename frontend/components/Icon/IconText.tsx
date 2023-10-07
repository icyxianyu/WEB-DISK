import style from "styled-components";

interface IRowIconTextProps {
    direction: 'row' | 'column',
    icon: JSX.Element,
    text: string,
    iconStyle?: object,
    textStyle?: object,
}

const StyledIconText = style.div`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`;

const StyledIcon = style.div`
    & span{
        margin-right: 0px !important;
    }
`;

const StyledText = style.div`

`;


export default function IconText(
    { direction, icon, text, iconStyle, textStyle }: IRowIconTextProps) {

    return (
        <StyledIconText
            datatype="IconText"
            style={{ flexDirection: direction }}>
            <StyledIcon style={iconStyle}>
                {icon}
            </StyledIcon>
            <StyledText style={textStyle}>
                {text}
            </StyledText>
        </StyledIconText >
    )
}
