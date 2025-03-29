// import React from 'react';
import './DirectorshipPositions.css';

export default function DirectorshipPositions() {
  const positions = [
    {
      id: 0,
      title: 'President',
      description: 'The President ensures the club’s professional and leadership development activities are successful and that its service projects benefit the community.',
      duties: [
        'Preside over all regular and special meetings of the club and the board of directors.',
        'Oversee club functions and operations.',
        'Actively promote Rotaract and this club through legal methods that reflect the Rotary spirit of goodwill and friendship.',
        'Set future visions and goals for the club and oversee that they are carried out and met.',
        'Maintain strong relations with the sponsoring Rotary club(s) and establish new relationships with Rotary clubs abroad.',
      ],
      powers: [
        'Call any special meetings of the club and the board of directors.',
        'Create and assign tasks and assignments to the Vice President and other Directors.',
      ],
    },
    {
      id: 1,
      title: 'Vice President',
      description: 'The Vice President assists the President and presides over meetings in the President’s absence.',
      duties: [
        'Preside over meetings in the absence of the President.',
        'Assist the President in overseeing club functions and operations.',
        'Help set future visions and goals for the club.',
        'Maintain strong relations with the sponsoring Rotary club(s) and other partners.',
      ],
      powers: [
        'Call meetings of the club and the board of directors during the absence of the President.',
        'Create and assign tasks and assignments to any Director.',
      ],
    },
    {
      id: 2,
      title: 'Secretary',
      description: 'The Secretary ensures the club functions efficiently by maintaining records and communication.',
      duties: [
        'Maintain all club records, including membership, attendance, and important documents.',
        'Take meeting minutes and ensure they are communicated to attendees.',
        'Track attendance and apply attendance rules.',
        'Assist the President in ensuring the club meets deadlines.',
      ],
      powers: [
        'Track attendance and apply attendance rules.',
        'Regularly update club data for active members.',
      ],
    },
    {
      id: 3,
      title: 'Community Service Director',
      description: 'The Community Service Director organizes projects that address community needs and opportunities.',
      duties: [
        'Conduct service projects that include assessments, planning, and evaluation.',
        'Develop goals for community service projects.',
        'Create a balanced program of service.',
      ],
      powers: [
        'Host community service projects.',
        'Commit to community service-related projects on behalf of the club.',
      ],
    },
    {
      id: 4,
      title: 'Treasurer',
      description: 'The Treasurer oversees the club’s financial transactions and fundraising efforts.',
      duties: [
        'Maintain a record of the club’s financial transactions.',
        'Deposit proceeds from fundraising projects.',
        'Collect membership dues and maintain a record of paid members.',
      ],
      powers: [
        'Oversee the club’s bank account.',
        'Approve reimbursements.',
      ],
    },
    {
      id: 5,
      title: 'Director of Professional Development',
      description: 'The Director of Professional Development enhances members’ professional skills through events and projects.',
      duties: [
        'Organize professional development events.',
        'Maintain a database of professional contacts.',
        'Deliver regular updates to the President and Vice President.',
      ],
      powers: [
        'Create professional development projects and events.',
        'Commit to professional development projects on behalf of the club.',
      ],
    },
    {
      id: 6,
      title: 'Director of Club Service',
      description: 'The Director of Club Service focuses on member recruitment and retention through fellowships and socials.',
      duties: [
        'Organize fellowships for club members.',
        'Maintain a database of Rotaractors and their engagement levels.',
        'Develop strategies for membership development and retention.',
      ],
      powers: [
        'Create fellowship projects or socials for the club.',
        'Commit to fellowship-related projects on behalf of the club.',
      ],
    },
    {
      id: 7,
      title: 'Director of Public Relations',
      description: 'The Director of Public Relations promotes the club and its events through various media channels.',
      duties: [
        'Publicize all ongoing and future club events.',
        'Maintain the club’s Facebook group and event pages.',
        'Deliver regular updates to the President and Vice President.',
      ],
      powers: [
        'Create public relations projects and events.',
        'Commit to public relations projects on behalf of the club.',
      ],
    },
    {
      id: 8,
      title: 'Director of International Service',
      description: 'The Director of International Service oversees international community service projects and partnerships.',
      duties: [
        'Organize education and volunteering abroad opportunities.',
        'Maintain a database of international service contacts.',
        'Deliver regular updates to the President and Vice President.',
      ],
      powers: [
        'Create international volunteering projects and events.',
        'Commit to international volunteering on behalf of the club.',
      ],
    },
    {
      id: 9,
      title: 'Director of Interact Club',
      description: 'The Director of Interact Club mentors the Interact Club and supports its development.',
      duties: [
        'Attend Interact Club meetings and assess their status.',
        'Support Interact Club projects and build relationships with their families/school administration.',
      ],
      powers: [
        'Create meetings or forums to increase engagement between Rotaract and Interact Club members.',
        'Develop strategies for Interact Club member engagement and retention.',
      ],
    },
    {
      id: 10,
      title: 'Director of Project Officer',
      description: 'The Director of Project Officer ensures all club projects are completed on time and reports are compiled.',
      duties: [
        'Collect reports from all directors and compile monthly reports.',
        'Ensure all planned projects are completed on time.',
        'Notify the President and Vice President of upcoming activities.',
      ],
      powers: [
        'Enforce timely submission of plans and reports from Directors.',
        'Ensure members understand and engage in projects.',
      ],
    },
    {
      id: 11,
      title: 'Sergeant at Arms',
      description: 'The Sergeant at Arms ensures orderly and dignified club meetings.',
      duties: [
        'Handle physical preparations for meetings.',
        'Maintain a schedule of events and activities.',
        'Assist members and guests to have a positive experience.',
      ],
      powers: [
        'Set time for starting and ending club meetings.',
        'Decide penalties for misbehavior and enforce discipline rules.',
      ],
    },
  ];

  return (
    <div className="directorship-positions">
      <h1>Directorship Positions</h1>
      <div className="positions-list">
        {positions.map((position) => (
          <div key={position.id} className="position-card">
            <h2>{position.title}</h2>
            <p className="description">{position.description}</p>
            <div className="details">
              <h3>Duties</h3>
              <ul>
                {position.duties.map((duty, index) => (
                  <li key={index}>{duty}</li>
                ))}
              </ul>
              <h3>Powers</h3>
              <ul>
                {position.powers.map((power, index) => (
                  <li key={index}>{power}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}