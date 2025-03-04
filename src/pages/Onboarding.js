import { useNavigate } from 'react-router-dom';

export const Onboarding = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-2xl mx-auto py-8">
      <h2 className="text-3xl font-bold mb-6">Welcome to Trepidantes!</h2>
      <div className="space-y-6">
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Get Started</h3>
          <p className="text-gray-600 mb-4">
            Follow these steps to begin your journey with Trepidantes:
          </p>
          <ol className="list-decimal list-inside space-y-2 text-gray-700">
            <li>Create your profile</li>
            <li>Set your preferences</li>
            <li>Connect with others</li>
            <li>Start exploring</li>
          </ol>
        </section>
        
        <div className="flex justify-between">
          <button
            onClick={() => navigate(-1)}
            className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition-colors"
          >
            Back
          </button>
          <button
            onClick={() => navigate('/')}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
          >
            Complete
          </button>
        </div>
      </div>
    </div>
  );
};