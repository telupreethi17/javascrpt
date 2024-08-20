class pateient
{
    get username()
    {
        return $("//input[@name='username']")
    }
    get password()
    {
        return $("//input[@name='password']")
    }
    get loginbtn()
    {
        return $("//button[@class='btn btn-primary pull-right']")
    }
    get bookappoint()
    {
        return $("//a[contains(.,' Book Appointment')]")
    }
    get datearea()
    {
        return $("//input[@class='form-control datepicker']")
    }
    get dateselect()
    {
        return $("//table[@class=' table-condensed']/descendant::td[text()='26']")
    }
    get timearea()
    {
        return $("//input[@id='timepicker1']")
    }
    get setHour()
    {
        return $("//input[@class='bootstrap-timepicker-hour form-control']")
    }
    get setminute()
    {
        return $("//input[@class='bootstrap-timepicker-minute form-control']")
    }
    get setMeridian()
    {
        return $("//input[@class='bootstrap-timepicker-meridian form-control']")
    }
    get submitbtn()
    {
        return $("//button[@name='submit']")
    }
    get lououtpatient()
    {
        return $("//ul[@class='dropdown-menu dropdown-dark']/descendant::a[contains(.,'Log Out')]")
    }
}
export default new pateient()