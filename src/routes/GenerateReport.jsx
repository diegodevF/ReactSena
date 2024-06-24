import { useState } from "react";
import Sidebar from "../components/Sidebar";

const FinancialReport = () => {
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [includeGoals, setIncludeGoals] = useState(false);
    const [error, setError] = useState("");
  
    const handleGenerateReport = (e) => {
      e.preventDefault();
  
      // Simulación de la lógica de verificación de reportes
      const hasReports = checkReports(startDate, endDate);
  
      if (!hasReports) {
        setError("No se encontraron reportes para las fechas seleccionadas.");
      } else {
        setError("");
        // Lógica para generar el reporte financiero
      }
    };
  
    // Simulación de función de verificación de reportes (esto debería ser reemplazado con una lógica real)
    const checkReports = (startDate, endDate) => {
      // Aquí puedes agregar la lógica para verificar si hay reportes disponibles
      // Por ahora, esto simplemente retorna false para simular que no hay reportes
      return false;
    };
  
    return (
      <div className="flex h-screen bg-[#D9D9D9]">
        <Sidebar />
  
        <div className="flex-1 flex items-center justify-center p-6">
          <div className="w-full max-w-md mx-auto bg-white p-8 lg:p-10 rounded-lg shadow-xl">
            <h2 className="text-2xl font-semibold text-[#183D3D] mb-6">Reporte Financiero</h2>
            <form onSubmit={handleGenerateReport}>
              <div className="mb-4">
                <label className="block text-lg font-semibold text-[#183D3D] mb-1 text-left">
                  Fecha Inicial <span className="text-red-500">*</span>
                </label>
                <input
                  type="date"
                  className="w-full border-2 border-gray-300 rounded-md p-2 focus:outline-none focus:border-[#5C8374]"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-lg font-semibold text-[#183D3D] mb-1 text-left">
                  Fecha Final <span className="text-red-500">*</span>
                </label>
                <input
                  type="date"
                  className="w-full border-2 border-gray-300 rounded-md p-2 focus:outline-none focus:border-[#5C8374]"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4 flex items-center">
                <input
                  type="checkbox"
                  className="mr-2 rounded"
                  checked={includeGoals}
                  onChange={(e) => setIncludeGoals(e.target.checked)}
                  id="includeGoalsCheckbox"
                />
                <label htmlFor="includeGoalsCheckbox" className="text-lg font-semibold text-[#183D3D]">
                  Incluir Metas
                </label>
              </div>
              {error && (
                <div className="mb-4 text-red-500 font-semibold">
                  {error}
                </div>
              )}
              <button
                type="submit"
                className="bg-[#183D3D] text-white py-3 px-6 rounded-md font-semibold hover:bg-opacity-80 transition-colors w-full lg:w-auto"
              >
                Generar Reporte
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  };

export default FinancialReport;
