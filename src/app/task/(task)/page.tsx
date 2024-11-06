

import TaskHeaderSection from "./sessions/task-header-section";
import ViewTasks from "./sessions/view-tasks";
import { getTasks } from "./task.services";

const TaskPage = async () => {
  const tasks = await getTasks();

  return (
    <>
      <TaskHeaderSection />
      <ViewTasks tasks={tasks} />
    </>
  );
};

export default TaskPage;
