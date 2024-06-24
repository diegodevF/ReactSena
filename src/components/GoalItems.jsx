// components/GoalItem.js
import { TrashIcon } from '@heroicons/react/24/solid';

const GoalItem = ({ goal, onDelete }) => {
  return (
    <div className="mb-6 p-4 border border-gray-200 rounded-lg">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-lg font-semibold text-[#183D3D]">{goal.name}</h3>
        <button
          onClick={() => onDelete()}
          className="text-red-600 hover:text-red-800 transition-colors"
        >
          <TrashIcon className="h-5 w-5" />
        </button>
      </div>
      <p className="text-gray-600 mb-2">Monto a Alcanzar: ${goal.amount}</p>
      <div className="w-full bg-gray-200 rounded-full h-2.5 mb-2">
        <div className="bg-teal-600 h-2.5 rounded-full" style={{ width: `${goal.progress}%` }}></div>
      </div>
      <div className="flex justify-between text-gray-600">
        <span>{goal.progress}% completado</span>
        <span>${goal.amount}</span>
      </div>
    </div>
  );
};

export default GoalItem;
