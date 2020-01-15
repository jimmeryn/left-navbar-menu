import { IData, IDataElement, INormalizedData } from "./types";

// function normalizeState(data: IData): INormalizedData {
//   const newData = data.properties.reduce(
//     (acc: INormalizedData, curr: IDataElement) => {
//       Object.keys(curr).forEach(key =>
//         key === "type" ? (acc[`${curr[key]}`] = {}) : null
//       );
//       return acc;
//     },
//     {}
//   );

//   newData.groups = [];
//   for (let prop in newData) {
//     if (prop !== "groups") {
//       newData[prop].byLabel = {};
//       newData[prop].allLabels = [];
//     }
//   }
//   data.forEach(e => {
//     newData.groups.indexOf(e.group) === -1
//       ? newData.groups.push(e.group)
//       : null;
//     let { type, ...newObject } = e;
//     newData[e.type].byLabel[e.label] = newObject;
//     newData[e.type].allLabels.push(e.label);
//   });

//   return newData;
// }
