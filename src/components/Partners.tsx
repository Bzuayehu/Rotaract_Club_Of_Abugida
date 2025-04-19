// import React from 'react';
import './Partners.css';
import magicOfROtary from '../assets/The_Magic_of_Rotary.png';
import bloodBank from '../assets/Ethiopian_blood_bank_logo.png';
import impactCatalyst from '../assets/Impact_Catalyst.png';
import fanta from '../assets/Fanta-Logo.png';
import yearsOfService from '../assets/100_years_of_Service.png';
import motherClubLogo from '../assets/RotaryEntoto.png';
import shegerGebeta from '../assets/Sheger_Gebeta-removebg-preview.png';
import HamletMassage from '../assets/Untitled design.png';
// import HamletMassage1 from '../assets/Hamlet_Massage-removebg-preview.png';

import eye from '../assets/Eye-removebg-preview.png';
// import wuddasieDiadnostic from '../assets/WudassieDiagnosticCenter.jpg';
import wuddasieDiadnostic from '../assets/WudassieDiagnosticCenter-removebg-preview.png';
import ScrollingSponsors from './ScrollingSponsors';
import { useTranslation } from "react-i18next";

const Partners = () => {
  const { t, } = useTranslation();

//   const motherClub = {
//     name: 'Rotary Club of Addis Ababa',
//     description: 'Our mother club, guiding us in our mission and vision.',
//     logo: motherClubLogo,
//   };

//   const interactClubs = [
//     { id: 1, name: 'Interact Club of School A', logo: 'path/to/interact1-logo.png' },
//   ];

  const sponsors = [
    { id: 1, name: 'The Magic of Rotary', logo: magicOfROtary },
    { id: 2, name: 'Ethiopian blood bank', logo: bloodBank },
    { id: 3, name: 'Impact Catalyst', logo: impactCatalyst },
    { id: 4, name: 'Fanta', logo: fanta },
    { id: 5, name: '100 years of Service', logo: yearsOfService },
    { id: 6, name: 'Sheger Gebeta', logo: shegerGebeta },
    { id: 7, name: 'Hamlet Massage', logo: HamletMassage },
    { id: 8, name: 'Eye', logo: eye },
    { id: 9, name: 'Wuddasie Diagnostic Center', logo: wuddasieDiadnostic },
    { id: 10, name: 'Rotary Club of Entoto', logo: motherClubLogo },
  ];

  return (
    <div className="partners">
      <h2>{t("our_partners")}</h2>
      <p className='partners-description'>{t("partners_description")}</p>

      {/* Sponsors */}

      {/* Mother Club */}
      {/* <div className="mother-club">
        <h3>Mother Club</h3>
        <img src={motherClub.logo} alt={motherClub.name} />
        <p>{motherClub.description}</p>
      </div> */}

      {/* Interact Clubs */}
      {/* <div className="interact-clubs">
        <h3>Interact Clubs</h3>
        <div className="interact-clubs-list">
          {interactClubs.map(club => (
            <div key={club.id} className="interact-club">
              <img src={club.logo} alt={club.name} />
              <p>{club.name}</p>
            </div>
          ))}
        </div>
      </div> */}

      {/* Sponsors */}
      <div className="sponsors">
        {/* <h3>Our Sponsors</h3> */}
        <div className="sponsors-list">
        <ScrollingSponsors sponsors={sponsors} />
        </div>
      </div>
    </div>
  );
};

export default Partners;