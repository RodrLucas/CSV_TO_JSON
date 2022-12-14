const path = require("path");
import fs from "fs";
import { readCsvDir } from "./utils/readCsvDir";
import { MakeDirFolder } from "./utils/createDirFolder";
import { readFile } from "./utils/readFile";
import { writeFile } from "./utils/writeFile";

const CONVERTED_FILES_PATH = path.join(__dirname, "CONVERTED_FILES");
const getErrFolderPath = (errFolderPath: NodeJS.ErrnoException | null) => {
  if (errFolderPath) return console.error(errFolderPath);
};
const mkdir = new MakeDirFolder
mkdir.create({ CONVERTED_FILES_PATH, getErrFolderPath })


const CSV_FOLDER_PATH = path.join(__dirname, "CSV_FILES");
const readCsvDirOptions = { encoding: "utf-8", withFileTypes: true };
const readCsvDirCallBack = (err: NodeJS.ErrnoException | null, files: fs.Dirent[]) => {
  if (err) console.log(err.message);
  console.log('files', files)

  files.forEach(({ name }) => {
    const readFilePath = `${CSV_FOLDER_PATH + "/" + name}`;
    const readFileOptions = "utf-8";
    const readFileCallBack = (err: NodeJS.ErrnoException | null, data: string) => {
      if (err) return console.error(err.message);

      let itemsContent = data.split("\n");
      let header = itemsContent[0].split(",");
      let result = [];

      //I had difficulty on this logic
      //ALTERAR FOR POR REDUCE
      for (let i = 1; i < itemsContent.length; i++) {
        let obj: any = {};
       
        let currentLine = itemsContent[i].split(",");

        //for each line add a header value to obj KEY and a current itemsContent to obj VALUE
        for (let j = 0; j < header.length; j++) {
          obj[header[j]] = currentLine[j];
        }
        result.push(obj);
      }

      let changeFileExtention = name.replace(".csv", ".json");

      const writeFilePath = `${__dirname}/CONVERTED_FILES/${changeFileExtention}`;
      const dataFile = JSON.stringify(result, null, 4);
      const getErr = (err: NodeJS.ErrnoException | null) => {
        if (err) console.log(err.message);
        else console.log("File Written Successfully");
      };
      writeFile({ writeFilePath, dataFile, getErr });
    };

    readFile({ readFilePath, readFileOptions, readFileCallBack });
  });
};
readCsvDir({ CSV_FOLDER_PATH, readCsvDirOptions, readCsvDirCallBack });
