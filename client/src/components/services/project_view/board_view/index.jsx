/* eslint-disable react/prop-types */
/* eslint-disable no-underscore-dangle */
import React, { useState, useContext, useEffect } from 'react';

import axios from 'axios';

import Context from '../../../context';

import Column from './task_column';

export default function Taskboard({ projects }) {
  const { projectID } = useContext(Context);
  const [project, setProject] = useState({
    _id: '',
    title: '',
    info: '',
    columns: [],
    calendarEvents: [],
    resources: [],
    notes: [],
  });

  const options = {
    method: 'get',
    url: '/api/projects/current',
    params: {
      id: projectID,
    },
  };
  useEffect(() => {
    axios(options)
      .then((res) => {
        setProject(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
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
        (column) => <Column key={column._id} column={column} />,
      )}
    </div>
  );
}
