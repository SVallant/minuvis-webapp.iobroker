import React from "react";
import { List, ListItem, ListHeader } from "react-onsenui";
import {
  CircularInput,
  CircularTrack,
  CircularProgress,
  CircularThumb
} from 'react-circular-input'
import RoundSlider from "../utils/RoundSlider";
import moment from "moment";
moment.locale("de-DE");

import { stepperFloat, fixOutputFloat } from "../utils/Utils";

export default class Donut extends React.Component {
  constructor() {
    super();
    this._stateId_subscribed = false;
    this.state = {
      val: 0,
      ts: moment(),
    };
    this.ts = moment();
    this.val = 0;
    this.decimals = 0;
    this.changing = false;
    this.min = 0;
    this.max = 100;
  }

  circleOnChange(value) {

    // console.log("circleOnChange: " + value);

    let valueToSend = parseFloat(value) * (parseFloat(this.max) - parseFloat(this.min)) + parseFloat(this.min);

    // console.log("circleOnChange toSend: " + valueToSend);

    valueToSend = stepperFloat(valueToSend, this.props.widgetData.step);

    // console.log("circleOnChange toSend after stepper: " + valueToSend);

    if (this.props.widgetData.stateIdType === "number") {
      valueToSend = parseFloat(valueToSend);
    }
    // Send only if not updateOnComplete
    if (this.props.widgetData.updateOnComplete === false) {
      this.props.widgetData.socket.emit('setState', this.props.widgetData.stateId, valueToSend);
    }
    //this.props.widgetData.socket.emit('setState', this.props.widgetData.stateId, valueToSend);
    //console.debug(this.props.widgetData.stateId + " :: " + valueToSend);
    // State nachführen
    this.setState({
      val: valueToSend,
      ts: moment(),
    });
    this.val = valueToSend;
    this.changing = true;
  }

  circleOnChangeEnd(value) {

    console.log("circleOnChangeEnd: " + value);

    let valueToSend = parseFloat(value) * (parseFloat(this.max) - parseFloat(this.min)) + parseFloat(this.min);

    valueToSend = valueToSend = stepperFloat(valueToSend.toFixed(this.decimals), this.props.widgetData.step);

    // console.log("circleOnChangeEnd toSend: " + valueToSend);

    if (this.props.widgetData.stateIdType === "number") {
      valueToSend = parseFloat(valueToSend);
    }
    // Send only if not updateOnComplete
    // if (this.props.widgetData.updateOnComplete === false) {
    this.props.widgetData.socket.emit('setState', this.props.widgetData.stateId, valueToSend, function (error, message) {
      this.changing = false;
    }.bind(this));
    // }
    //this.props.widgetData.socket.emit('setState', this.props.widgetData.stateId, valueToSend);
    //console.debug(this.props.widgetData.stateId + " :: " + valueToSend);
    // State nachführen
    this.setState({
      val: valueToSend,
      ts: moment(),
    });
    this.val = valueToSend;



  }

  render() {
    // console.log("render Donut");
    // console.log(this.props.widgetData.states[this.props.widgetData.stateId]);
    // console.log(this.changing);
    // console.log("this.val: " + this.val);
    // console.log("this.ts: " + this.ts);
    // console.log("this.changing: " + this.changing);
    // read value and timestamp from props if available
    if (
      this.props.widgetData.states[this.props.widgetData.stateId] &&
      this.props.widgetData.states[this.props.widgetData.stateId].received === true &&
      this.changing === false
    ) {
      this.val = this.props.widgetData.states[this.props.widgetData.stateId].val || 0;
      this.ts = this.props.widgetData.states[this.props.widgetData.stateId].ts;
    } else {
      // read from this.state
      this.val = this.val || 0;
      this.ts = this.state.ts;
    }

    // console.log("Donut value:");
    // console.log("this.val: " + this.val);
    // console.log("this.ts: " + this.ts);

    let timestamp = null;
    if (this.props.widgetData.timestamp && this.props.widgetData.timestamp === true) {
      timestamp = (
        <ListHeader>
          <span
            className="right lastupdate"
            style={{ float: "right", paddingRight: "5px" }}
          >
            {moment(this.ts).format("DD.MM.YY HH.mm")}
          </span>
        </ListHeader>
      );
    }

    this.min = this.props.widgetData.min;
    this.max = this.props.widgetData.max;


    // check min and max
    if (this.min >= this.max) {
      console.log("donut :: min >= max : " + this.min + "<=" + this.max);
      this.max = this.min + 10;
    }

    // limit min / max
    if (this.val < this.min) { this.val = this.min; };
    if (this.val > this.max) { this.val = this.max; };

    // circular
    const rangeValue = (parseFloat(this.val) - parseFloat(this.min)) / (parseFloat(this.max) - parseFloat(this.min));
    console.log("rangeValue: " + rangeValue);

    // this.decimals = countDecimals(this.props.widgetData.step);
    // console.log("this.decimals: " + this.decimals);

    // decimals
    this.decimals = this.props.widgetData.decimals;
    if (this.decimals < 0) { this.decimals = 0 };
    if (this.decimals > 5) { this.decimals = 5 };


    // set default
    let onChangeFunction = (value) => this.circleOnChange(value);
    let onChangeEndFunction = (value) => this.circleOnChangeEnd(value);
    let progessStrokeWidth = 3;
    let progessStroke = "var(--highlight-color)";
    let thumb = (
      <CircularThumb
        key={"cth_" + this.props.widgetData.UUID}
        r={6}
        strokeWidth={2}
        fill={"var(--highlight-color)"}
        stroke={"var(--highlight-color)"}
      />
    );
    // calculate size:
    let inputRadius = this.props.widgetData.widgetHeight / 3 * 75; // 3 grids high = 70px radius
    let textFontsize = this.props.widgetData.widgetHeight / 3 * 20; // 3 grids high = 20px fontSize


    // handle readOnly    
    if (this.props.widgetData.readOnly === true) {
      onChangeFunction = null;
      onChangeEndFunction = null;
      progessStrokeWidth = 10;
      thumb = null;
      progessStroke = this.props.widgetData.color;
      if (this.val <= this.props.widgetData.minValue) {
        progessStroke = this.props.widgetData.minColor;
      }
      if (this.val >= this.props.widgetData.maxValue) {
        progessStroke = this.props.widgetData.maxColor;
      }
    }

    let height = this.props.widgetData.widgetHeight * 57;
    let width = height;

    return (
      <List id={this.props.widgetData.UUID} class={"donutWidget"} >
        {timestamp}
        <ListItem>
          <div
            id={"rs-" + this.props.widgetData.UUID}
            style={{
              width: width + "px",
              height: height + "px",
              margin: "auto",
            }}>
            <RoundSlider
              parentId={"rs-" + this.props.widgetData.UUID}
              settings={this.props.widgetData}
            />
          </div>
        </ListItem>
      </List>
    );
  }
}
