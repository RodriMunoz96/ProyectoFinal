import React from 'react';
import { Card } from 'react-bootstrap';

const defaultImage = "https://www.pexels.com/es-es/foto/ninos-riendo-entre-mujer-y-hombre-durante-el-dia-1206101/"; 

const StudentCards = ({
  id,
  image,
  firstName,
  lastName,
  courses,
  dob,
}) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image || defaultImage} alt={`${firstName} ${lastName}`} />
      <Card.Body>
        <Card.Title>{firstName} {lastName}</Card.Title>
        <Card.Text>Dob: {dob}</Card.Text>
        <Card.Text>Courses:</Card.Text>
        {Array.isArray(courses) && courses.length > 0 ? (
          <ul>
            {courses.map((course, index) => (
              <li key={index}>{course}</li>
            ))}
          </ul>
        ) : (
          <p>Courses were not found.</p>
        )}
      </Card.Body>
    </Card>
  );
};

export default StudentCards;