/**
 * Team — ported from the old kfoco.com "Our Team" page (English only on the old site).
 */
export interface TeamMember {
  name: string;
  role: string;
  experience?: string;
  certificate?: string;
  projects?: string[];
  bio?: string[];
  previous?: string[];
  email: string;
}

export const team: TeamMember[] = [
  { name: 'Eng. Khaled Alfagih', role: 'Founder & CEO', bio: ['Khaled Alfagih AIA has a vast experience of over 25 years with highly proficient record in almost all aspects of design and construction.', 'Khaled has played a leading role in a number of healthcare projects and engineering consultancy in the kingdom.', 'He has a marvelous record of conducting numerous projects for Dallah health care including their pharmaceutical and medical facilities besides other well-respected clients.'], email: 'ceo@kfoco.com' },
  { name: 'Fuad Aldenah', role: 'Project Manager', certificate: 'BSc Mechanical Engineering - Riyadh University', experience: '37 Year', projects: ['Dallah Complex Al-Nakheel District - Project Manager: Dallah Parking, Dallah Pedia Hospital, Dallah North Clinics Complex, Dallah Internal Clinics Renovation, Dallah Link Bridge', 'Dr. Mohammad Al-Fagih Hospital - Project Manager', 'Dr. Mohammed Alfagih Hospital - Supervision', 'Dallah Hospital – North Clinics', 'Dallah Hospital – Clinics Renovation', 'Dallah Hospital - Link Bridge', 'Dallah Hospital - Pedia', 'Dallah Hospital – OB. GYN', 'Dallah Hospital - Car Parking', 'King Khaled Eye Specialist Hospital Main Building'], previous: ['National Guard Ministry - M&O department 29 years: Mechanical Super intendant, Work Control Manager, Studies Engineer', 'Rashid Engineering - 4 years: King Khalid Specialist Eye Hospital, King Fasil Specialist Hospital, Palaces Complex at Al-Qaseem District'], email: 'fuad@kfoco.com' },
  { name: 'Husam Riyad', role: 'Senior Structural Engineer', experience: '27 Year', projects: ['Dr. Mohammed Alfagih Hospital - Supervision'], email: 'husam@kfoco.com' },
  { name: 'Bassil Al Sahli', role: 'Assistant Engineer', experience: '17 Year', email: 'basil@kfoco.com' },
  { name: 'Amjad Tannineh', role: 'Project Manager', experience: '13 Year', projects: ['Dr. Mohammed Alfagih Hospital - Supervision', 'Almaarefa University', 'Dallah Hospital – Namar', 'Medical Facilities Development in El-Ehssa', 'Dr. Mohammed Alfagih Hospital - Design', 'Dallah Hospital – North Clinics', 'Dallah Hospital – West Expansion', 'Dallah Hospital – South Expansion', 'Dallah Hospital – Clinics Renovation', 'Almaarefa PY', 'Sulaiman Al Rajhi College', 'Dallah Hospital - Link Bridge'], email: 'amjad@kfoco.com' },
  { name: 'Elbara Abdullah', role: 'Mechanical Engineer', experience: '12 Year', email: 'elbara@kfoco.com' },
  { name: 'Alvin Sabren', role: 'Electrical Engineer', experience: '12 Year', email: 'alvin@kfoco.com' },
  { name: 'Saad Aldumaykh', role: 'HR Manager', experience: '8 Year', email: 'Saad@kfoco.com' },
  { name: 'Wael Abdullfatah', role: 'Project Scheduler', experience: '7 Year', email: 'wael@kfoco.com' },
  { name: 'Abdullah Bureykah', role: 'Architectural Engineer', experience: '7 Year', email: 'abdullah@kfoco.com' },
  { name: 'Suliman Alfagih', role: 'Finance and Admin Manager', experience: '5 Year', email: 'suliman@kfoco.com' },
  { name: 'Abdullah Alyaheya', role: 'Logistics Assistant', experience: '3 Year', email: 'abdullah@kfoco.com' }
];
