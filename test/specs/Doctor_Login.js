import doctor from "../pageobjects/DoctorPage.js"
import HomePage from "../pageobjects/HomePage.js"
import fs from "fs"
let dataaa=fs.readFileSync("./test/TestData/data.json")
let dat=JSON.parse(dataaa)
describe("doctorLogin",()=>{
    it("doctorLogin",async()=>{
        await browser.url(dat.url)
        await browser.url(dat.url)
        await browser.maximizeWindow()
        await browser.scroll(0,500)
        await HomePage.DoctorsLogin.click()

        await doctor.doctUsernm.setValue(dat.doc_unm)
        await doctor.doctpwd.setValue(dat.doc_pwd)
         await doctor.loginbtn.click()
         await doctor.Docappointhistory.click()
         let text=await doctor.patient_oppointmet.getText()
         console.log(text);

    })
})