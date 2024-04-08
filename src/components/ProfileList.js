import React from 'react';
import Profile from './Profile';

function ProfileList({ profiles, onClickProfile }) {
  return (
    <div className="profile-list">
      {profiles.map(profile => (
        <Profile key={profile.id} profile={profile} onClick={() => onClickProfile(profile.id)} />
      ))}
    </div>
  );
}

export default ProfileList;
