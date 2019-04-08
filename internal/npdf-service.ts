import {nopodofo as npdf} from 'nopodofo'
import {ipcMain} from 'electron'
import {ipcEvent} from '../defines'

export default class NpdfService {
  private doc: npdf.Document

  constructor(public filePath: string) {
    ipcMain.on('npdf-load', this.load)
  }

  public async load(event: ipcEvent, arg?: { password?: string }) {
    this.doc.load(this.filePath, e => {
      if (e) {
        if (e.message.match(/Password required/ig)) {
          if (arg!.password) {
            try {
              this.doc.setPassword(arg.password)
            } catch (ee) {
              //todo: handle error with dialog
            }
          }
          //todo: add dialog for password required
        } else {
          throw e // todo: add error dialog factory for this type of error message
        }
      }
      event.sender.send('npdf-load-response', {})
      return
    })
  }

  public info(event: ipcEvent, arg?:Object) {
    event.returnValue(this.doc.info)
  }

}
