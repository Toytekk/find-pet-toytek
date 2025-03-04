'use client';
import { SectionFilter } from '@/components/section-filter';
import {
  getAgeEmoji,
  getCoatEmoji,
  getGenderEmoji,
  getTypeEmoji,
} from '@/utils/emoji';
import { PetType } from '@/app/api/types/type';

interface SectionStepsProps {
  step: 'type' | 'coat' | 'gender' | 'age' | 'color' | 'results';
  types: PetType[];
  selectedType: string | null;
  selectedTypeData: PetType | null;
  selectedAge: string | null;
  selectedCoat: string | null;
  selectedGender: string | null;
  selectedColor: string | null;
  onTypeSelect: (type: string | null) => void;
  onCoatSelect: (coat: string | null) => void;
  onGenderSelect: (gender: string | null) => void;
  onAgeSelect: (age: string | null) => void;
  onColorSelect: (color: string | null) => void;
  onBack: () => void;
}

export function SectionSteps({
  step,
  types,
  selectedType,
  selectedTypeData,
  selectedAge,
  selectedCoat,
  selectedGender,
  selectedColor,
  onTypeSelect,
  onCoatSelect,
  onGenderSelect,
  onAgeSelect,
  onColorSelect,
  onBack,
}: SectionStepsProps) {
  if (step === 'type') {
    return (
      <SectionFilter
        title="What type of pet are you looking for?"
        options={types.map((type) => type.name)}
        selectedValue={selectedType}
        onSelect={onTypeSelect}
        getEmoji={getTypeEmoji}
      />
    );
  }

  if (step === 'coat') {
    const coatOptions = [
      'Hairless',
      'Short',
      'Medium',
      'Long',
      'Wire',
      'Curly',
    ];

    return (
      <SectionFilter
        title="What coat type would you prefer?"
        options={coatOptions}
        selectedValue={selectedCoat}
        onSelect={onCoatSelect}
        onBack={onBack}
        getEmoji={getCoatEmoji}
      />
    );
  }

  if (step === 'gender') {
    const genderOptions = ['Male', 'Female'];

    return (
      <SectionFilter
        title="Do you have a gender preference?"
        options={genderOptions}
        selectedValue={selectedGender}
        onSelect={onGenderSelect}
        onBack={onBack}
        getEmoji={getGenderEmoji}
        anyOptionEmoji="⚥"
      />
    );
  }

  if (step === 'age') {
    const ageOptions = ['Baby', 'Young', 'Adult', 'Senior'];

    return (
      <SectionFilter
        title="What age range are you looking for?"
        options={ageOptions}
        selectedValue={selectedAge}
        onSelect={onAgeSelect}
        onBack={onBack}
        getEmoji={getAgeEmoji}
        anyOptionEmoji="♾️"
        anyOptionLabel="Any Age"
      />
    );
  }

  if (step === 'color') {
    const colorOptions = selectedTypeData?.colors || [
      'Black',
      'Brown / Chocolate',
      'Gray / Blue / Silver',
      'Red / Chestnut / Orange',
      'White / Cream',
      'Yellow / Tan / Blond / Fawn',
    ];

    return (
      <SectionFilter
        title="Do you have a color preference?"
        options={colorOptions}
        selectedValue={selectedColor}
        onSelect={onColorSelect}
        onBack={onBack}
        useColorGradients={true}
        anyOptionEmoji="🎨"
        anyOptionLabel="Any Color"
      />
    );
  }

  return null;
}
