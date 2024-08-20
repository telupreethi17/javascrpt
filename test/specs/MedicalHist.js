import fs from "fs"
import MedicalHis_add from "../pageobjects/MedicalHis_add.js"
import HomePage from "../pageobjects/HomePage.js"
import doctor from "../pageobjects/DoctorPage.js"
let cred=fs.readFileSync("./test/TestData/data.json")
let deta=JSON.parse(cred)
describe("login as patient",()=>{
    it("login as patient",async()=>{
        await browser.url(deta.url)
        await browser.maximizeWindow()
        await browser.scroll(0,500)
        await HomePage.DoctorsLogin.click()
        await doctor.doctUsernm.setValue(deta.doc_unm)
        await doctor.doctpwd.setValue(deta.doc_pwd)
         await doctor.loginbtn.click()
         await MedicalHis_add.patient.click()
         await MedicalHis_add.Managepatient.click()
         await MedicalHis_add.managePatient.click()
         await browser.scroll(0,500)
         await MedicalHis_add.addMedicalHist.click()
         let wind=await browser.getWindowHandles()
         console.log(wind);
         await browser.switchToWindow(wind[0])
         await MedicalHis_add.bloodpressure.setValue(80)
        





    })
})