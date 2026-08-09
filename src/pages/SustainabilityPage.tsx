import React from 'react';
import { Sustainability } from '../components/Sustainability';

export const SustainabilityPage: React.FC = () => {
  return (
    <div className="bg-amber-50/20 py-10 space-y-12 animate-fadeIn">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Sustainability />
      </div>
    </div>
  );
};
