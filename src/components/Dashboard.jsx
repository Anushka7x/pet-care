import React from 'react';
import AnimalRequestForm from './AnimalRequestForm';
import DonationForm from './DonationForm';
import CareRequestForm from './CareRequestForm';
import FeederRequestForm from './FeederRequestForm';

function Dashboard() {
  return (
    <div className="container mx-auto px-4 py-6 space-y-8">
      <h1 className="text-2xl font-bold text-center mb-6">Dashboard</h1>
      <AnimalRequestForm />
      <DonationForm />
      <CareRequestForm />
      <FeederRequestForm />
    </div>
  );
}

export default Dashboard;