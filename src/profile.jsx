import profileData from "./profileData";
import ProfileHeader from "./profileHeader";
import ProfileDetails from "./profiledetails";
import About from "./about";
import Skills from "./skills";
import Contact from "./contact";

function Profile() {
  return (
    <div className="profile-card">
      <ProfileHeader profile={profileData} />
      <ProfileDetails profile={profileData} />
      <About description={profileData.about} />
      <Skills />
      <Contact
        email={profileData.email}
        phone={profileData.phone}
      />
    </div>
  );
}

export default Profile;