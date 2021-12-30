import { gapi } from 'gapi-script';

export function addFormatting(spreadsheet) {
    const spreadsheetId = spreadsheet.spreadsheetId;
    const sheet1Id = spreadsheet.sheets[0].properties.sheetId
    const sheet2Id = spreadsheet.sheets[1].properties.sheetId
  
    const requests = [
      { 
        repeatCell: {
          range: {
            sheetId: sheet1Id,
            startRowIndex: 0,
            endRowIndex: 1
          },
          cell: {
            userEnteredFormat: {
              textFormat: {
                bold: true
              }
            }
          },
          fields: "userEnteredFormat.textFormat.bold"
        }
      },
  
      // BOLD TEXT IN FIRST COLUMN
      { 
        repeatCell: {
          range: {
            sheetId: sheet1Id,
            startColumnIndex: 0,
            endColumnIndex: 1
          },
          cell: {
            userEnteredFormat: {
              textFormat: {
                bold: true
              }
            }
          },
          fields: "userEnteredFormat.textFormat.bold"
        }
      },
    ];
  
    const body = {requests: requests}
  
    gapi.client.sheets.spreadsheets.batchUpdate({
      spreadsheetId: spreadsheetId,
      resource: body
    }).then((response) => {
      console.log(`formatting and conditional formatting updated.`);
    });
  }