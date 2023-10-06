import { FilterDesiredProps } from "app-types";

export const filterAppValues = (props: FilterDesiredProps) => {
  const { values, desiredData } = props;
  const payload: { [key: string]: string } = {};
  Object.keys(values).forEach((key) => {
    if (desiredData.includes(key)) payload[key] = values[key];
  });
  return payload;
};
