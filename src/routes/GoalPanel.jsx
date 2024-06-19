import Sidebar from '../components/Sidebar';
import { useState } from 'react';

const AddGoalForm = () => {
  const [goalName, setGoalName] = useState('');
  const [goalAmount, setGoalAmount] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [important, setImportant] = useState(false);

  const handleAddGoal = (e) => {
    e.preventDefault();
    // Aquí puedes manejar la lógica para enviar los datos a la API o realizar otra acción
    console.log({
      goalName,
      goalAmount,
      startDate,
      endDate,
      important,
    });
    // Reinicia los campos después de agregar la meta
    setGoalName('');
    setGoalAmount('');
    setStartDate('');
    setEndDate('');
    setImportant(false);
  };

  return (
    <div className="flex h-screen">
      <Sidebar />

      <div className="flex-1 p-6 bg-gradient-to-r from-[#93B1A6] via-[#5C8374] to-[#183D3D]">
        <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-xl">
          <h2 className="text-2xl font-semibold text-[#183D3D] mb-6">Agregar Meta Financiera</h2>
          <form onSubmit={handleAddGoal}>
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
      </div>
    </div>
  );
};

export default AddGoalForm;
