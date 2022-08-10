import React from "react";
import Card from "@mui/material/Card";
import "./Card.css";
import Button from "@mui/material/Button";
import iconCheckImage from "./assets/images/icon-check.svg";
import Slider, { SliderThumb } from "@mui/material/Slider";
import sliderIcon from "./assets/images/icon-slider.svg";
import Switch from "@mui/material/Switch";
import { color } from "@mui/system";
import { styled } from "@mui/material/styles";

const label = { inputProps: { "aria-label": "Switch demo" } };

function Cards() {
  const RangeSlider = styled(Slider)(({ theme }) => ({
    color: "hsl(174, 77%, 80%)",
    height: 3,
    width: "25vw",
    padding: "13px 0",
    "& .MuiSlider-thumb": {
      height: 27,
      width: 27,
      backgroundColor: "hsl(174, 77%, 50%)",
      border: "1px solid currentColor",
      "&:hover": {
        boxShadow: "0 0 0 8px rgba(58, 133, 137, 0.16)",
      },
    },
    "& .MuiSlider-track": {
      height: 3,
    },
    "& .MuiSlider-rail": {
      color: "hsl(174, 77%, 80%)",
      opacity: theme.palette.mode === "dark" ? undefined : 1,
      height: 3,
    },
  }));

  const TrialButton = styled(Button)(({ theme }) => ({
    borderRadius: "2rem",
    backgroundColor: "hsl(227, 35%, 25%)",
    color: "white",
  }));
  function RangeSilderThumb(props) {
    const { children, ...other } = props;
    return (
      <SliderThumb {...other}>
        {children}
        <img src={sliderIcon} alt=""></img>
      </SliderThumb>
    );
  }

  return (
    
    <div className="cards__title">
      <div className="title">
        <h2>
          {" "}
          <strong> Simple, traffic-based pricing </strong>{" "}
        </h2>
        <small> Sign-up for our 30-day trial. No credit card required. </small>
      </div>
      <div className="cards__container">
        <Card className="card">
          <div className="card__sliderdiv">
            {/* <SliderThumb >
            <img src={sliderIcon} alt=""></img>
          </SliderThumb> */}
            <div className="card__heading">
              <h5>100K PAGEVIEWS</h5>
              <div className="card__price">
              <h1>
                <strong>$16.00</strong>
              </h1>
              <small>/month</small>
            </div>
            </div>
            <RangeSlider
              aria-label="Default"
              valueLabelDisplay="auto"
              components={{ Thumb: RangeSilderThumb }}
            />
            <div className="card__switchinfo">
              <h5>Monthly Billing</h5>
              <Switch {...label} style={{ color: " hsl(224, 65%, 95%)" }} />
              <h5>Yearly Billing</h5>
              <Button
                style={{
                  backgroundColor: "hsl(14, 92%, 95%)",
                  color: "hsl(15, 100%, 70%)",
                  borderRadius: "2rem",
                  height: "5vh",
                  border: "none",
                }}
                variant="outlined"
              >
                25% discount
              </Button>
            </div>
          </div>
          <div className="card__infodiv">
            <div className="card__list">
              <h5>
                {" "}
                <img src={iconCheckImage} alt=""></img> Unlimited websites
              </h5>
              <h5>
                {" "}
                <img src={iconCheckImage} alt=""></img> 100% data ownership
              </h5>
              <h5>
                {" "}
                <img src={iconCheckImage} alt=""></img> Email reports
              </h5>
            </div>
            <div className="card__button">
            <TrialButton
                
                variant="contained"
              >
                Start my trial
              </TrialButton>
            </div>
          </div>
        </Card>
      </div>
    </div>
   
  );
}

export default Cards;
