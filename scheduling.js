const data = [
    {schedule_time: "2021-11-20T09:45:00.000Z", slot: "L", item_date: "2021-11-21"},
    {schedule_time: "2021-11-20T12:30:00.000Z", slot: "L", item_date: "2021-11-21"},
    {schedule_time: "2021-11-20T17:15:00.000Z", slot: "D", item_date: "2021-11-21"},
    {schedule_time: "2021-11-19T11:00:00.000Z", slot: "L", item_date: "2021-11-21"},
    {schedule_time: "2021-11-18T15:30:00.000Z", slot: "D", item_date: "2021-11-21"},
    {schedule_time: "2021-11-17T19:00:00.000Z", slot: "D", item_date: "2021-11-21"},
    {schedule_time: "2021-11-16T08:00:00.000Z", slot: "L", item_date: "2021-11-21"},
    {schedule_time: "2021-11-20T13:00:00.000Z", slot: "D", item_date: "2021-11-20"},
    {schedule_time: "2021-11-20T16:30:00.000Z", slot: "L", item_date: "2021-11-20"},
    {schedule_time: "2021-11-19T11:30:00.000Z", slot: "D", item_date: "2021-11-20"},
    {schedule_time: "2021-11-18T18:00:00.000Z", slot: "L", item_date: "2021-11-20"},
    {schedule_time: "2021-11-17T20:00:00.000Z", slot: "D", item_date: "2021-11-20"},
    {schedule_time: "2021-11-16T09:00:00.000Z", slot: "L", item_date: "2021-11-20"}
  ];
  
  const groupedData = data.reduce((acc, curr) => {
    const date = moment(curr.item_date).format('YYYY-MM-DD');
    const time = moment(curr.schedule_time).format('HH:mm:ss');
    if (!acc[date]) {
      acc[date] = { [time]: 1 };
    } else if (!acc[date][time]) {
      acc[date][time] = 1;
    } else {
      acc[date][time]++;
    }
    return acc;
  }, {});
  import React from 'react';
  import { XYPlot, XAxis, YAxis, HorizontalGridLines, VerticalGridLines, BarSeries } from 'react-vis';
  
  const BarChart = ({ data }) => {
    const CharData = ({data}) 
  }