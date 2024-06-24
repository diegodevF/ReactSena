// GoalPanel.js
import { useState } from 'react';
import Sidebar from '../components/Sidebar';
import GoalItems from '../components/GoalItems'; // Ajusta la ruta según tu estructura de archivos

const GoalPanel = () => {
  const [goalName, setGoalName] = useState('');
  const [goalAmount, setGoalAmount] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [important, setImportant] = useState(false);
  const [goals, setGoals] = useState([]);

  const handleAddGoal = (e) => {
    e.preventDefault();
    const newGoal = {
      name: goalName,
      amount: goalAmount,
      startDate: startDate,
      endDate: endDate,
      important: important,
      progress: 0 // Asume que la meta comienza con un progreso del 0%
    };
    setGoals([...goals, newGoal]);
    setGoalName('');
    setGoalAmount('');
    setStartDate('');
    setEndDate('');
    setImportant(false);
  };

  const handleDeleteGoal = (index) => {
    const newGoals = goals.filter((goal, i) => i !== index);
    setGoals(newGoals);
  };

  return (
    <div className="flex h-screen bg-[#D9D9D9]">
      <Sidebar />

      <div className="flex-1 flex flex-col lg:flex-row p-6 space-y-6 lg:space-y-0 lg:space-x-6">
        {/* Columna del formulario para agregar metas */}
        <div className="w-full lg:w-1/2 max-w-md mx-auto lg:mx-0 lg:max-w-2xl bg-white p-8 lg:p-10 rounded-lg shadow-xl mb-6 lg:mb-0">
          <h2 className="text-2xl font-semibold text-[#183D3D] mb-6">Agregar Meta Financiera</h2>
          <form onSubmit={handleAddGoal} className="space-y-4">
            <div className="mb-4">
              <label className="block text-lg font-semibold text-[#183D3D] mb-1">Nombre de la Meta</label>
              <input
                type="text"
                className="w-full border-2 border-gray-300 rounded-md p-2 focus:outline-none focus:border-[#5C8374]"
                value={goalName}
                onChange={(e) => setGoalName(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-lg font-semibold text-[#183D3D] mb-1">Monto a Alcanzar</label>
              <input
                type="number"
                className="w-full border-2 border-gray-300 rounded-md p-2 focus:outline-none focus:border-[#5C8374]"
                value={goalAmount}
                onChange={(e) => setGoalAmount(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-lg font-semibold text-[#183D3D] mb-1">Fecha de Inicio</label>
              <input
                type="date"
                className="w-full border-2 border-gray-300 rounded-md p-2 focus:outline-none focus:border-[#5C8374]"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-lg font-semibold text-[#183D3D] mb-1">Fecha Final</label>
              <input
                type="date"
                className="w-full border-2 border-gray-300 rounded-md p-2 focus:outline-none focus:border-[#5C8374]"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <input
                type="checkbox"
                className="mr-2 rounded"
                checked={important}
                onChange={(e) => setImportant(e.target.checked)}
                id="importantCheckbox"
              />
              <label htmlFor="importantCheckbox" className="text-lg font-semibold text-[#183D3D]">
                ¿Es importante esta meta?
              </label>
            </div>
            <button
              type="submit"
              className="bg-[#5C8374] text-white py-3 px-6 rounded-md font-semibold hover:bg-opacity-80 transition-colors"
            >
              Agregar Meta
            </button>
          </form>
        </div>

        {/* Columna de la lista de metas agregadas */}
        <div className="w-full lg:w-1/2 max-w-md mx-auto lg:mx-0 lg:max-w-2xl bg-white p-8 lg:p-10 rounded-lg shadow-xl">
          <h2 className="text-2xl font-semibold text-[#183D3D] mb-6">Metas Financieras</h2>
          {goals.length === 0 ? (
            <p className="text-lg text-gray-600">No hay metas agregadas.</p>
          ) : (
            goals.map((goal, index) => (
              <GoalItems
                key={index}
                goal={goal}
                onDelete={() => handleDeleteGoal(index)}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default GoalPanel;
