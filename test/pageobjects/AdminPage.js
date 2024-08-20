class Admin{
    get usernametxtfld()
    {
        return $("//input[@name='username']")
    }
    get  pwdtxtfld()
    {
        return $("//input[@name='password']")
    }
    get loginbtn()
    {
        return $("//button[@class='btn btn-primary pull-right']")
    }
    get manageDoctor()
    {
        return $("//a[contains(.,'Total Doctors')]")
    }
    get editdoctor()
    {
    
        return $("//table[@class='table table-hover']/descendant::td[text()='sekhar']/ancestor::tr//a[@tooltip='Edit']")
    }
    get headerinfo_admin()
    {
        return $("//h1[contains(.,'Admin')]")
    }
    async login_Admin(u,pwd)
    {
        await this.usernametxtfld.setValue(u)
        await this.pwdtxtfld.setValue(pwd)
        await this.loginbtn.click()
    }

     
}
export default new Admin()