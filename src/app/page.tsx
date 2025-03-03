"use client";

import Card from "@Components/card";
import Image from "next/image";
import { useEffect, useState } from "react";
import Animal from "./animal";
import Filters from "@/components/filters";

export default function Home() {
  const [animals, setAnimals] = useState<Animal[]>([]);
  const [types, setTypes] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAnimals = async () => {
      try {
        setLoading(true);
        const response = await fetch('/api/pets');

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

    const fetchAnimalTypes = async () => {
      try {
        const response = await fetch('/api/types');

        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }

        const data = await response.json();
        setTypes(data.types || []);
      } catch (err) {
        console.error('Failed to fetch animal types:', err);
      }
    };

    fetchAnimalTypes();
    fetchAnimals();
  }, []);

  if (loading) return <div className="text-center p-8">Loading pets...</div>;
  if (error) return <div className="text-center p-8 text-red-500">{error}</div>;

  return (
    <>
      <Filters />
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {animals.filter(v => v.photos.length > 0).map((animal, i) => (
          <Card animal={animal} key={i} />
        ))}
      </div>
    </>
  );
}