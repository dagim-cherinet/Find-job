import Wrapper from "../../assets/wrappers/DashboardFormPage.js";
import { useAppContext } from "../../context/appContext";
import { FormRow, Alert } from "../../components/index.js";
import { useState } from "react";
const Profile = () => {
  const { user, showAlert, display_alert, updateUser, isLoading } =
    useAppContext();
  const [updatedUser, setUpdatedUser] = useState(user);
  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log(updatedUser);
    const { name, lastName, email, location } = updatedUser;
    if (!name || !lastName || !email || !location) {
      display_alert();
      return;
    }
    updateUser(updatedUser);
  };
  const handleChange = (e) => {
    // console.log(updatedUser);
    setUpdatedUser({ ...updatedUser, [e.target.name]: e.target.value });
  };
  return (
    <Wrapper>
      <form className="form" onSubmit={handleSubmit}>
        <h3>Profile</h3>
        {showAlert && <Alert />}
        <div className="form-center">
          <FormRow
            type="text"
            labelText="name"
            inputName="name"
            value={updatedUser?.name}
            handleChange={handleChange}
          />
          <FormRow
            type="text"
            labelText="last name"
            inputName="lastName"
            value={updatedUser?.lastName}
            handleChange={handleChange}
          />
          <FormRow
            type="email"
            labelText="email"
            inputName="email"
            value={updatedUser?.email}
            handleChange={handleChange}
          />
          <FormRow
            type="location"
            labelText="location"
            inputName="location"
            value={updatedUser?.location}
            handleChange={handleChange}
          />
          <button className="btn btn-block" type="submit" disabled={isLoading}>
            {isLoading ? "Please wait..." : "save changes"}
          </button>
        </div>
      </form>
    </Wrapper>
  );
};

export default Profile;
