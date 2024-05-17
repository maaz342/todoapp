import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Form, ListGroup } from 'react-bootstrap';

function TodoApp() {
  const [tasks, setTasks] = useState<string[]>([]);
  const [newTask, setNewTask] = useState('');

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };

  const handleDeleteTask = (index: number) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const handleDeleteAllTasks = () => {
    setTasks([]);
  };

  const handleEditTask = (index: number, editedTask: string) => {
    const updatedTasks = [...tasks];
    updatedTasks[index] = editedTask;
    setTasks(updatedTasks);
  };

  return (
    <Container className="mt-5" style={{border:'2px solid black'}}>
      <h1 className="mb-4 text-center" >Todo App</h1>
      <Form>
        <Form.Group>
          <Form.Control
            type="text"
            placeholder="Enter task"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" onClick={handleAddTask}>
          Add Task
        </Button>
      </Form>
      <ListGroup className="mt-4">
        {tasks.map((task, index) => (
          <ListGroup.Item key={index}>
            <div className="d-flex justify-content-between align-items-center">
              <span>{task}</span>
              <div>
                <Button
                  variant="danger"
                  className="mx-2"
                  onClick={() => handleDeleteTask(index)}
                >
                  Delete
                </Button>
                <Button
                  variant="info"
                  className="mx-2"
                  onClick={() => {
                    const editedTask = prompt('Edit task', task);
                    if (editedTask !== null) {
                      handleEditTask(index, editedTask);
                    }
                  }}
                >
                  Edit
                </Button>
              </div>
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>
      <div className="mt-4">
        <Button variant="danger" onClick={handleDeleteAllTasks}>
          Delete All
        </Button>
      </div>
    </Container>
  );
}

export default TodoApp;
