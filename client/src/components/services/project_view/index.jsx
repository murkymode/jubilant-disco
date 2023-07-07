/* eslint-disable react/prop-types */
import React from 'react';

/* components */
import Taskboard from './taskboard_view';
import Calendar from './calendar_view';
import Resources from './resource_view';
import Whiteboard from './whiteboard_view';
import Notes from './notes_view';

export default function ProjectView({ display, projects }) {
  return (
    <div
      style={{
        flexDirection: 'column',
        backgroundColor: '#f2f2f2',
        width: '70vw',
        height: '100%',
        borderBottom: '1px solid grey',
        borderTop: '1px solid grey',
        borderRight: '1px solid grey',
      }}
    >
      <h4 style={{ margin: '.5em' }}>Project View</h4>
      {display === 'Calendar' ? <Calendar /> : null}
      {display === 'Taskboard' ? <Taskboard projects={projects} /> : null}
      {display === 'Resources' ? <Resources /> : null}
      {display === 'Whiteboard' ? <Whiteboard /> : null}
      {display === 'Notes' ? <Notes /> : null}
    </div>
  );
}
