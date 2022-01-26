/* eslint-disable no-underscore-dangle */
import React, { useContext } from 'react';
import PropTypes, { arrayOf } from 'prop-types';
import { Link } from 'react-router-dom';

import theme from '../theme';
import Context from '../context';
import ManageProjects from '../services/manage_projects';

const { main } = theme.palette.secondary;

const Splash = ({ projects }) => {
  /* sets current project id in context */
  const { handleID } = useContext(Context);
  const setID = (e) => {
    const { id } = e.target.parentNode;
    handleID(id);
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
          display: 'flex',
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
            <button
              type="button"
              onClick={setID}
              id={project._id}
              key={project._id}
              style={{
                margin: '1em',
                minWidth: '20em',
                maxWidth: '40em',
                maxHeight: '3em',
                minHeight: '2em',
                overflow: 'hidden',
                cursor: 'pointer',
                backgroundColor: main,
                border: 'none',
                borderRadius: '3px',
              }}
            >
              <Link to="/home">{project.title}</Link>
            </button>
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
