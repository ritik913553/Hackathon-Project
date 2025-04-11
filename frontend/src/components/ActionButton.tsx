interface ActionButtonProps {
    active: boolean;
    onClick: () => void;
    icon: string;
    label: string;
  }
  
  export default function ActionButton({ active, onClick, icon, label }: ActionButtonProps) {
    return (
      <button
        onClick={onClick}
        className={`w-full flex items-center space-x-3 px-4 py-2 rounded-lg transition-colors ${
          active ? 'bg-blue-100 text-blue-700' : 'hover:bg-gray-100'
        }`}
      >
        <span className="text-xl">{icon}</span>
        <span>{label}</span>
      </button>
    );
  }