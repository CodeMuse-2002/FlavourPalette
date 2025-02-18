import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { profile } from "../services/user";
import Navbar from "../components/Navbar";

function Profile() {
  const [user, setUser] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editedUser, setEditedUser] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch user data from sessionStorage
    const storedUser = sessionStorage.getItem("user");

    if (storedUser) {
      try {
        const userData = JSON.parse(storedUser);
        setUser(userData);
        setEditedUser(userData); // Set initial edit values
      } catch (error) {
        console.error("Error parsing user data:", error);
        sessionStorage.removeItem("user");
      }
    } else {
      navigate("/");
    }
  }, [navigate]);

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedUser({ ...editedUser, [name]: value });
  };

  // Handle Save button
  const handleSave = async () => {
    try {
      const response = await profile(user.id, editedUser);

      if (response.status === "success") {
        sessionStorage.setItem("user", JSON.stringify(editedUser)); // Update session storage
        setUser(editedUser); // Update state
        setIsEditing(false);
        alert("Profile updated successfully!");
      }
    } catch (error) {
      console.error("Error updating profile:", error);
      alert("Failed to update profile.");
    }
  };

  return (
    <div className="container">
      <Navbar />
      <h2 className="text-center ">Profile</h2>

      {user ? (
        <div className="card p-4 shadow-lg rounded">
          <div className="row">
            <div className="col-md-6 mb-3">
              <label className="form-label"><strong>First Name:</strong></label>
              {isEditing ? (
                <input
                  type="text"
                  name="firstName"
                  value={editedUser.firstName}
                  onChange={handleInputChange}
                  className="form-control"
                />
              ) : (
                <p className="form-control-static">{user.firstName}</p>
              )}
            </div>

            <div className="col-md-6 mb-3">
              <label className="form-label"><strong>Last Name:</strong></label>
              {isEditing ? (
                <input
                  type="text"
                  name="lastName"
                  value={editedUser.lastName || ""}
                  onChange={handleInputChange}
                  className="form-control"
                />
              ) : (
                <p className="form-control-static">{user.lastName || "N/A"}</p>
              )}
            </div>
          </div>

          <div className=" col-md-6 mb-3">
            <label className="form-label"><strong>Email:</strong></label>
            <p className="form-control-static">{user.email} (Cannot be changed)</p>
          </div>

          {/* <div className="mb-3">
            <label className="form-label"><strong>Role:</strong></label>
            <p className="form-control-static">{user.role}</p>
          </div> */}

          <div className="col-md-6 mb-3">
            <label className="form-label"><strong>Card Number:</strong></label>
            {isEditing ? (
              <input
                type="text"
                name="cardNumber"
                value={editedUser.cardNumber || ""}
                onChange={handleInputChange}
                className="form-control"
                placeholder="Enter Card Number"
              />
            ) : (
              <p className="form-control-static">{user.cardNumber || "Not Provided"}</p>
            )}
          </div>

          {/* Address Section */}
          <div className="row">
            <div className="col-md-6 mb-3">
              <label className="form-label"><strong>City:</strong></label>
              {isEditing ? (
                <input
                  type="text"
                  name="city"
                  value={editedUser.city || ""}
                  onChange={handleInputChange}
                  className="form-control"
                  placeholder="Enter City"
                />
              ) : (
                <p className="form-control-static">{user.city || "Not Provided"}</p>
              )}
            </div>

            <div className="col-md-6 mb-3">
              <label className="form-label"><strong>State:</strong></label>
              {isEditing ? (
                <input
                  type="text"
                  name="state"
                  value={editedUser.state || ""}
                  onChange={handleInputChange}
                  className="form-control"
                  placeholder="Enter State"
                />
              ) : (
                <p className="form-control-static">{user.state || "Not Provided"}</p>
              )}
            </div>
          </div>

          {/* Edit & Save Buttons */}
          <div className="d-flex justify-content-between">
          <div className="text-center">
            {isEditing ? (
              <>
                <button className="btn btn-success me-3" onClick={handleSave}>Save</button>
                <button className="btn btn-secondary" onClick={() => setIsEditing(false)}>Cancel</button>
              </>
            ) : (
              <button className="btn btn-primary" onClick={() => setIsEditing(true)}>Edit Profile</button>
            )}
          </div>

          {/* Logout Button */}
          <div className="text-center">
            <button className="btn btn-danger" onClick={() => {
              sessionStorage.removeItem("user");
              navigate("/");
            }}>Logout</button>
          </div>
          </div>
        </div>
      ) : (
        <p className="text-center text-muted">Loading user details...</p>
      )}
    </div>
  );
}

export default Profile;
