import 'electron'
import webContents = Electron.webContents;
export type ipcEvent = Event & {frameId:number, returnValue:any, sender:webContents, reply:Function}
