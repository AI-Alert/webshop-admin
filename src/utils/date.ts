import moment from 'moment';

export const toHumanDate = (
  dateformat: string,
  date?: string | number | Date,
): string => {
  if (date) {
    return moment(date).format(dateformat);
  }
  return '';
};
