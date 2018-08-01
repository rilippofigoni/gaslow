import { Moment } from "moment";

export type CsvPrice = {
  idStation: number,
  fuelType: String,
  price: number,
  isSelf: boolean,
  updatedAt: Moment,
};