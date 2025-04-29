import { Ai } from "@/pages/Ai";
import { Calendar } from "@/pages/Calendar";
import { MonthPage } from "@/pages/MonthPage";
import { DayPage } from "@/pages/DayPage";
import { Login } from "@/pages/Login";
import { Register } from "@/pages/Register";
import { Contacts } from "@/pages/Contacts";
import { Dashboard } from "@/pages/Dashboard";
import { Files } from "@/pages/Files";
import { Home } from "@/pages/Home";
import { Messenger } from "@/pages/Messenger";
import { Notes } from "@/pages/Notes";
import { Tasks } from "@/pages/Tasks";
import { Route, Routes } from "react-router-dom";
import { Profile } from "@/pages/Profile";

export const Routing = () => {
    return (
        <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/home" element={<Home />} />
            <Route path="/files" element={<Files />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/messenger" element={<Messenger />} />
            <Route path="/ai" element={<Ai />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/tasks" element={<Tasks />} />
            <Route path="/notes" element={<Notes />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/calendar/:month" element={<MonthPage />} />
            <Route path="/calendar/:month/:day" element={<DayPage />} />
        </Routes>
    );
};
