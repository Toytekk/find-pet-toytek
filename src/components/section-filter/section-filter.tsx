import { getColorGradient } from '@/utils/colors';
import Button from '@/components/ui/button';

interface SectionFilterProps {
  title: string;
  options: string[];
  selectedValue: string | null;
  onSelect: (value: string | null) => void;
  onBack?: () => void;
  getEmoji?: (value: string) => string;
  anyOptionEmoji?: string;
  anyOptionLabel?: string;
  useColorGradients?: boolean;
}

export function SectionFilter({
  title,
  options,
  selectedValue,
  onSelect,
  onBack,
  getEmoji,
  anyOptionEmoji = '🐾',
  anyOptionLabel = 'Any',
  useColorGradients = false,
}: SectionFilterProps) {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-6 text-center text-3xl font-bold">{title}</h1>
      <div className="cartoon-border rounded-lg bg-[var(--mainColor)] p-6">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
          {options.map((option, i) => (
            <Button
              key={i}
              onClick={() => onSelect(option)}
              className={`cartoon-border flex flex-col items-center justify-center gap-2 ${
                selectedValue === option
                  ? '!bg-yellow-400 !text-purple-900 hover:!bg-yellow-200'
                  : '!bg-white/90 !text-purple-950 hover:!bg-purple-300'
              } p-4 text-lg font-bold`}
            >
              {useColorGradients ? (
                <div
                  className="h-12 w-12 rounded-full border-2 border-white shadow-lg"
                  style={{ background: getColorGradient(option) }}
                />
              ) : (
                <span className="text-3xl font-bold">{getEmoji?.(option)}</span>
              )}
              <span className="text-xl font-bold">{option}</span>
            </Button>
          ))}
          <Button
            onClick={() => onSelect(null)}
            className={`cartoon-border col-span-2 flex h-full w-full flex-col items-center justify-center gap-2 md:col-span-3 ${
              selectedValue === null
                ? '!bg-yellow-400 !text-purple-900 hover:!bg-yellow-200'
                : '!bg-white/90 !text-purple-950 hover:!bg-purple-300'
            }`}
          >
            <span className="text-3xl">{anyOptionEmoji}</span>
            <span className="text-xl font-bold">{anyOptionLabel}</span>
          </Button>
        </div>
        {onBack && (
          <Button
            onClick={onBack}
            className="cartoon-border mt-6 bg-white/90 px-6 py-2 font-bold !text-purple-950 hover:!bg-purple-300"
          >
            <span className="text-xl font-bold">Back</span>
          </Button>
        )}
      </div>
    </div>
  );
}
