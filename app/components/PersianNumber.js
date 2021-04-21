var persianDigits = "۰۱۲۳۴۵۶۷۸۹";
var persianMap = persianDigits.split("");

function convertToPersianNumber(input) {
  return input.replace(/\d/g, function (m) {
    return persianMap[parseInt(m)];
  });
}

export default convertToPersianNumber;
