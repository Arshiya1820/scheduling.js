import React, { useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
  {
    "schedule_time": "2023-03-05T09:00:00Z",
    "slot": "L",
    "item_date": "2023-03-06"
  },
  {
    "schedule_time": "2023-03-05T11:00:00Z",
    "slot": "L",
    "item_date": "2023-03-06"
  },
  {
    "schedule_time": "2023-03-05T14:00:00Z",
    "slot": "D",
    "item_date": "2023-03-06"
  },
  {
    "schedule_time": "2023-03-05T17:00:00Z",
    "slot": "D",
    "item_date": "2023-03-06"
  },
  {
    "schedule_time": "2023-03-05T10:00:00Z",
    "slot": "L",
    "item_date": "2023-03-07"
  },
  {
    "schedule_time": "2023-03-05T13:00:00Z",
    "slot": "D",
    "item_date": "2023-03-07"
  },
  {
    "schedule_time": "2023-03-05T12:00:00Z",
    "slot": "L",
    "item_date": "2023-03-08"
  },
  {
    "schedule_time": "2023-03-05T15:00:00Z",
    "slot": "D",
    "item_date": "2023-03-08"
  },
  {
    "schedule_time": "2023-03-05T18:00:00Z",
    "slot": "D",
    "item_date": "2023-03-08"
  },
  {
    "schedule_time": "2023-03-05T08:00:00Z",
    "slot": "L",
    "item_date": "2023-03-09"
  }
];

const groupBy = (arr, key) => {
  return arr.reduce((acc, obj) => {
    const date = obj[key].split('T')[0];
    if (!acc[date]) {
      acc[date] = [];
    }
    acc[date].push(obj);
    return acc;
  }, {});
};

const groupByHour = (arr, key) => {
  return arr.reduce((acc, obj) => {
    const hour = new Date(obj[key]).getHours();
    if (!acc[hour]) {
      acc[hour] = 0;
    }
    acc[hour]++;
    return acc;
  }, {});
};

const AggregatedGraph = () => {
  const [selectedDate, setSelectedDate] = useState('');

  const handleClick = (date) => {
    setSelectedDate(date);
  }
}