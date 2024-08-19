"use client";
import * as React from "react";
import * as ReactDOM from "react-dom";
import {
  HeatMapComponent,
  Inject,
  Legend,
  Tooltip,
} from "@syncfusion/ej2-react-heatmap";
import { registerLicense } from "@syncfusion/ej2-base";

registerLicense(process.env.NEXT_PUBLIC_Syncfusion_Key);
export default function Heatmap() {
  let heatmapData = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [4, 4, 5, 5, 0, 2, -1, 0, 4, 0, 1, 4, 5, -1, 1, 1, 1, 1, -1, -1],
    [4, 5, 5, 6, 0, -1, -4, 0, 4, 0, 2, 5, 6, -3, 2, 1, 1, -2, -1, -3],
    [4, 6, 5, 6, 0, -5, -5, 0, 5, 0, 5, 6, 6, -1, 5, 4, 4, -5, 1, -1],
    [4, 5, 5, 6, 0, -5, -6, 0, 5, 0, 5, 6, 6, 2, 5, 5, 5, -5, 1, 2],
    [5, 2, 5, 3, 0, -2, -5, 0, 5, 0, 2, 3, 3, 2, 2, 3, 3, -2, -1, 2],
    [5, -2, 4, -1, 0, 2, -2, 0, 4, 0, -1, -1, 0, -1, -1, -1, -1, 1, -4, -1],
    [6, -5, 4, -5, 0, 5, 2, 0, 4, 0, -4, -5, -3, -5, -4, -5, -5, 4, -4, -5],
    [6, -3, 4, -3, 0, 5, 2, 0, 4, 0, -5, -3, -3, -6, -5, -3, -6, 4, -5, -3],
    [6, 1, 2, 0, 0, 4, -1, 0, 4, 0, -6, 1, -3, -6, -6, 0, -5, 4, -5, -2],
    [5, -1, 1, 0, 1, -2, 0, 4, 0, -6, 5, -4, -6, -6, 3, -4, 1, -6, -2],
    [5, -1, 1, 0, -2, 1, 0, 4, 0, -6, 5, -2, -6, -6, 3, -1, -2, -6, -5],
    [2, -1, 2, 0, -2, 2, 0, 2, 0, -6, 2, 1, -5, -6, 4, 1, -2, -6, -6],
    [-2, 1, 5, 0, 0, -1, 0, -1, 0, -5, -2, 5, -5, -5, 2, 1, 1, -3, -6],
    [-2, 2, 5, 0, 1, -2, 0, -1, 0, -2, -4, 3, -2, -2, 2, -2, 2, 1, -3],
    [0, 4, 2, 0, -1, 1, 0, 2, 0, 2, -5, -1, 0, 2, -1, -5, 0, 5, -2],
    [1, 5, 1, 0, -4, 5, 0, 5, 0, 5, -5, -5, 1, 5, -2, -6, -3, 5, -2],
    [-1, 5, 2, 1, -2, 6, 0, 6, 0, 5, -3, -5, -2, 5, -4, -6, -1, 2, -5],
    [-4, 6, 2, 2, 1, 6, 0, 6, 0, 2, -2, -5, -5, 2, -5, -6, 2, -2, -6],
    [-4, 5, -1, 4, 5, 5, 0, 6, 0, -2, -1, -5, -6, -2, -4, -3, 5, -5, -5],
    [-5, 5, -5, 4, 3, 2, 0, 5, 0, -2, -3, -5, -5, -2, -2, 0, 3, -5, -2],
    [-2, 5, -6, 1, -1, 1, 0, 5, 0, 1, -1, -2, -4, 1, 2, 1, -1, -4, 2],
    [4, -2, 5, -6, -1, -4, 1, 0, 5, 0, 5, 1, 1, -1, 5, 5, -2, -2, -1, 5],
    [2, -2, 5, -6, -1, -2, 1, 0, 3, 0, 6, 1, 1, 1, 6, 5, -5, 1, -1, 6],
    [-1, -5, 4, -6, 2, 1, 1, 0, -1, 3, 5, -2, -2, 4, 3, 2, -6, 5, -1, 3],
    [-1, -3, 2, -3, 2, 3, 1, 0, -5, 4, 2, -4, -2, 5, 0, -1, -5, 5, -3, 0],
    [2, 1, -1, 1, 0, 1, 1, 0, -3, 5, -2, -2, 1, 6, -1, -1, -2, 2, -1, -1],
    [5, 5, -4, 5, -4, -2, -1, 0, 0, 5, -5, 2, 5, 3, -1, -1, 2, -2, -1, -1],
    [6, 6, -4, 6, -4, -5, -1, 0, 4, 5, -5, 5, 6, 2, -1, 1, 5, -5, -2, 1],
    [6, 6, -5, 5, -2, -6, 1, 0, 5, 5, -2, 6, 6, 2, -1, 1, 6, -6, -5, 1],
    [6, 6, -5, 2, -1, -6, 1, 0, 6, 6, 2, 6, 5, 5, 2, 1, 3, -6, -6, 4],
    [6, 5, -3, -2, -1, -6, -2, 0, 6, 6, 5, 6, 2, 6, 5, -2, 0, -6, -6, 2],
    [5, 5, 1, -2, -1, -6, -4, 0, 6, 6, 6, 6, 1, 6, 6, -4, -1, -6, -5, 0],
    [2, 4, 2, 0, 2, -3, -4, 0, 3, 5, 6, 3, -1, 6, 6, -2, -1, -3, -2, -1],
    [-1, 2, 0, 1, 2, 1, -1, 0, -1, 2, 6, -1, -2, 5, 6, 1, -2, 1, 1, 1],
    [-1, 1, -1, 1, -1, 2, 2, 0, -2, 1, 5, -2, -2, 5, 6, 4, -2, 2, 4, 4],
    [-1, 2, 2, 2, -4, 0, 4, 0, 1, 1, 5, 1, 0, 4, 6, 4, 1, 0, 5, 4],
    [-2, 5, 5, 5, -5, -3, 5, 0, 5, 3, 4, 5, 3, 2, 3, 4, 5, -3, 3, 2],
    [-2, 6, 6, 6, -5, -4, 5, 0, 6, 4, 5, 6, 4, -2, 2, 4, 6, -4, 0, 1],
    [1, 6, 3, 5, -6, -4, 6, 0, 5, 4, 2, 5, 4, -5, 1, 2, 5, -4, -4, -1],
    [4, 6, 2, 2, -5, -5, 6, 0, 5, 4, -1, 5, 2, -5, 1, 0, 5, -5, -2, -1],
    [2, 6, 1, -2, -5, -4, 3, 0, 2, 4, -2, 5, -2, -2, -1, -4, 5, -4, 1, -4],
    [-2, 5, 4, -5, -5, -5, 0, 0, 2, 5, 1, 6, -5, 2, -1, -5, 5, -5, 5, -2],
    [-2, 2, 5, -5, -5, -4, -4, 0, 2, 5, 4, 5, -5, 5, 1, -6, 2, -5, 3, 1],
    [0, -2, 5, -2, -2, -5, -5, 0, 4, 5, 5, 2, -2, 6, 4, -5, 1, -3, 2, 5],
    [3, -2, 5, 2, -1, -2, -3, 0, 5, 4, 4, -1, 2, 3, 4, -4, 2, 1, 1, 6],
    [4, 0, 5, 5, 1, 1, 1, 0, 5, 5, 2, -4, 5, 0, 2, -4, 5, 5, 3, 6],
    [2, 4, 3, 6, -1, 5, 2, 0, 3, 2, -2, -4, 3, -3, -2, -5, 3, 6, 1, 3],
    [0, 2, -1, 3, -1, 6, 0, 0, -1, 0, -2, -5, 0, -1, -5, -5, -1, 6, -1, 0],
    [
      -1, -1, -2, 0, -4, 6, -1, 0, -2, -4, -2, -4, -4, -1, -6, -4, -5, 6, -4,
      -3,
    ],
    [2, -5, 0, -4, -4, 6, 2, 0, 0, -4, -2, -4, -4, -1, -6, -4, -5, 6, -5, -4],
    [2, -3, 1, -5, -5, 5, 4, 0, 1, -5, -5, -1, -5, -4, -5, -5, -5, 5, -6, -5],
    [-1, 0, -2, -6, -4, 5, 2, 0, -2, -5, -6, 1, -5, -5, -5, -6, -5, 5, -6, -6],
    [-5, 3, -5, -6, -4, 4, 1, 0, -5, -6, -3, 3, -6, -6, -4, -6, -6, 2, -6, -6],
    [-6, 1, -5, -5, -1, 5, 2, 0, -6, -5, 1, 1, -6, -5, -4, -3, -6, 2, -6, -3],
    [-6, -2, -5, -5, 2, 5, 2, 0, -6, -4, 5, -2, -6, -2, -1, 0, -6, 2, -6, 0],
    [-6, -2, -4, -2, 5, 5, 0, 0, -5, -4, 3, -4, -5, 1, -1, 4, -5, 4, -5, 4],
    [-5, 1, -2, 1, 3, 2, -3, 0, -2, -5, 0, -2, -4, 1, -2, 2, -2, 2, -5, 2],
    [-4, 5, 2, 5, -1, -2, -1, 0, 2, -5, -4, 2, -1, -1, -4, 0, 2, -2, -5, 0],
    [-4, 6, 5, 3, -5, -2, -1, 0, 2, -5, -2, 4, -1, -4, -4, -4, 2, -2, -6, -4],
    [-4, 3, 6, -1, -6, 1, -2, 0, 0, -4, 1, 2, -2, -5, -1, -5, 2, 1, -5, -5],
    [-5, 2, 6, -4, -6, 2, -5, 0, -4, -2, 5, 1, -4, -6, 2, -3, 2, 2, -5, -5],
    [-5, 1, 5, -5, -6, 0, -6, 0, -5, 2, 6, 1, -5, -5, 4, -2, 4, 0, -5, -5],
    [-6, 4, 5, -2, -6, -3, -6, 0, -6, 2, 3, 4, -2, -5, 5, -1, 5, -4, -5, -4],
    [-6, 5, 5, 1, -6, -3, -6, 0, -6, -1, -1, 5, 0, -4, 2, -1, 5, -5, -4, -2],
    [-6, 3, 3, 2, -3, -1, -3, 0, -6, -5, -5, 3, 1, -5, -1, 1, 5, -3, -4, 1],
    [-5, -1, 0, -1, 1, 2, 1, 0, -3, -6, -3, -1, -2, -5, -4, 1, 2, 1, -4, 1],
    [-2, -4, -1, -2, 2, 2, 5, 0, 1, -5, 1, -5, -2, -5, -2, -2, -2, 2, -2, -2],
    [2, -4, 2, 0, 0, -1, 6, 0, 5, -5, 5, -5, 0, -4, 2, -5, -4, -1, -1, -5],
    [4, -1, 2, 1, -1, -5, 3, 0, 3, -4, 6, -2, 1, -1, 2, -6, -2, -5, 1, -6],
    [4, 2, -1, -2, -1, -5, -1, 0, 0, -2, 3, 2, -2, 2, -1, -6, 2, -3, 1, -6],
    [3, 2, -2, -2, 1, -2, -2, 0, -1, 2, -1, 4, -2, 2, -5, -5, 5, 1, 4, -3],
    [1, 0, 1, -2, 2, 2, 1, 0, 1, 4, -5, 5, -2, -1, -6, -5, 5, 5, 5, -2],
    [-2, -4, 4, -2, 5, 5, 5, 0, 1, 2, -3, 2, -2, -5, -5, -2, 2, 6, 6, 1],
    [-4, -5, 2, -5, 6, 5, 5, 0, -2, -1, 1, -1, -5, -5, -2, -2, -2, 5, 6, 1],
    [-2, -6, -2, -3, 6, 4, 4, 0, -2, -1, 5, -5, -3, -2, 2, -1, -4, 5, 6, 3],
    [2, -5, -5, -2, 3, 1, 1, 0, 1, 1, 6, -5, 1, 1, 2, -4, -2, 4, 5, 3],
    [5, -5, -6, -2, 2, 1, -2, 0, 2, 1, 6, -5, 2, 3, -1, -5, -1, 5, 2, 1],
    [6, -2, -3, -4, 1, 1, -5, 0, 2, 1, 5, -4, 2, 4, -5, -5, 1, 4, -2, -1],
    [6, -2, 1, -2, 4, 4, -6, 0, 2, 2, 5, -5, 2, 4, -6, -2, 1, 5, -5, -4],
    [3, -1, 4, 1, 4, 5, -6, 0, 4, 4, 2, -4, 4, 2, -6, 2, 4, 5, -6, -5],
    [0, -1, 4, 4, 2, 3, -6, 0, 2, 5, -1, -2, 5, 1, -6, 5, 5, 3, -6, -3],
    [-4, 1, 4, 5, -2, 0, -6, 0, 1, 5, -5, 1, 5, 2, -6, 3, 6, 0, -5, 0],
    [-2, 1, 5, 6, -5, -1, -6, 0, 2, 6, -6, 1, 6, 4, -5, -1, 6, -1, -2, 3],
    [0, 1, 5, 6, -6, -1, -6, 0, 2, 6, -3, 1, 6, 5, -2, -2, 6, -1, 1, 4],
    [1, 1, 5, 5, -5, -1, -5, 0, -1, 6, 0, 1, 5, 5, -1, 1, 5, -1, 1, 5],
    [-2, 1, 4, 2, -2, -3, -4, 0, -5, 6, 3, 1, 2, 6, -1, 5, 2, -3, -1, 6],
    [-4, 1, 2, 1, 1, -4, -4, 0, -3, 6, 4, -1, 1, 5, -1, 6, -1, -4, -4, 6],
    [-2, -1, 1, 2, 3, -2, -4, 0, 1, 6, 2, -4, 2, 2, 1, 5, -1, -2, -4, 6],
    [-1, -2, 2, 5, 4, 1, -4, 0, 5, 6, -1, -4, 5, 1, 1, 2, 2, 1, -2, 3],
    [-2, -5, 2, 3, 2, 5, -4, 0, 3, 5, -4, -5, 3, 1, -1, -1, 4, 5, 2, -1],
    [-4, -5, 2, 0, -1, 3, -5, 0, 0, 2, -2, -5, 0, 1, -1, -1, 5, 5, 5, -2],
    [-2, -2, 2, -1, -5, -1, -6, 0, -1, -2, 1, -3, -1, -2, 1, 2, 4, 2, 5, 1],
    [1, -1, 5, 2, -3, -2, -5, 0, 2, -5, 1, -2, 2, -5, 3, 5, 2, 1, 5, 5],
    [4, -2, 6, 5, 1, 1, -4, 0, 5, -3, -2, -2, 5, -5, 1, 5, -2, 2, 4, 5],
    [5, -2, 3, 6, 2, 2, -4, 0, 5, 0, -4, -2, 6, -4, 1, 5, -5, 2, 4, 5],
    [5, 0, 0, 3, 0, -1, -5, 0, 2, 4, -2, 0, 3, -1, 1, 5, -6, -1, 1, 5],
    [2, 1, -3, -1, -1, -2, -6, 0, -2, 5, 2, 1, -1, 2, 3, 6, -5, -2, 1, 6],
    [-1, -1, -3, -4, 2, -2, -3, 0, -4, 6, 5, -1, -2, 4, 4, 6, -5, -2, 1, 6],
    [-1, -1, -4, -2, 2, -2, 1, 0, -4, 3, 5, -1, 0, 2, 4, 5, -5, -2, 1, 5],
    [2, 1, -5, 2, 0, -5, 5, 0, -3, -1, 5, -1, 3, -2, 4, 4, -6, -5, -1, 4],
    [4, 4, -5, 5, -4, -6, 6, 0, -1, -4, 2, 1, 4, -4, 1, 4, -3, -6, -4, 4],
    [5, 5, -2, 6, -5, -6, 5, 0, 2, -2, 0, 2, 5, -2, -1, 5, 0, -6, -4, 5],
    [4, 6, 2, 6, -3, -6, 5, 0, 5, 2, -4, 5, 6, -1, -4, 5, 1, -5, -2, 5],
    [2, 6, 2, 6, 0, -6, 2, 0, 3, 2, -4, 6, 5, -1, -5, 2, -2, -2, 1, 2],
    [-2, 5, -1, 3, 1, -3, -1, 0, -1, 0, -2, 6, 2, -1, -3, -2, -5, 2, 1, -2],
    [-5, 5, -5, 2, -2, -2, -4, 3, -5, -1, 2, 6, 1, 2, 1, -5, -6, 2, -2, -5],
    [-3, 2, -6, 2, -2, 1, -2, 1, -5, -1, 2, 5, 2, 5, 2, -6, -6, 2, -5, -6],
    [0, 0, -5, 5, -2, 2, 2, -2, -5, -2, -1, 4, 5, 3, -1, -6, -6, 1, -6, -6],
    [1, -1, -2, 6, -1, 2, 5, -4, -5, -4, -4, 3, 6, 0, -4, -5, -6, 1, -6, -5],
    [-1, 2, -1, 6, -1, -1, 6, -2, -3, -2, -2, 4, 6, -1, -2, -4, -3, -2, -5, -2],
    [-1, 4, 1, 5, 2, -4, 6, 2, 1, -1, -1, 4, 6, -1, -1, -4, 1, -4, -2, -1],
    [2, 2, 2, 5, 5, -4, 5, 5, 5, -2, -2, 4, 6, -1, -2, -2, 5, -4, 2, -1],
    [5, -2, 2, 5, 6, -4, 2, 6, 6, -4, -2, 1, 6, -1, -2, 1, 6, -4, 5, -1],
    [6, -5, 2, 6, 6, -2, -2, 6, 6, -2, 0, -2, 6, 2, 0, 5, 6, -2, 6, 2],
    [6, -6, 1, 6, 6, 0, -5, 5, 5, 1, 4, -5, 6, 5, 3, 6, 6, 1, 6, 5],
    [6, -6, 4, 5, 3, 1, -3, 4, 5, 1, 5, -6, 5, 5, 1, 5, 6, 4, 5, 5],
    [6, -6, 5, 5, 2, 1, 0, 4, 5, 1, 6, -6, 5, 5, 1, 5, 6, 5, 4, 5],
    [5, -5, 3, 5, 1, 2, 1, 5, 5, 2, 6, -6, 5, 5, 2, 5, 6, 4, 3, 5],
    [5, -5, 0, 6, 4, 5, -2, 6, 5, 5, 6, -6, 6, 5, 5, 6, 6, 5, 4, 6],
    [5, -5, -1, 6, 5, 6, -5, 6, 5, 3, 6, -6, 5, 2, 6, 6, 6, 5, 5, 6],
    [6, -3, 2, 6, 5, 3, -6, 5, 6, -1, 5, -6, 5, 1, 5, 6, 5, 3, 6, 5],
    [6, 1, 5, 6, 2, -1, -5, 5, 6, -2, 5, -3, 5, 2, 5, 6, 5, -1, 6, 5],
    [6, 4, 5, 6, -2, -5, -4, 5, 6, 1, 4, 0, 6, 5, 4, 6, 5, -5, 6, 5],
  ];
  const yLabels = [
    "AUTO",
    "BANKEX",
    "BSE_CD",
    "BSE_CG",
    "BSE_HC",
    "BSE_IT",
    "BSEFMC",
    "BSESER",
    "CDGS",
    "COMDTY",
    "ENERGY",
    "FIN",
    "INDSTR",
    "METAL",
    "OILGAS",
    "POWER",
    "REALTY",
    "TECK",
    "TELCOM",
    "UTILS",
  ];
  return (
    <HeatMapComponent
      className="h-auto w-[90%]"
      titleSettings={{
        text: "Dynamic Calculative Exposure",
        textStyle: {
          size: "15px",
          fontWeight: "500",
          fontStyle: "Normal",
          fontFamily: "Poppins",
        },
      }}
      xAxis={{
        labels: [
          "Jan2014",
          "Feb2014",
          "Mar2014",
          "Apr2014",
          "May2014",
          "Jun2014",
          "Jul2014",
          "Aug2014",
          "Sep2014",
          "Oct2014",
          "Nov2014",
          "Dec2014",
          "Jan2015",
          "Feb2015",
          "Mar2015",
          "Apr2015",
          "May2015",
          "Jun2015",
          "Jul2015",
          "Aug2015",
          "Sep2015",
          "Oct2015",
          "Nov2015",
          "Dec2015",
          "Jan2016",
          "Feb2016",
          "Mar2016",
          "Apr2016",
          "May2016",
          "Jun2016",
          "Jul2016",
          "Aug2016",
          "Sep2016",
          "Oct2016",
          "Nov2016",
          "Dec2016",
          "Jan2017",
          "Feb2017",
          "Mar2017",
          "Apr2017",
          "May2017",
          "Jun2017",
          "Jul2017",
          "Aug2017",
          "Sep2017",
          "Oct2017",
          "Nov2017",
          "Dec2017",
          "Jan2018",
          "Feb2018",
          "Mar2018",
          "Apr2018",
          "May2018",
          "Jun2018",
          "Jul2018",
          "Aug2018",
          "Sep2018",
          "Oct2018",
          "Nov2018",
          "Dec2018",
          "Jan2019",
          "Feb2019",
          "Mar2019",
          "Apr2019",
          "May2019",
          "Jun2019",
          "Jul2019",
          "Aug2019",
          "Sep2019",
          "Oct2019",
          "Nov2019",
          "Dec2019",
          "Jan2020",
          "Feb2020",
          "Mar2020",
          "Apr2020",
          "May2020",
          "Jun2020",
          "Jul2020",
          "Aug2020",
          "Sep2020",
          "Oct2020",
          "Nov2020",
          "Dec2020",
          "Jan2021",
          "Feb2021",
          "Mar2021",
          "Apr2021",
          "May2021",
          "Jun2021",
          "Jul2021",
          "Aug2021",
          "Sep2021",
          "Oct2021",
          "Nov2021",
          "Dec2021",
          "Jan2022",
          "Feb2022",
          "Mar2022",
          "Apr2022",
          "May2022",
          "Jun2022",
          "Jul2022",
          "Aug2022",
          "Sep2022",
          "Oct2022",
          "Nov2022",
          "Dec2022",
          "Jan2023",
          "Feb2023",
          "Mar2023",
          "Apr2023",
          "May2023",
          "Jun2023",
          "Jul2023",
          "Aug2023",
          "Sep2023",
          "Oct2023",
          "Nov2023",
          "Dec2023",
          "Jan2024",
          "Feb2024",
          "Mar2024",
          "Apr2024",
          "May2024",
          "Jun2024",
        ],
        textStyle: {
          fontFamily: "Poppins",
        },
        labelIntersectAction: "Rotate45",
      }}
      yAxis={{
        labels: yLabels,
        textStyle: {
          fontFamily: "Poppins",
        },
      }}
      cellSettings={{
        showLabel: false,
        border: { width: 0 },
        textStyle: {
          fontFamily: "Poppins",
        },
      }}
      paletteSettings={{
        palette: [
          { value: -6, color: "#b91c1c " }, // Green
          { value: -5, color: "#dc2626" }, // Light green
          { value: -4, color: "#ef4444" }, // Yellow
          { value: -3, color: "#f87171" }, // Orange
          { value: -2, color: "#fca5a5" }, // Red
          { value: -1, color: "#fecaca" }, // Red
          { value: 0, color: "#faf0e6" }, // Purple
          { value: 6, color: "#166534" },
          { value: 5, color: "#15803d" },
          { value: 4, color: "#16a34a" },
          { value: 3, color: "#22c55e" },
          { value: 2, color: "#4ade80" },
          { value: 1, color: "#86efac" },
        ],
        type: "Gradient",
      }}
      dataSource={heatmapData}
      showTooltip={true}
      legendSettings={{
        visible: true,
        position: "Right",
        showLabel: true,
        height: "500",
      }}
    >
      <Inject services={[Legend, Tooltip]} />
    </HeatMapComponent>
  );
}
