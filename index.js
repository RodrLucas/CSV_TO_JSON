const path = require('path')
const fs = require('fs')

//Getting folder path
const CSV_FOLDER_PATH = path.join(__dirname, 'CSV_FILES')

//Using readdir to send folderPath and a call back function will return files
fs.readdir(CSV_FOLDER_PATH, (err, files) => {
  if(err) console.log(err)

  //Create a directory folder
  const CONVERTED_FILES = path.join(__dirname, 'CONVERTED_FILES')
  //MUDAR LÓGICA -> CONVERTER OS ARQUIVOS SEM PRECISAR APAGAR A PASTA CONVERTED_FILES
  //TROCAR IF POR OBJECT LITERALS
  fs.mkdir(path.join(__dirname, 'CONVERTED_FILES'), err => {
    if(err) return console.error(err)
  })     

  //for each file, read with fs.readFile function
  files.forEach( file => {
    fs.readFile(`${CSV_FOLDER_PATH + '/' + file}`, 'utf-8', (err, data) => {
      if(err) return console.error(err)

      let stringData = data.toString()
      let itemsContent = stringData.split('\n')
      let header = itemsContent[0].split(',')
      let result = []   

      //I had difficulty on this logic
      //for each current line split ','

      //ALTERAR FOR POR REDUCE
        for (let i = 1; i < itemsContent.length; i++) {
          let obj = {}
          let currentLine = itemsContent[i].split(',')
          // console.log('currenteLine', currentLine)

          //for each line add a header value to obj KEY and a current itemsContent to obj VALUE
          for (let j = 0; j < header.length; j++) {
            obj[header[j]] = currentLine[j]
          }
          result.push(obj)
        }
        
        //Change the file extention
        let fileNameJson = file.replace('.csv', '.json')

        //Create a file in folder
        fs.writeFileSync(`${__dirname}/CONVERTED_FILES/${fileNameJson}`, JSON.stringify(result, null, 4), (err) => {
          if(err) console.error(err) 
          else console.log('File Written Successfully') 
        })
    })
  })
})