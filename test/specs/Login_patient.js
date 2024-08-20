import HomePage from "../pageobjects/HomePage.js"
import AdminPage from "../pageobjects/AdminPage.js"
import patientPage from "../pageobjects/patientPage.js"
import fs from "fs"
let data=fs.readFileSync("./test/TestData/data.json")
let dat=JSON.parse(data)
describe("login as patient",()=>{
    it("login as patient",async()=>{
        await browser.url(dat.url)
        await browser.maximizeWindow()
        await browser.scroll(0,500)
        await HomePage.patientsLogin.click()
        await AdminPage.login_Admin(dat.patient_Usn,dat.patient_pwd)
        await patientPage.bookappoint.click()
        await  $("//select[@name='Doctorspecialization']").selectByVisibleText(dat.doct_speci)
        await $("//select[@name='doctor']").selectByVisibleText(dat.doct_name)
        await browser.scroll(0,500)
        await patientPage.datearea.click()
        await patientPage.dateselect.click()
        await patientPage.timearea.click()
        await patientPage.setHour.setValue(7)
        await patientPage.setminute.setValue(30)
        await patientPage.setMeridian.setValue("AM")
        await patientPage.submitbtn.click()
        await $("//span[@class='username']").click()
        await patientPage.lououtpatient.click()
       
        
        
        
        


        
    })
})