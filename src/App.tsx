import {Header} from "./component/Header";
import { Footer } from "./component/Footer";
import { TaskInput } from "./component/TaskInput";
import { Sidebar } from "./component/Sidebar";
import type { TaskCardProps } from "./libs/types";
import { TaskCard } from "./component/TaskCard";
function App() {
  const Taskcards: TaskCardProps[] = [
    {id: 1,title: "Read a book",description: "Vite + React + Bootstrap + TS",isDone: false},
    {id: 2,title: "Write code",description: "Finish project for class",isDone: false},
    {id: 3,title: "Deploy app",description: "Push project to Github Pages",isDone: false},
  ];

  return (
    <div className="d-flex flex-column" style={{ minHeight: "100vh" }}>
      {/* Header ด้านบน */}
      <Header></Header>

      <div className="d-flex flex-grow-1">
        {/* Sidebar ด้านซ้าย */}
        <Sidebar userName="Tachothai" type="admin"></Sidebar>
        {/* Main content */}
        <div className="container text-center">
          <main className="flex-grow-1 p-4">
            {/* input ด้านบน*/}
             <div className="m-2 p-2">
              <TaskInput></TaskInput>
             </div>
             
            {/* Card รายการ */}
            <TaskCard {...Taskcards[0]}></TaskCard>
            <TaskCard {...Taskcards[1]}></TaskCard>
            <TaskCard {...Taskcards[2]}></TaskCard>

          </main>
        </div>
      </div>

      {/* Footer ด้านล่าง */}
      <Footer year= "2026" fullName="Tachothai Thungcahroenkul" studentId="670610524"></Footer>
    </div>
  );
}

export default App;
