class homepage
{
    get AdminloginLink()
    {
        return $("//h3[text()='Admin Login']/parent::div/descendant::a")
    }
    get DoctorsLogin()
    {
        return $("//h3[text()='Doctors Login']/parent::div/descendant::a")
    }
    get patientsLogin()
    {
        return $("//h3[text()='Patients']/parent::div/descendant::a")
    }
    get Adminlogout()
    {
        return $("//span[@class='username']")
    }
    get addroplog()
    {
        return $("//ul[@class='dropdown-menu dropdown-dark']/li/a[contains(.,'Log Out')]")
    }
}
export default new homepage()