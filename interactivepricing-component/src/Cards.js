import React from "react";
import Card from "@mui/material/Card";
import "./Card.css";
import Button from "@mui/material/Button";
import iconCheckImage from "./assets/images/icon-check.svg";
import Slider, { SliderThumb } from "@mui/material/Slider";
import sliderIcon from "./assets/images/icon-slider.svg";

function Cards() {
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
          <div className="card__div">
            {/* <SliderThumb >
            <img src={sliderIcon} alt=""></img>
          </SliderThumb> */}
            <Slider
              aria-label="Default"
              valueLabelDisplay="auto"
              style={{
                width: "25vw",
                color: "hsl(174, 77%, 80%)",
              }}
            />
          </div>
          <div className="card__div1">
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
              <Button
                style={{
                  borderRadius: "2rem",
                  backgroundColor: "hsl(227, 35%, 25%)",
                }}
                variant="contained"
              >
                Start my trial
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default Cards;
