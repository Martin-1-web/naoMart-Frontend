import { Component } from '@angular/core';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent {

   courses = [
    {
      title: 'Frontend Development',
      duration: '3 Months',
      description: 'Learn HTML, CSS, JavaScript, and modern frameworks like Angular or React to build responsive websites.'
    },
    {
      title: 'Backend Development',
      duration: '3 Months',
      description: 'Master Node.js, Express, APIs, and databases like MongoDB or MySQL for full backend systems.'
    },
    {
      title: 'Mobile App Development',
      duration: '4 Months',
      description: 'Design and build cross-platform mobile apps using Flutter or React Native.'
    },
    {
      title: 'UI/UX Design',
      duration: '2 Months',
      description: 'Focus on user-centered design, wireframing, and prototyping using tools like Figma or Adobe XD.'
    },
    {
      title: 'Cybersecurity Basics',
      duration: '2.5 Months',
      description: 'Understand the fundamentals of digital security, network safety, and threat prevention.'
    },
    {
      title: 'Data Science & Python',
      duration: '3 Months',
      description: 'Get started with Python programming, data analysis, and basic machine learning.'
    }
  ];
}
