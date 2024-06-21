import { useState } from "react";
import Sidebar from "../components/Sidebar";

const AddTransaction = () => {
  const [transactionType, setTransactionType] = useState("");
  const [transactionAmount, setTransactionAmount] = useState("");
  const [transactionDescription, setTransactionDescription] = useState("");
  const [transactionDate, setTransactionDate] = useState("");
  const [relatedGoal, setRelatedGoal] = useState("");

  const handleAddTransaction = (e) => {
    e.preventDefault();
    // Lógica para manejar la adición de una nueva transacción
  };

  return (
    <div className="flex h-screen bg-[#D9D9D9]">
      <Sidebar />

      <div className="flex-1 flex items-center justify-center p-6">
        <div className="w-full max-w-lg mx-auto bg-white p-8 lg:p-10 rounded-lg shadow-xl">
          <h2 className="text-2xl font-semibold text-[#183D3D] mb-6">Agregar Movimiento</h2>
          <form onSubmit={handleAddTransaction}>
            <div className="mb-4">
              <label className="block text-lg font-semibold text-[#183D3D] mb-1 text-left">
                Tipo de Movimiento <span className="text-red-500">*</span>
              </label>
              <select
                className="w-full border-2 border-gray-300 rounded-md p-2 focus:outline-none focus:border-[#5C8374]"
                value={transactionType}
                onChange={(e) => setTransactionType(e.target.value)}
                required
              >
                <option value="">Seleccionar</option>
                <option value="income">Ingreso</option>
                <option value="expense">Egreso</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-lg font-semibold text-[#183D3D] mb-1 text-left">
                Monto del Movimiento <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                className="w-full border-2 border-gray-300 rounded-md p-2 focus:outline-none focus:border-[#5C8374]"
                value={transactionAmount}
                onChange={(e) => setTransactionAmount(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-lg font-semibold text-[#183D3D] mb-1 text-left">
                Descripción del Movimiento <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className="w-full border-2 border-gray-300 rounded-md p-2 focus:outline-none focus:border-[#5C8374]"
                value={transactionDescription}
                onChange={(e) => setTransactionDescription(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-lg font-semibold text-[#183D3D] mb-1 text-left">
                Fecha del Movimiento <span className="text-red-500">*</span>
              </label>
              <input
                type="date"
                className="w-full border-2 border-gray-300 rounded-md p-2 focus:outline-none focus:border-[#5C8374]"
                value={transactionDate}
                onChange={(e) => setTransactionDate(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-lg font-semibold text-[#183D3D] mb-1 text-left">
                Definir Meta
              </label>
              <select
                className="w-full border-2 border-gray-300 rounded-md p-2 focus:outline-none focus:border-[#5C8374]"
                value={relatedGoal}
                onChange={(e) => setRelatedGoal(e.target.value)}
              >
                <option value="">Seleccionar</option>
                {/* Aquí puedes mapear las metas disponibles */}
                <option value="goal1">Meta 1</option>
                <option value="goal2">Meta 2</option>
              </select>
            </div>
            <button
              type="submit"
              className="bg-[#183D3D] text-white py-3 px-6 rounded-md font-semibold hover:bg-opacity-80 transition-colors"
            >
              Agregar Movimiento
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddTransaction;
