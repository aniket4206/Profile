import React, { useState } from 'react';
import ProfileList from './components/ProfileList';
import Map from './components/Map';
import ProfileForm from './components/ProfileForm';
import './styles/App.css';
import { Navbar, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [profiles, setProfiles] = useState([
    { id: 1, name: 'Aniket Sinare', description: 'Lorem ipsum  React Hook useEffect has a missing dependency ither include it or remove the dependency arr' , address: '18.433001122760487, 76.54168906353136'},
    { id: 2, name: 'Niraj Sury', description: 'Lorem ipsum  React Hook useEffect has a missing dependency ither include it or remove the dependency arr', address: '18.425835392010764, 76.55276122225843' },
    { id: 3, name: 'Abhijit raut ', description: 'React Hook useEffect has a missing Lorem ipsum', address: '18.425835392010764, 76.55276122225843' },

  ]);
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [showProfileForm, setShowProfileForm] = useState(false);

  const handleAddProfile = (newProfile) => {
    setProfiles(prevProfiles => [...prevProfiles, { ...newProfile, id: Date.now() }]);
  };

  const handleEditProfile = (updatedProfile) => {
    setProfiles(prevProfiles => prevProfiles.map(profile => {
      if (profile.id === updatedProfile.id) {
        return updatedProfile;
      }
      return profile;
    }));
  };

  const handleDeleteProfile = (profileId) => {
    setProfiles(prevProfiles => prevProfiles.filter(profile => profile.id !== profileId));
  };

  const handleProfileClick = (profileId) => {
    const profile = profiles.find(profile => profile.id === profileId);
    setSelectedProfile(profile);
  };

  return (
    <>
    <Container fluid>
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand>Profile System</Navbar.Brand>
      </Container>
    </Navbar>
  </Container>
    <div className="app">
      
      <div className="profiles">
        <h1 style={{ margin: '16px' }}>Profiles</h1>
        <ProfileList profiles={profiles} onClickProfile={handleProfileClick} onDeleteProfile={handleDeleteProfile} />
      </div>
      <div className="map">
        <Map profiles={profiles} />
      </div>
      {selectedProfile && (
        <ProfileForm profile={selectedProfile} onSave={handleEditProfile} onClose={() => setSelectedProfile(null)} />
      )}
      {showProfileForm && (
        <ProfileForm onSave={handleAddProfile} onClose={() => setShowProfileForm(false)} />
      )}
    </div>
    </>
  );
}

export default App;
