var persianDigits = "۰۱۲۳۴۵۶۷۸۹";
var persianMap = persianDigits.split("");

export const convertToPersianNumber = function convertToPersianNumber(input) {
  return input.replace(/\d/g, function (m) {
    return persianMap[parseInt(m)];
  });
};

export const getTimeFromSeconds = function getTimeFromSeconds(time) {
  let minutes = Math.floor(time / 60);
  let seconds = time - minutes * 60;
  if (seconds < 10) seconds = "0" + seconds.toString();
  return (
    convertToPersianNumber(minutes.toString()) +
    ":" +
    convertToPersianNumber(seconds.toString())
  );
};

// export default { convertToPersianNumber, getTimeFromSeconds };
