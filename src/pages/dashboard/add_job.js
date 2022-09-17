import { FormRow, Alert, FormRowSelect } from "../../components";
import { useAppContext } from "../../context/appContext";
import Wrapper from "../../assets/wrappers/DashboardFormPage";
const AddJob = () => {
  const {
    isLoading,
    isEditing,
    showAlert,
    display_alert,
    position,
    company,
    jobLocation,
    jobType,
    jobTypeOptions,
    status,
    statusOptions,
    handleChange,
    clearValues,
    createJob,
    editJob,
  } = useAppContext();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!position || !company || !jobLocation) {
      display_alert();
      return;
    }
    //console.log("create job");
    if (isEditing) {
      editJob();
      return;
    }
    createJob();
  };
  const handleJobInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    handleChange({ name, value });
    // console.log(`${name} : ${value}`);
  };
  return (
    <Wrapper>
      <form className="form">
        <h3>{isEditing ? "Edit Job" : "Add Job"}</h3>
        {showAlert && <Alert />}
        <div className="form-center">
          {/* position */}
          <FormRow
            inputName="position"
            value={position}
            handleChange={handleJobInput}
          />
          {/* company */}
          <FormRow
            inputName="company"
            value={company}
            handleChange={handleJobInput}
          />
          {/* location */}
          <FormRow
            inputName="location"
            value={jobLocation}
            labelText="job location"
            handleChange={handleJobInput}
          />
          {/* job status */}
          <FormRowSelect
            inputName="status"
            value={status}
            options={statusOptions}
            handleChange={handleJobInput}
          />
          {/* job type */}
          <FormRowSelect
            inputName="jobType"
            labelText="job type"
            value={jobType}
            options={jobTypeOptions}
            handleChange={handleJobInput}
          />
          {/* btn container */}
          <div className="btn-container">
            <button
              type="submit"
              className="btn btn-block submit-btn"
              onClick={handleSubmit}
              disabled={isLoading}
            >
              submit
            </button>
            <button
              type="submit"
              className="btn btn-block clear-btn"
              onClick={(e) => {
                e.preventDefault();
                clearValues();
              }}
            >
              clear
            </button>
          </div>
        </div>
      </form>
    </Wrapper>
  );
};

export default AddJob;
