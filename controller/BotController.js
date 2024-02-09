const { Controller, Response } = require("pepesan");
const f = require("../utils/Formatter");
const gsheet = require("../service/gsheet")

module.exports = class BotController extends Controller {


    async introduction(request) {
      return Response.menu.fromArrayOfString(
        [
          f("menu.daftarHarga"),
          f("menu.cekCucian")
        ],
        f("intro", [request.name]),
        f("template.menu")
      );
    }

    async daftarHarga(request) {
      await this.reply(f("daftarHargaTemplate"))
      return f("footer")
    }

    async cekCucian(request) {
     const responseStr =  await gsheet.getData(request.number)
     return this.reply (responseStr)

    }

    async sendBasicMenu(request){
      return Response.menu.fromArrayOfObject(
        [
          {
            value:`menu.back`,
            text: f("menu.back"),
            code:0

          }
        ] ,
        "",
        f("template.menu")

      )
    }

}