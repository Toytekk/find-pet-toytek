import Button from '../ui/button';
import {
  getTypeEmoji,
  getAgeEmoji,
  getCoatEmoji,
  getGenderEmoji,
} from '@/utils/emoji';

interface HeaderProps {
  onStartOver: () => void;
  onFilterClick: (filter: 'type' | 'age' | 'coat' | 'gender' | 'color') => void;
  selectedType: string | null;
  selectedAge: string | null;
  selectedCoat: string | null;
  selectedGender: string | null;
  selectedColor: string | null;
  resultsCount: number;
}

export const Header = ({
  onStartOver,
  onFilterClick,
  selectedType,
  selectedAge,
  selectedCoat,
  selectedGender,
  selectedColor,
  resultsCount,
}: HeaderProps) => {
  return (
    <div className="cartoon-border mb-6 rounded bg-[var(--mainColor)] p-4">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-2xl font-bold text-white">Your Pet Matches</h2>
        <Button
          onClick={onStartOver}
          variant="primary"
          size="lg"
          className="font-audiowide !bg-yellow-400 !px-8 !py-3 !text-xl font-bold !text-purple-900 hover:!bg-yellow-300"
        >
          Start Over
        </Button>
      </div>
      <div className="mb-2 flex flex-wrap items-center gap-2 text-white">
        <Button
          onClick={() => onFilterClick('type')}
          size="sm"
          className="bg-purple-900/30 hover:!bg-purple-900/50"
        >
          {getTypeEmoji(selectedType || '')}
          {selectedType ? `Type: ${selectedType}` : 'All Types'}
        </Button>

        {selectedAge && (
          <Button
            onClick={() => onFilterClick('age')}
            size="sm"
            className="bg-purple-900/30 hover:!bg-purple-900/50"
          >
            {getAgeEmoji(selectedAge)}
            Age: {selectedAge}
          </Button>
        )}

        {selectedCoat && (
          <Button
            onClick={() => onFilterClick('coat')}
            size="sm"
            className="bg-purple-900/30 hover:!bg-purple-900/50"
          >
            {getCoatEmoji(selectedCoat)}
            Coat: {selectedCoat}
          </Button>
        )}

        {selectedGender && (
          <Button
            onClick={() => onFilterClick('gender')}
            size="sm"
            className="bg-purple-900/30 hover:!bg-purple-900/50"
          >
            {getGenderEmoji(selectedGender)}
            Gender: {selectedGender}
          </Button>
        )}

        {selectedColor && (
          <Button
            onClick={() => onFilterClick('color')}
            size="sm"
            className="bg-purple-900/30 hover:!bg-purple-900/50"
          >
            🎨 Color: {selectedColor}
          </Button>
        )}
      </div>
      <p className="text-sm text-white">{resultsCount} pets found</p>
    </div>
  );
};
