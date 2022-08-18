import fs from "fs";

type IReadCsvDirProps = {
  CSV_FOLDER_PATH: fs.PathLike;
  readCsvDirOptions: any;
  readCsvDirCallBack: (
    err: NodeJS.ErrnoException | null,
    files: fs.Dirent[]
  ) => void;
};

export function readCsvDir({
  CSV_FOLDER_PATH,
  readCsvDirOptions,
  readCsvDirCallBack,
}: IReadCsvDirProps) {
  fs.readdir(CSV_FOLDER_PATH, readCsvDirOptions, readCsvDirCallBack);

  return {
    CSV_FOLDER_PATH,
    readCsvDirOptions,
    readCsvDirCallBack,
  };
}
