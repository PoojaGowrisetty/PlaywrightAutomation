import { readFile, utils, writeFile } from 'xlsx';

function readExcelValue(filePath,sheetName) {
  const workbook = readFile(filePath);
  const actualsheetName = sheetName || workbook.SheetNames[0];
  const worksheet = workbook.Sheets[actualsheetName];
  const jsonData = utils.sheet_to_json(worksheet);
  return {
    data: jsonData,
    workbook,
    sheetName: actualsheetName
  } ;
}

/**
 * Writes data back to the Excel file.
 */
function writeExcelValue(filePath, data, sheetName, workbook) {
  const worksheet = utils.json_to_sheet(data, {
    header: ['username', 'password', 'result']
  });
  workbook.Sheets[sheetName] = worksheet;
  writeFile(workbook, filePath);
}

export default {
  readExcelValue,
  writeExcelValue
};