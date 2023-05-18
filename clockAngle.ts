function getClockAngle(hh_mm: string): number {
    const [hour, minute] = hh_mm.split(":").map(Number);
  
    const hourAngle = (hour % 12) * 30 + (minute / 60) * 30;
  
    const minuteAngle = (minute / 60) * 360;
  
    let angle = Math.abs(hourAngle - minuteAngle);
  
    if (angle > 180) {
      angle = 360 - angle;
    }
  
    return angle;
  }
  
  console.log(getClockAngle("10:00")); 
  console.log(getClockAngle("24:30"));
  console.log(getClockAngle("09:30"));
  