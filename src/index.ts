const path = require('path')
import fs from 'fs'
import { writeFile } from './utils/writeFile'
import { createDirFolder } from './utils/createDirFolder'

//Getting folder path
const CSV_FOLDER_PATH = path.join(__dirname, 'CSV_FILES')

//Using readdir to send folderPath and a call back function will return files
fs.readdir(CSV_FOLDER_PATH, {encoding: 'utf-8', withFileTypes: true} ,(err, files) => {
  if(err) console.log(err)
  
  //Create a directory folder
  //MUDAR LÓGICA -> CONVERTER OS ARQUIVOS SEM PRECISAR APAGAR A PASTA CONVERTED_FILES
  //TROCAR IF POR OBJECT LITERALS
    const newFolderPath = path.join(__dirname, 'CONVERTED_FILES')
    const getErrFolderPath = (errFolderPath: any) => {
        if(errFolderPath) return console.error(errFolderPath)
    }
    createDirFolder({newFolderPath, getErrFolderPath})

  //for each file, read with fs.readFile function
  files.forEach( ({name}) => {
    fs.readFile(`${CSV_FOLDER_PATH + '/' + name}`, 'utf-8', (err, data) => {
      if(err) return console.error(err)

      let itemsContent = data.split('\n')
      let header = itemsContent[0].split(',')
      let result = []

      //I had difficulty on this logic
      //for each current line split ','
      //ALTERAR FOR POR REDUCE
        for (let i = 1; i < itemsContent.length; i++) {
          let obj: any = {}
          let currentLine = itemsContent[i].split(',')
          // console.log('currenteLine', currentLine)

          //for each line add a header value to obj KEY and a current itemsContent to obj VALUE
          for (let j = 0; j < header.length; j++) {
            obj[header[j]] = currentLine[j]
          }
          result.push(obj)
        }
        
        //Change the file extention
        let fileNameJson = name.replace('.csv', '.json')

        //Create a file in folder
        const writeFilePath = `${__dirname}/CONVERTED_FILES/${fileNameJson}`
        const dataFile = JSON.stringify(result, null, 4)
        const getErr = (err: any) => {
            if(err) console.log(err)
            else console.log('File Written Successfully') 
        }
        writeFile({writeFilePath, dataFile, getErr })
    })
  })
})