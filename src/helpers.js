function addLeadingZero(value) {
    if (typeof value !== "number") {
      return value;
    }
  
    return value >= 0 && value < 10 ? "0" + value : value;
  }
  
  export function formatTime(value) {
    const cents = addLeadingZero(value % 100);
    const seconds = addLeadingZero(Math.floor(value / 100) % 60);
    const minutes = addLeadingZero(Math.floor(value / (100 * 60)) % 60);
    const hours = addLeadingZero(Math.floor(value / (100 * 60 * 60)) % 60);
  
    return `${hours}:${minutes}:${seconds}.${cents}`;
  }