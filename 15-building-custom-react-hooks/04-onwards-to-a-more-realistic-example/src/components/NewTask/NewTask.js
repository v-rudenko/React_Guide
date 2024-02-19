import { useState } from "react";

import Section from "../UI/Section";
import TaskForm from "./TaskForm";
import useDatabase from "../../hooks/use-database";

const NewTask = (props) => {
  const { isLoading, error, sendRequest: sendTaskRequest } = useDatabase();
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState(null);


  const createTask = (taskText, TaskData) => {
    const generatedId = TaskData.name; // firebase-specific => "name" contains generated id
    const createdTask = { id: generatedId, text: taskText };

    props.onAddTask(createdTask);
  };

  const enterTaskHandler = async (taskText) => {

    sendTaskRequest(
      {
        url: "https://react-http-5441a-default-rtdb.europe-west1.firebasedatabase.app/tasks.json",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: { text: taskText },
      },
      createTask.bind(null, taskText)
    );
  };

  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;
