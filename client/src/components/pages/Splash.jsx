/* eslint-disable no-underscore-dangle */
import React, { useContext } from 'react';
import PropTypes, { arrayOf } from 'prop-types';
import { Link } from 'react-router-dom';

import axios from 'axios';

import theme from '../theme';
import Context from '../context';

/* components */
import ManageProjects from '../services/manage_projects';

const { main } = theme.palette.secondary;

const Splash = ({ projects }) => {
  /* sets current project id in context */
  const { handleID } = useContext(Context);
  const setID = (e) => {
    const { id } = e.target.parentNode;
    handleID(id);
  };

  const handleDelete = (e) => {
    const projectID = e.target.parentNode.id;

    axios.delete('/api/projects', { data: { id: projectID } });
    window.location.reload(false);
  };

  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
      }}
    >
      <div
        style={{
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            margin: '1em',
          }}
        >
          {projects.map((project) => (
            <div
              key={project._id}
            >
              <button
                type="button"
                onClick={setID}
                id={project._id}
                style={{
                  display: 'flex',
                  margin: '1em',
                  minWidth: '20em',
                  maxWidth: '40em',
                  maxHeight: '3em',
                  minHeight: '2em',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  color: 'white',
                  backgroundColor: main,
                  border: 'none',
                  borderRadius: '3px',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}
              >
                <Link to="/home">{project.title}</Link>
                <button
                  type="button"
                  onClick={handleDelete}
                >
                  X
                </button>
              </button>
            </div>
          ))}
        </div>
        <ManageProjects />
      </div>
    </div>
  );
};

Splash.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    info: PropTypes.string,
    columns: arrayOf(PropTypes.shape({
    })),
    calendarEvents: arrayOf(PropTypes.shape({
    })),
    resources: arrayOf(PropTypes.shape({
    })),
    notes: arrayOf(PropTypes.shape({
    })),
  })),
};

Splash.defaultProps = {
  projects: [],
};

export default Splash;
