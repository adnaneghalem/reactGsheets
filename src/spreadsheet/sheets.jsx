import { addDataValues } from '../spreadsheet/addDataValues'
import { gapi } from 'gapi-script';


export function createGoogleSheet(data) {
    const columns = [ "country", "cases", "todayCases", "deaths",   "todayDeaths",  "recovered", "todayRecovered",  "active", "critical",   "casesPerOneMillion",   "deathsPerOneMillion",  "tests",    "testsPerOneMillion",   "population", "activePerOneMillion", "recoveredPerOneMillion", "criticalPerOneMillion" ]
  
    const request = {
      properties: {
        title: "WORLD COVID DATA" 
      },
      sheets: [
        { //sheet1
          properties: {
            title: "Sheet1",
            gridProperties: {
              columnCount: columns.length, 
              rowCount: data.length + 1, 
              frozenRowCount: 1,
              frozenColumnCount: 1,
            },
            tabColor: { 
              red: 1.0,
              green: 0.3,
              blue: 0.4
            },
          },
        },
        { //sheet2
          properties: {
            title: "Sheet2",
            gridProperties: {
              columnCount: columns.length, 
              rowCount: data.length + 1, 
              frozenRowCount: 1,
              frozenColumnCount: 1,
            },
            tabColor: { 
              red: 0.0,
              green: 0.0,
              blue: 1.0
            },
          },
        },            
      ],
    }
  
    gapi.client.sheets.spreadsheets.create(request)
      .then((response) => {
        addDataValues(response, data, columns)
        const url = response.result.spreadsheetUrl
        window.open(url, "_blank")
      });
  }