import {
  FlexBox,
  FlexColumn,
  InnerSection,
  Typography,
} from "../../../App.Styles";
import Image from "../../../Assets/Screenshot 2021-06-15 080707.png";
import HeroImg from "../../../Assets/heroimg.png";
import Cardimg from "../../../Assets/Screenshot 2021-06-15 114138.png";
import SwipeableViews from "react-swipeable-views";
import { useState } from "react";
import StarIcon from "@material-ui/icons/Star";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import StarHalfIcon from "@material-ui/icons/StarHalf";
import TurnedInNotIcon from "@material-ui/icons/TurnedInNot";
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import {
  HeroBox,
  HeroTitle,
  SideBox,
  CardBox,
  CardTitle,
  Line,
  Cards,
  CardContainer,
  CardImg,
  StarBox,
  ButtonsBox,
  HeadBorder,
  DotsBox,
  SliderDots,
} from "./HomeScreen.Styles";
import Button from "../../../Components/Button/Button";

const styles = {
  root: {
    position: "relative",
    width: "100%",
    height: 678,
  },
};

const StyleObj = {
  fontSize: 28,
  color: "#FCDD06",
  fill: "#FCDD06",
  // margin:"auto 0 auto 32px"
};

const StyleChevron= {
  fontSize: 50,
  color: "#000000",
  fill: "#000000",
  // margin:"auto 0 auto 32px"
};

