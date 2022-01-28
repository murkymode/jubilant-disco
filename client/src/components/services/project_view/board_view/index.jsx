import React, { useState, useContext, useEffect } from 'react';

import Context from '../../../context';

import Column from './task_column';

export default function Taskboard({ projects }) {
  const { projectID } = useContext(Context);
  const [project, setProject] = useState({});

  useEffect(() => {
    projects.forEach((element) => {
      if (element._id === projectID) {
        setProject(element);
      }
    });
  }, []);

  console.log(project);
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        overflow: 'auto',
      }}
    >
      {/* {project.columns.map((column) => <Column key={column._id} column={column} />)} */}
    </div>
  );
}
