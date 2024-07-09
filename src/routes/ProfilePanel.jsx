// src/components/ProfilePanel.js
import Sidebar from "../components/Sidebar";
import { useState } from "react";
import { Card, Typography, List, ListItem, ListItemIcon, IconButton } from '@mui/material';
import { Home, Phone, Email, Delete } from '@mui/icons-material';
import GoalItem from "../components/GoalItems"; // Importar el componente de metas

const ProfilePanel = () => {
  const [goals, setGoals] = useState([]);

  const handleDeleteGoal = (index) => {
    const newGoals = goals.filter((goal, i) => i !== index);
    setGoals(newGoals);
  };

  return (
    <div className="flex h-screen bg-[#D9D9D9]">
      {/* Sidebar */}
      <Sidebar />

      {/* Contenedor principal (aligned with flexbox) */}
      <div className="flex-1 flex flex-col p-6 overflow-y-auto">
        {/* Perfil (aligned vertically with flexbox) */}
        <div className="flex-1 bg-gray-100 rounded-lg shadow-lg p-6 mb-6">
          <div className="max-w-md bg-white p-6 rounded-lg shadow-lg">
            <div className="flex items-center space-x-4">
              <img
                src="https://via.placeholder.com/150"
                alt="User profile"
                className="w-20 h-20 rounded-full"
              />
              <div>
                <h2 className="text-xl font-semibold text-gray-800">Diego Hernandez</h2>
                <p className="text-gray-600">Software Developer</p>
              </div>
            </div>
            <div className="mt-4">
              <div className="flex items-center space-x-2">
                <Home className="h-5 w-5 text-gray-500" />
                <span className="text-gray-600">Cúcuta, Colombia</span>
              </div>
              <div className="flex items-center space-x-2 mt-2">
                <Phone className="h-5 w-5 text-gray-500" />
                <span className="text-gray-600">+57 314 5988925</span>
              </div>
              <div className="flex items-center space-x-2 mt-2">
                <Email className="h-5 w-5 text-gray-500" />
                <span className="text-gray-600">blank@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Información de Metas (aligned vertically with flexbox) */}
        <div className="flex-1 bg-gray-100 rounded-lg shadow-lg p-6">
          <div className="max-w-md ">
            <div className="bg-white p-8 rounded-lg shadow-xl">
              <h2 className="text-2xl font-semibold text-[#183D3D] mb-6">Metas Financieras</h2>
              {goals.length === 0 ? (
                <p className="text-lg text-gray-600">No hay metas agregadas.</p>
              ) : (
                goals.map((goal, index) => (
                  <GoalItem
                    key={index}
                    goal={goal}
                    onDelete={() => handleDeleteGoal(index)}
                  />
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePanel;
