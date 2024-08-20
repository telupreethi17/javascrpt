class editdoctor{
    get DoctorSpeciali()
    {
        return $("//select[@name='Doctorspecialization']")
    }
    get Docname()
    {
        return $("//input[@name='docname']")
    }
    get DocClinicAddre()
    {
        return $("//textarea[@name='clinicaddress']")
    }
    get DocFees()
    {
        return $("//input[@name='docfees']")
    }
    get Doccontact()
    {
        return $("//input[@name='doccontact']")
    }
    get Docmail()
    {
        return $("//input[@name='docemail']")
    }
    get docupdate()
    {
        return $("//button[@class='btn btn-o btn-primary']")
    }
}
export default new editdoctor()