import { PetType } from '@/app/api/types/type';

type FiltersProps = {
  types: PetType[];
  selectedType: string | null;
  onTypeChange: (type: string | null) => void;
  selectedAge: string | null;
  onAgeChange: (age: string | null) => void;
};

const Filters = ({
  types,
  selectedType,
  onTypeChange,
  selectedAge,
  onAgeChange,
}: FiltersProps) => {
  const ageOptions = ['Baby', 'Young', 'Adult', 'Senior'];

  const getTypeEmoji = (typeName: string): string => {
    switch (typeName) {
      case 'Dog':
        return '🐶';
      case 'Cat':
        return '🐱';
      case 'Rabbit':
        return '🐰';
      case 'Small & Furry':
        return '🐹';
      case 'Horse':
        return '🐴';
      case 'Bird':
        return '🐦';
      case 'Scales':
        return '🦎';
      case 'Barnyard':
        return '🐮';
      case 'Scales, Fins & Other':
        return '🐠';
      default:
        return '';
    }
  };

  return (
    <div className="cartoon-border mb-6 rounded bg-[var(--mainColor)] p-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <h3 className="mb-2 text-lg font-bold text-white">Animal Type</h3>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => onTypeChange(null)}
              className={`cartoon-border px-3 py-1 text-sm font-semibold ${
                selectedType === null
                  ? 'bg-yellow-400 text-purple-900'
                  : 'bg-white/30 text-white hover:bg-white/40'
              }`}
            >
              All
            </button>
            {types.map((type, i) => (
              <button
                key={i}
                onClick={() => onTypeChange(type.name)}
                className={`cartoon-border px-3 py-1 text-sm font-semibold ${
                  selectedType === type.name
                    ? 'bg-yellow-400 text-purple-900'
                    : 'bg-white/30 text-white hover:bg-white/40'
                }`}
              >
                {getTypeEmoji(type.name)} {type.name}
              </button>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-2 text-lg font-bold text-white">Age</h3>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => onAgeChange(null)}
              className={`cartoon-border px-3 py-1 text-sm font-semibold ${
                selectedAge === null
                  ? 'bg-yellow-400 text-purple-900'
                  : 'bg-white/30 text-white hover:bg-white/40'
              }`}
            >
              All Ages
            </button>
            {ageOptions.map((age, i) => (
              <button
                key={i}
                onClick={() => onAgeChange(age)}
                className={`cartoon-border px-3 py-1 text-sm font-semibold ${
                  selectedAge === age
                    ? 'bg-yellow-400 text-purple-900'
                    : 'bg-white/30 text-white hover:bg-white/40'
                }`}
              >
                {age}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filters;
