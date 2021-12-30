import { addFormatting } from '../spreadsheet/addFormatting'

export function addDataValues(response, spreadsheetData, columns) {
    const spreadsheet = response.result
    const spreadsheetId = response.result.spreadsheetId;
  
    const valuesSheet1 = [columns]
  
    spreadsheetData.forEach(country => {
      const row = []
      columns.forEach(heading => {
        row.push(country[heading])
      })
      valuesSheet1.push(row)
    })
  
    // const valuesSheet2 = 
  
    const data = [];
    data.push(
      {
        range: "Sheet1",
        values: valuesSheet1
      },
      // {
        // range: "Sheet2",
        // values: valuesSheet2
      // }
    );
  
    const body = {
      data: data,
      valueInputOption: "USER_ENTERED"
    };
  
    window.gapi.client.sheets.spreadsheets.values.batchUpdate({
      spreadsheetId: spreadsheetId,
      resource: body
    }).then(() => addFormatting(spreadsheet));
  }