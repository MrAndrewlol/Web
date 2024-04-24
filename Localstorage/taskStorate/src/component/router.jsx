// Recibe la ruta y renderiza el componente
import TaskComponent from '../view/taskComponent'
import PropTypes from 'prop-types';
import AddTaskForm from '../view/addTaskForm';
import React, { useEffect } from 'react';

function Router({ ruta, setRoute }) {

    const [newTask, setNewTask] = React.useState({
        title: '',
        description: '',
    });
    const navigate = (newRoute) => {
        setRoute(newRoute);
    };

    useEffect(() => {
        // Acceder a las propiedades del sessison y del local storage
        console.log(newTask)
    }, [])



    switch (ruta) {
        case "/list":
            return <TaskComponent task={newTask} />
        case "/add":
            return <AddTaskForm onAddTask={(task) => {
                localStorage.setItem(task.id, [task.title, task.description] )
                window.location.replace("/list");
            }} />;
        default:
            return (
                <div>
                    <h1>Bienvenidos</h1>
                </div>
            )
    }
}

Router.propTypes = {
    ruta: PropTypes.string.isRequired,
    setRoute: PropTypes.func.isRequired,
};

export default Router