import React, { useState } from 'react';

import TitleBar from '../services/title_bar';
import Search from '../services/search';
import ProjectHUD from '../services/project_hud';
import ProjectView from '../services/project_view';

export default function Home() {
  const [display, setDisplay] = useState('Taskboard');

  const handleClick = (e) => {
    setDisplay(`${e.target.innerText}`);
  };

  return (
    <div
      style={{
        flexWrap: 'wrap',
        flexDirection: 'column',
        justifyContent: 'center',
        width: '100%',
        bottomMargin: '1rem',
      }}
    >
      <TitleBar />
      <div
        className="workarea"
        style={{
          display: 'flex',
          height: '85vh',
        }}
      >
        <div
          className="project-HUD"
        >
          <Search style={{ padding: '1rem' }} />
          <ProjectHUD handleClick={handleClick} />
        </div>
        <div
          className="project-view"
        >
          <ProjectView display={display} />
        </div>
      </div>
    </div>
  );
}
