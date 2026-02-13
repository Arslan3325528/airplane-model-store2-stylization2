import { format, parseISO, differenceInYears } from 'date-fns';

export function getManufacturingYears(start, end) {
  // const dateNow = format(new Date(), "yyyy-MM-dd'T'HH:mm:ss");
  // console.log("dateNow", dateNow); //! 2026-02-13T15:19:59

  const startDate = parseISO(start);
  let endDate = "";
  if (end === "now") {
    endDate = parseISO(format(new Date(), "yyyy-MM-dd'T'HH:mm:ss"))
  } else endDate = parseISO(end);
  // console.log("endDate", endDate); //!
  
  return differenceInYears(endDate, startDate);
}
