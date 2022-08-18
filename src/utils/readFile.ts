import fs from 'fs'

type readFileProps = {
    readFilePath: fs.PathOrFileDescriptor,
    readFileOptions: BufferEncoding,
    readFileCallBack: (err: NodeJS.ErrnoException | null, data: string) => void
}

export function readFile({readFilePath, readFileOptions, readFileCallBack}: readFileProps){
    fs.readFile(readFilePath, readFileOptions, readFileCallBack)

    return {
        readFilePath, 
        readFileOptions, 
        readFileCallBack
    }
}