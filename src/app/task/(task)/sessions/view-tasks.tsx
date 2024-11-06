
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { TaskResponse } from "../task.types";
import { formatDate, formatPrice, isCostAboveThreshold } from "@/lib/utils";
import DeleteTaskButton from "./delete-task-button";
import EditTaskButton from "./edit-task-button";
import MoveTaskButton from "./move-task-button";


type ViewTasksProps = {
  tasks: TaskResponse[] | [];
};

const ViewTasks = ({ tasks }: ViewTasksProps) => {

  

  return (
    <Table>
      <TableCaption>Tarefas cadastradas no sistema</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>ID</TableHead>
          <TableHead>Nome</TableHead>
          <TableHead>Custo</TableHead>
          <TableHead>Data limite</TableHead>
          <TableHead>Ações</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {tasks.map((task, index) => (
          <TableRow
            key={task.id}
            className={`${isCostAboveThreshold(task.cost) && "bg-blue-50"}`}
          >
            <TableCell>{task.id}</TableCell>
            <TableCell>{task.name}</TableCell>
            <TableCell>{formatPrice(task.cost)}</TableCell>
            <TableCell>{formatDate(task.limitDate)}</TableCell>
            <TableCell>
              <div className="flex items-center gap-2">
                <DeleteTaskButton id={task.id} />
                <EditTaskButton task={task} />
                <MoveTaskButton index={index} tasks={tasks} />
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default ViewTasks;
