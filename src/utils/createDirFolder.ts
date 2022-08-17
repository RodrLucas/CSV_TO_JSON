const path = require('path')
import fs from 'fs'

type CreateDirFolderProps = {
    newFolderPath: fs.PathLike,
    getErrFolderPath: fs.NoParamCallback
}

export function createDirFolder({newFolderPath, getErrFolderPath}: CreateDirFolderProps ){

    fs.mkdir(newFolderPath, getErrFolderPath)

    return {
        newFolderPath,
        getErrFolderPath
    }
}