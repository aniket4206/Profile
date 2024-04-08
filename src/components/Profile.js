import React from 'react';
import { Card, Button, Stack } from 'react-bootstrap';
import user from './user.png'

function Profile({ profile, onClick }) {
  return (
    <Card className="profile" onClick={onClick} style={{ width: '17rem', margin: '10px' }}>
      <div style={{ textAlign: 'center', marginTop: '10px' }}>
        <img src={user} alt="User Logo" style={{ width: '50px', height: '50px' }} />
      </div>
      <Card.Body>
        <Card.Title style={{ textAlign: 'center' }}>{profile.name}</Card.Title>
        <Card.Text style={{ textAlign: 'justify' }}>
          {profile.description}
        </Card.Text>
        <Stack direction="horizontal" gap={2} justifyContent="end">
        <Button variant="success" onClick={onClick} >Update</Button>
        </Stack>
        
      </Card.Body>
    </Card>
  );
}

export default Profile;





