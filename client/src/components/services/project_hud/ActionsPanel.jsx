import React, { useState, useContext } from 'react';

/* components */
import Context from '../../context';
// import theme from '../../theme';
import AddTask from './AddTask';

// const { main } = theme.palette.secondary;

export default function ActionsPanel() {
  const { projectID } = useContext(Context);
  // const [tasks, setTasks] = useState([]);

  const addTask = () => {
    console.log(projectID);
  };

  return (
    <div
      style={{
        minWidth: '100%',
        minHeight: '20vh',
      }}
    >
      Hello from actions
      <AddTask addTask={addTask} />
    </div>
  );
}
