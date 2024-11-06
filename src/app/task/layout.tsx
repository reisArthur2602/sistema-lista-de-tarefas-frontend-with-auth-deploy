
import Header from "./sessions/header";

type TaskLayoutProps = {
  children: React.ReactNode;
};

const TaskLayout = ({ children }: TaskLayoutProps) => {
  return (
    <div className="flex h-full flex-col gap-8">
      <Header />
      <main className="flex-1 px-6">{children}</main>
    </div>
  );
};

export default TaskLayout;
