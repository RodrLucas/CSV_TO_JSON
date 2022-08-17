import fs from "fs";

type WriteFileProps = {
    writeFilePath: string | fs.PathOrFileDescriptor,
    dataFile: NodeJS.ArrayBufferView | string,
    getErr: fs.NoParamCallback
}

export function writeFile({writeFilePath, dataFile, getErr}: WriteFileProps){
    fs.writeFile(writeFilePath, dataFile, getErr)

    return {
        writeFilePath, 
        dataFile, 
        getErr
    }
}