const path = require("path");
import fs from "fs";

type CreateDirFolderProps = {
  CONVERTED_FILES_PATH: fs.PathLike;
  getErrFolderPath: fs.NoParamCallback;
};

export function createDirFolder({
  CONVERTED_FILES_PATH,
  getErrFolderPath,
}: CreateDirFolderProps) {
  fs.mkdir(CONVERTED_FILES_PATH, getErrFolderPath);

  return {
    CONVERTED_FILES_PATH,
    getErrFolderPath,
  };
}
