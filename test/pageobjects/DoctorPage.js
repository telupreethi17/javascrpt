class doctor{
    get doctUsernm()
    {
        return $("//input[@name='username']")
    }
    get doctpwd()
    {
        return $("//input[@name='password']")
    }
    get loginbtn()
    {
        return $("//button[@class='btn btn-primary pull-right']")
    }
    get Docappointhistory()
    {
        return $("//div[@class='panel-body']/descendant::a[contains(.,'View Appointment History')]")
    }
    get patient_oppointmet()
    {
        return $("//table[@class='table table-hover']/descendant::tr[last()]/td[2]")
    }

}
export default new doctor()