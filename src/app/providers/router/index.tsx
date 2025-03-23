import { Ai } from "@/pages/Ai";
import { Attendance } from "@/pages/Attendance";
import { Contacts } from "@/pages/Contacts";
import { Dashboard } from "@/pages/Dashboard";
import { Files } from "@/pages/Files";
import { Home } from "@/pages/Home";
import { Messenger } from "@/pages/Messenger";
import { Notes } from "@/pages/Notes";
import { Tasks } from "@/pages/Tasks";
import { Route, Routes } from "react-router-dom";

export const Routing = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/files" element={<Files />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/messenger" element={<Messenger />} />
            <Route path="/ai" element={<Ai />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/tasks" element={<Tasks />} />
            <Route path="/notes" element={<Notes />} />
            <Route path="/attendance" element={<Attendance />} />
        </Routes>
    );
};
