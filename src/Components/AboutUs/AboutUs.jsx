

import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <h1>About Resume Builder</h1>
      <p>Welcome to the Resume Builder, your go-to solution for creating professional resumes with ease. Our tool is designed to help you build a detailed and attractive resume that stands out to potential employers.</p>
      
      <h2>Features</h2>
      <ul>
        <li>Personal Information Section: Add your name, contact details, and social profiles.</li>
        <li>Education Section: Detail your academic background with degrees, institutions, and descriptions.</li>
        <li>Experience Section: Highlight your work experience with roles, companies, and job descriptions.</li>
        <li>Skills Section: List your skills and competencies.</li>
        <li>Certifications: Add certifications with details like issuing organization and credential URLs.</li>
        <li>Languages: Specify the languages you speak and your proficiency levels.</li>
        <li>Projects: Showcase your projects with descriptions and links.</li>
        <li>Hobbies: Share your hobbies and interests.</li>
      </ul>

      <h2>How to Use</h2>
      <ol>
        <li>Fill out each section of the form with your relevant information.</li>
        <li>Click the "Add" buttons to include multiple entries in sections like Education and Experience.</li>
        <li>Review your details to ensure everything is accurate and complete.</li>
        <li>Submit the form to generate your resume.</li>
      </ol>

      <h2>Benefits</h2>
      <p align = "left">Using our Resume Builder, you can:</p>
      <ul>
        <li>Save time by quickly inputting and organizing your information.</li>
        <li>Create a professional-looking resume that is easy to update.</li>
        <li>Ensure all essential sections are covered for a comprehensive resume.</li>
        <li>Export your resume in a format that's ready to share with employers.</li>
      </ul>

      <p>We hope our Resume Builder helps you in your job search and career advancement. Good luck!</p>
    </div>
  );
};

export default About;
