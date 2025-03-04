'use client';
import Card from '@Components/card';
import { useEffect, useState } from 'react';
import Pet from './api/pets/pet';
import type { PetType } from './api/types/type';
import { Header } from '@/components/header';
import { SectionSteps } from '@/components/section-steps';
import { AnimatedLoading } from '@/components/loading';

export default function Home() {
  const [animals, setAnimals] = useState<Pet[]>([]);
  const [types, setTypes] = useState<PetType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [step, setStep] = useState<
    'type' | 'coat' | 'gender' | 'age' | 'color' | 'results'
  >('type');
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [selectedTypeData, setSelectedTypeData] = useState<PetType | null>(
    null
  );
  const [selectedAge, setSelectedAge] = useState<string | null>(null);
  const [selectedCoat, setSelectedCoat] = useState<string | null>(null);
  const [selectedGender, setSelectedGender] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);

  useEffect(() => {
    const fetchAnimalTypes = async () => {
      try {
        const response = await fetch('/api/types');
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        const data = await response.json();
        setTypes(data.types || []);
        setLoading(false);
      } catch (err) {
        console.error('Failed to fetch animal types:', err);
        setError('Failed to load animal types. Please try again later.');
        setLoading(false);
      }
    };

    fetchAnimalTypes();
  }, []);

  const fetchAnimals = async (filters?: {
    type?: string;
    age?: string;
    coat?: string;
    gender?: string;
    color?: string;
  }) => {
    try {
      setLoading(true);
      const params = new URLSearchParams();
      if (filters) {
        Object.entries(filters).forEach(([key, value]) => {
          if (value) params.append(key, value);
        });
      }
      const response = await fetch(`/api/pets?${params.toString()}`);
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      const data = await response.json();
      setAnimals(data.animals || []);
    } catch (err) {
      console.error('Failed to fetch animals:', err);
      setError('Failed to load pets. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const handleTypeSelection = (type: string | null) => {
    if (type) {
      const typeData = types.find((t) => t.name === type) || null;
      setSelectedType(type);
      setSelectedTypeData(typeData);
      setStep('coat');
    } else {
      setSelectedType(null);
      setSelectedTypeData(null);
      setStep('results');
      fetchAnimals();
    }
  };

  const handleNextStep = () => {
    switch (step) {
      case 'coat':
        setStep('gender');
        break;
      case 'gender':
        setStep('age');
        break;
      case 'age':
        setStep('color');
        break;
      case 'color':
        setStep('results');
        fetchAnimals({
          type: selectedType || undefined,
          age: selectedAge || undefined,
          coat: selectedCoat || undefined,
          gender: selectedGender || undefined,
          color: selectedColor || undefined,
        });
        break;
    }
  };

  const handleBackStep = () => {
    switch (step) {
      case 'coat':
        setStep('type');
        break;
      case 'gender':
        setStep('coat');
        break;
      case 'age':
        setStep('gender');
        break;
      case 'color':
        setStep('age');
        break;
      case 'results':
        setStep('color');
        break;
    }
  };

  const filteredAnimals = animals.filter((animal) => animal.photos.length > 0);

  if (loading) return <AnimatedLoading />;

  if (error) return <div className="p-8 text-center text-red-500">{error}</div>;

  if (step !== 'results') {
    return (
      <SectionSteps
        step={step}
        types={types}
        selectedType={selectedType}
        selectedTypeData={selectedTypeData}
        selectedAge={selectedAge}
        selectedCoat={selectedCoat}
        selectedGender={selectedGender}
        selectedColor={selectedColor}
        onTypeSelect={handleTypeSelection}
        onCoatSelect={(coat) => {
          setSelectedCoat(coat);
          handleNextStep();
        }}
        onGenderSelect={(gender) => {
          setSelectedGender(gender);
          handleNextStep();
        }}
        onAgeSelect={(age) => {
          setSelectedAge(age);
          handleNextStep();
        }}
        onColorSelect={(color) => {
          setSelectedColor(color);
          handleNextStep();
        }}
        onBack={handleBackStep}
      />
    );
  }

  return (
    <>
      <div className="container mx-auto px-1 py-2 md:px-4">
        <Header
          onStartOver={() => setStep('type')}
          onFilterClick={(filter) => setStep(filter)}
          selectedType={selectedType}
          selectedAge={selectedAge}
          selectedCoat={selectedCoat}
          selectedGender={selectedGender}
          selectedColor={selectedColor}
          resultsCount={filteredAnimals.length}
        />

        <div className="mb-[130px] grid grid-cols-2 gap-4 md:grid-cols-5">
          {filteredAnimals.map((pet, i) => (
            <Card pet={pet} key={i} />
          ))}
        </div>
      </div>
    </>
  );
}
