import React, { Component } from 'react';
import { Chart } from "react-google-charts";



class ConstraintSummary extends Component {

  drawBICChart() {
    let stats = this.props.stats;
    if(stats.designTeamCount == 0 && stats.gcCount == 0 && stats.tradePartnerCount == 0 && stats.ownerCount == 0){
      return;
    }

    const options = {
      title: "Ball In Court Breakdown",
      // slices:{
      //   0:{color:"red"}
      // }
    };
    const data = [
      ["Task", "Hours per Day"],
      [`Design Team - ${stats.designTeamCount} Item`, stats.designTeamCount],
      [`General Contractor - ${stats.gcCount} Item`, stats.gcCount],
      [`Trade Partner - ${stats.tradePartnerCount} Item`, stats.tradePartnerCount],
      [`Owner - ${stats.ownerCount} Item`, stats.ownerCount],
    ];

    return (
      <Chart
        chartType="PieChart"
        data={data}
        options={options}
        width="50%"
        height="400px"
        legendToggle
      />
    );
  }

  drawPriorityChart() {
    let stats = this.props.stats;

    if(stats.urgentCount == 0 && stats.highCount == 0 && stats.mediumCount == 0 && stats.lowCount == 0){
      return;
    }
    const options = {
      title: "Priority Level Breakdown",
      slices:{
        0:{color:"red"}, 
        1: {color: "orange"},
        2: {color:"#CCCC00"}, 
        3: {color:"blue"}
      }
    };
    const data = [
      ["Task", "Hours per Day"],
      [`Urgent - ${stats.urgentCount} Item`, stats.urgentCount],
      [`High - ${stats.highCount} Item`, stats.highCount],
      [`Medium - ${stats.mediumCount} Item`, stats.mediumCount],
      [`Low - ${stats.lowCount} Item`, stats.lowCount],
    ];

    return (
      <Chart
        chartType="PieChart"
        data={data}
        options={options}
        width="50%"
        height="400px"
        legendToggle
      />
    );
  }

   drawDriverChart() {
    let stats = this.props.stats;

    const options = {
      title: "Driver Breakdown",

    };
    const data = [
      ["Task", "Hours per Day"],

    ];

    for(let driver in stats.driverObj){
      let temp = [`${driver} - ${stats.driverObj[driver]} Item`, stats.driverObj[driver]];
      data.push(temp);
    }

    return (
      <Chart
        chartType="PieChart"
        data={data}
        options={options}
        width="50%"
        height="400px"
        legendToggle
      />
    );
  }

  render() {
    return (
      <div>
        {this.drawBICChart()}
        {this.drawPriorityChart()}
        {this.drawDriverChart()}
       
      </div>
    )
  }
}

export default ConstraintSummary;