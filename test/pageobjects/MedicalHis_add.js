class medical

{
    get patient()
    {
        return $("//div[@class='item-inner' and contains(.,' Patients ')]")
    }
    get Managepatient()
    {
        return $("//ul[@class='sub-menu']/descendant::span[text()=' Manage Patient ']")
    }
    get managePatient()
    {
        return $("//div[@class='col-md-12']/descendant::td[last()]/a/i[@class='fa fa-eye']")
    }
    get addMedicalHist()
    {
        return $("//button[@class='btn btn-primary waves-effect waves-light w-lg']")
    }
    get bloodpressure()
    {
        return $("//input[@placeholder='Blood Pressure']")
    }
    get BloodSugar()
    {
        return $("//table[@class='table table-bordered table-hover data-tables']/descendant::tr[2]/td/input")
    }
}
export default new medical()