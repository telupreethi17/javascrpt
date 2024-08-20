import HomePage from "../pageobjects/HomePage.js"
import AdminPage from "../pageobjects/AdminPage.js"
import EditDoctorInfoPage from "../pageobjects/EditDoctorInfoPage.js"
import { expect } from "chai"
import patientPage from "../pageobjects/patientPage.js"
import fs from "fs"
let dat=fs.readFileSync("./test/TestData/data.json")
let daata=JSON.parse(dat)
describe ("admin_login",()=>{
    it("admin_login",async()=>{
        await browser.url(daata.url)
        await browser.maximizeWindow()
        await browser.scroll(0,500)
        await HomePage.AdminloginLink.click()
        await AdminPage.login_Admin(daata.AdminName,daata.AdminPwd)
        let text =await AdminPage.headerinfo_admin.getText()


        await expect(text).to.include("ADMIN")

        await AdminPage.manageDoctor.click()
       let elem= await AdminPage.editdoctor
       await elem.scrollIntoView()
        await AdminPage.editdoctor.click()
        await EditDoctorInfoPage.DocFees.setValue(600)
        await EditDoctorInfoPage.docupdate.click()
        await HomePage.Adminlogout.click()
        await HomePage.addroplog.click()

        //login as patient
        await browser.scroll(0,500)
        await HomePage.patientsLogin.click()
        await AdminPage.login_Admin(daata.patient_Usn,daata.patient_pwd)
        await browser.pause(3000)
        await patientPage.bookappoint.click()
       await  $("//select[@name='Doctorspecialization']").selectByVisibleText(daata.doct_speci)
       await browser.pause(2000)
      
       await $("//select[@name='doctor']").selectByVisibleText('sekhar')
       await browser.pause(2000)
       
       let txt=await $("//select[@id='fees']/option").getText()
       console.log(txt);
      expect(txt).to.be.equal("600")
      
      
        


    
    })
})