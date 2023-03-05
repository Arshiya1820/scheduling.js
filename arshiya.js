const processData = (data) => {
    const processedData = [];
    data.forEach((schedule) => {
      const itemDate = new Date(schedule.item_date).toLocaleDateString();
      const scheduleTime = new Date(schedule.schedule_time).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
      const index = processedData.findIndex((obj) => obj.date === itemDate);
      if (index === -1) {
        processedData.push({
          date: itemDate,
          slots: {
            '9am - 12pm': 0,
            '12pm - 3pm': 0,
            '3pm - 6pm': 0,
            '6pm - 9pm': 0,
            '9pm - 12am': 0,
          },
        });
      }
      processedData[index].slots[getTimeSlot(scheduleTime)]++;
    });
    return processedData;
  };
  
  const getTimeSlot = (time) => {
    const hour = parseInt(time.slice(0, 2));
    if (hour < 9) {
      return '9pm - 12am';
    } else if (hour < 12) {
      return '9am - 12pm';
    } else if (hour < 15) {
      return '12pm - 3pm';
    } else if (hour < 18) {
      return '3pm - 6pm';
    } else if (hour < 21) {
      return '6pm - 9pm';
    } else {
      return '9pm - 12am';
    }
  };