const HomeScreen = () => {
  const [sliderIndex, setSliderIndex] = useState(0);

  const handleChangeIndex = () => {};

  return (
    <FlexColumn>
      <FlexBox color={"#F2F2F2"}>
        <InnerSection>
          <SwipeableViews
            style={Object.assign({}, styles.root, styles.root)}
            index={sliderIndex}
            onChangeIndex={handleChangeIndex}
          >
            <HeroBox>
              <SideBox>
                <Typography fontSize={32} color={"#242424"}>
                  Save up to $39.99
                </Typography>
                <HeroTitle>PlayStation 5</HeroTitle>
                <Typography fontSize={32} color={"#242424"}>
                  Lightning-fast download speed with super-fast SSD storage
                </Typography>
                <Button
                  text="Shop now"
                  width={"220px"}
                  borderRadius={20}
                  style={{ marginTop: 42, height: 52 }}
                />
             
              </SideBox>
              <SideBox> <CardImg src={HeroImg} /> </SideBox>
              
            </HeroBox>
            
          </SwipeableViews>

          <DotsBox >
            <ChevronLeftIcon style={StyleChevron} />
          <SliderDots  isBig={true} isLarg={true}  ></SliderDots>
          <SliderDots  isBig={true} isLarg={true} isGray={true} style={{margin:"0 15px"}}></SliderDots>
              <SliderDots   isBig={true} isLarg={true} isGray={true}></SliderDots>
              <ChevronRightIcon style={StyleChevron}  />
            </DotsBox>
            
        </InnerSection>
        {/* <Pagination dots={3} index={sliderIndex} onChangeIndex={this.handleChangeIndex} /> */}
      </FlexBox>

      {/* section two of home page */}
      <FlexBox color={"white"}>
        <InnerSection>
          <SwipeableViews
            style={Object.assign({}, styles.root, styles.root)}
            index={sliderIndex}
            onChangeIndex={handleChangeIndex}
          >
            <CardContainer>
              <CardTitle>Featured Categories</CardTitle>
              <HeadBorder />
              <Line />
              <Cards >
                <CardBox width={"23%"}>
                  <CardImg src={Image} />
                  <Typography
                    fontSize={24}
                    color={"#242424"}
                    fontWeight={"bold"}
                  >
                    LAPTOP
                  </Typography>
                </CardBox>
                <CardBox width={"23%"}>
                  <CardImg src={Image} />
                  <Typography
                    fontSize={24}
                    color={"#242424"}
                    fontWeight={"bold"}
                  >
                    LAPTOP
                  </Typography>
                </CardBox>
                <CardBox width={"23%"}>
                  <CardImg src={Image} />
                  <Typography
                    fontSize={24}
                    color={"#242424"}
                    fontWeight={"bold"}
                  >
                    LAPTOP
                  </Typography>
                </CardBox>
                <CardBox width={"23%"}>
                  <CardImg src={Image} />
                  <Typography
                    fontSize={24}
                    color={"#242424"}
                    fontWeight={"bold"}
                  >
                    LAPTOP
                  </Typography>
                </CardBox>
              </Cards>
            </CardContainer>
          </SwipeableViews>
        </InnerSection>
      </FlexBox>

      <FlexBox color={"#F7F8FC"}>
        <InnerSection>
        <CardContainer>
              <CardTitle>Featured Products  </CardTitle>
              <HeadBorder />
              <Line />
              <Cards>
              <CardBox background={"#fff"} width={"31%"} borderRadius={"16px"}>
                  <CardImg src={Cardimg} />
                  <Typography fontSize={24} >Apple iPhone 11 Pro 256GB Memory</Typography>
                  <StarBox >
                    <StarIcon style={StyleObj} />
                    <StarIcon style={StyleObj} />
                    <StarIcon style={StyleObj} />
                    <StarHalfIcon style={StyleObj} />
                    <StarBorderIcon style={StyleObj} />
                  </StarBox>
                  <Typography
                    fontSize={30}
                    color={"#242424"}
                    fontWeight={"bold"}
                  >
                    $499.99
                  </Typography>
                  <ButtonsBox>
                    <Button
                      text={<TurnedInNotIcon />}
                      width={"54px"}
                      borderRadius={10}
                      isGray={true}
                      style={{ marginTop: 20, height: 62 }}
                    >
                      {" "}
                    </Button>
                    <Button
                      text="Add to cart"
                      width={"324px"}
                      borderRadius={10}
                      isGray={true}
                      style={{ marginTop: 20, height: 62, marginLeft: 13 }}
                    />
                  </ButtonsBox>
                </CardBox>
                <CardBox background={"#fff"} width={"31%"} borderRadius={"16px"}>
                  <CardImg src={Cardimg} />
                  <Typography fontSize={24} >Canon Eos 80D DSLR Camera</Typography>
                  <StarBox >
                    <StarIcon style={StyleObj} />
                    <StarIcon style={StyleObj} />
                    <StarIcon style={StyleObj} />
                    <StarHalfIcon style={StyleObj} />
                    <StarBorderIcon style={StyleObj} />
                  </StarBox>
                  <Typography
                    fontSize={30}
                    color={"#242424"}
                    fontWeight={"bold"}
                  >
                    $799.99
                  </Typography>
                  <ButtonsBox>
                    <Button
                      text={<TurnedInNotIcon />}
                      width={"54px"}
                      borderRadius={10}
                      isGray={true}
                      style={{ marginTop: 20, height: 62 }}
                    >
                      {" "}
                    </Button>
                    <Button
                      text="Add to cart"
                      width={"324px"}
                      borderRadius={10}
                      isGray={true}
                      style={{ marginTop: 20, height: 62, marginLeft: 13 }}
                    />
                  </ButtonsBox>
                </CardBox>
                <CardBox background={"#fff"} width={"31%"} borderRadius={"16px"} >
                  <CardImg src={Cardimg} />
                  <Typography fontSize={24}>Canon Eos 80D DSLR Camera</Typography>
                  <StarBox >
                    <StarIcon style={StyleObj} />
                    <StarIcon style={StyleObj} />
                    <StarIcon style={StyleObj} />
                    <StarHalfIcon style={StyleObj} />
                    <StarBorderIcon style={StyleObj} />
                  </StarBox>
                  <Typography
                    fontSize={30}
                    color={"#242424"}
                    fontWeight={"bold"}
                  >
                    $799.99
                  </Typography>
                  <ButtonsBox>
                    <Button
                      text={<TurnedInNotIcon />}
                      width={"54px"}
                      borderRadius={10}
                      isGray={true}
                      style={{ marginTop: 20, height: 62 }}
                    >
                      {" "}
                    </Button>
                    <Button
                      text="Add to cart"
                      width={"324px"}
                      borderRadius={10}
                      isGray={true}
                      style={{ marginTop: 20, height: 62, marginLeft: 13 }}
                    />
                  </ButtonsBox>
                </CardBox>
              </Cards>

              </CardContainer>
        </InnerSection>
      </FlexBox> 

      <FlexBox color={"white"}>
        <InnerSection>
        <CardContainer>
              <CardTitle>TOP RATE PRODUCTS</CardTitle>
              <HeadBorder />
              <Line />
              <Cards border={"1px solid #FCDD06"}>
              <CardBox background={"#fff"} width={"31%"} borderRight={"1px solid #F2F2F2"}>
                  <CardImg src={Cardimg} />
                  <Typography fontSize={24} >Canon Eos 80D DSLR Camera</Typography>
                  <StarBox >
                    <StarIcon style={StyleObj} />
                    <StarIcon style={StyleObj} />
                    <StarIcon style={StyleObj} />
                    <StarHalfIcon style={StyleObj} />
                    <StarBorderIcon style={StyleObj} />
                  </StarBox>
                  <Typography
                    fontSize={30}
                    color={"#242424"}
                    fontWeight={"bold"}
                  >
                    $799.99
                  </Typography>
                  <ButtonsBox>
                    <Button
                      text={<TurnedInNotIcon />}
                      width={"54px"}
                      borderRadius={10}
                      isGray={true}
                      style={{ marginTop: 20, height: 62 }}
                    >
                      {" "}
                    </Button>
                    <Button
                      text="Add to cart"
                      width={"324px"}
                      borderRadius={10}
                      isGray={true}
                      style={{ marginTop: 20, height: 62, marginLeft: 13 }}
                    />
                  </ButtonsBox>
                </CardBox>
                <CardBox background={"#fff"} width={"31%"} borderRight={"1px solid #F2F2F2"}>
                  <CardImg src={Cardimg} />
                  <Typography fontSize={24} >Canon Eos 80D DSLR Camera</Typography>
                  <StarBox >
                    <StarIcon style={StyleObj} />
                    <StarIcon style={StyleObj} />
                    <StarIcon style={StyleObj} />
                    <StarHalfIcon style={StyleObj} />
                    <StarBorderIcon style={StyleObj} />
                  </StarBox>
                  <Typography
                    fontSize={30}
                    color={"#242424"}
                    fontWeight={"bold"}
                  >
                    $799.99
                  </Typography>
                  <ButtonsBox>
                    <Button
                      text={<TurnedInNotIcon />}
                      width={"54px"}
                      borderRadius={10}
                      isGray={true}
                      style={{ marginTop: 20, height: 62 }}
                    >
                      {" "}
                    </Button>
                    <Button
                      text="Add to cart"
                      width={"324px"}
                      borderRadius={10}
                      isGray={true}
                      style={{ marginTop: 20, height: 62, marginLeft: 13 }}
                    />
                  </ButtonsBox>
                </CardBox>
                <CardBox background={"#fff"} width={"31%"}>
                  <CardImg src={Cardimg} />
                  <Typography fontSize={24}>Canon Eos 80D DSLR Camera</Typography>
                  <StarBox >
                    <StarIcon style={StyleObj} />
                    <StarIcon style={StyleObj} />
                    <StarIcon style={StyleObj} />
                    <StarHalfIcon style={StyleObj} />
                    <StarBorderIcon style={StyleObj} />
                  </StarBox>
                  <Typography
                    fontSize={30}
                    color={"#242424"}
                    fontWeight={"bold"}
                  >
                    $799.99
                  </Typography>
                  <ButtonsBox>
                    <Button
                      text={<TurnedInNotIcon />}
                      width={"54px"}
                      borderRadius={10}
                      isGray={true}
                      style={{ marginTop: 20, height: 62 }}
                    >
                      {" "}
                    </Button>
                    <Button
                      text="Add to cart"
                      width={"324px"}
                      borderRadius={10}
                      isGray={true}
                      style={{ marginTop: 20, height: 62, marginLeft: 13 }}
                    />
                  </ButtonsBox>
                </CardBox>
              </Cards>
              </CardContainer>
        </InnerSection>
      </FlexBox>



      
    </FlexColumn>

    
  );
};

export default HomeScreen;
