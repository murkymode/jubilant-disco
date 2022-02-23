/* eslint-disable react/prop-types */
/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react';

import Column from './task_column';

export default function Taskboard({ projects }) {
  const [project, setProject] = useState({
    _id: '',
    title: '',
    info: '',
    columns: [],
    calendarEvents: [],
    resources: [],
    notes: [],
  });

  /* persists project once set in session */
  useEffect(() => {
    const currentID = window.sessionStorage.getItem('currentProject');
    let currentProject = {};

    projects.forEach((proj) => {
      if (proj._id === currentID) {
        currentProject = proj;
      }
    });
    setProject(currentProject);
  }, []);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        overflow: 'auto',
      }}
    >
      {project.columns.map(
        (column) => (
          <Column
            key={column._id}
            columnID={column._id}
            column={column}
          />
        ),
      )}
    </div>
  );
}
