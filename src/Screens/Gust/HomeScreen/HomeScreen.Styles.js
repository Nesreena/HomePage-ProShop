import { red } from "@material-ui/core/colors";
import styled from "styled-components";
import { FlexColumn, FlexRow } from "../../../App.Styles";


export const HeroBox=styled(FlexRow)`
    justify-content: space-between;
    height: 620px;
`;

export const SideBox=styled(FlexColumn)`
    width: 40%;
    align-items:start;
    height: 100%;
`
export const DotsBox=styled(FlexRow)`
width:200px;
margin-bottom:30px

` 

export const SliderDots =styled('div')`

    height:${props=>props.isBig? "25px":"14px"};
    width:${props=>props.isLarg? "25px":"14px"};
    border-radius: 50%;
    background-color:${props=>props.isGray?"#707070":"#FCDD06"};
`

export const HeroTitle=styled("h1")`
    font-size:60px;
    letter-spacing: 2.4px;
    color: #242424;
    text-transform: uppercase;
    opacity: 1;
`;

export const Line=styled("hr")`
    width: 100%;
    margin-bottom:20px;
    margin-top:-3px
    
    
    `
export const CardTitle=styled("h3")`
        text-align: center;
        letter-spacing: 1.28px;
        color: #242424;
        text-transform: uppercase;
        opacity: 1;
        margin-top: 40px;
        font-size:32px;
        margin-bottom:30px;
`;

export const HeadBorder=styled('div')`
    width: 200px;
    height: 8px;
    background-color:#FCDD06;
`
export const CardContainer=styled(FlexColumn)`
    justify-content: start;
    align-items: start;
    margin-bottom: 60px;
`;



export const Cards=styled(FlexRow)`
    justify-content: space-between;
    align-items: start;
    border:${props=>props.border};
    height:auto;
`;

export const CardBox=styled(FlexColumn)`
    justify-content: center;
    align-items: center;
    width:${props=>props.width};
    background:${props=>props.background};
    height:${props=>props.height};
    border-right:${props=>props.borderRight} ;
    border-radius:${props=>props.borderRadius};
    
`;

export const CardImg=styled("img")`
    width:100%;
    border-radius: 16px;
    opacity: 1;
    margin-bottom: 20px;
`
export const StarBox=styled(FlexRow)`
    margin: 20px 0;
`
export const ButtonsBox=styled(FlexRow)`
margin-bottom: 40px;
`;



