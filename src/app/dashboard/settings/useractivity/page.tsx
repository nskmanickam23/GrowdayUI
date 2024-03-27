'use client'
import React from 'react';
import { UserIcon } from 'lucide-react';

const UserActivityPage: React.FC = () => {
  const [userActivities, setUserActivities] = React.useState<any[]>([]);
  
  React.useEffect(() => {
    const fetchUserActivities = async () => {
      try {
        const response = await fetch('http://localhost:3001/userActivities');
        const data = await response.json();
        setUserActivities(data);
      } catch (error) {
        console.error('Error fetching user activities:', error);
      }
    };

    fetchUserActivities();
  }, []);

  const groupedActivities: { [key: string]: any[] } = userActivities.reduce((acc, activity) => {
    if (!acc[activity.day]) {
      acc[activity.day] = [];
    }
    acc[activity.day].push(activity);
    return acc;
  }, {} as { [key: string]: any[] }); // Add index signature to acc

  return (
    <div className="container mx-auto mt-8">
      {Object.entries(groupedActivities).map(([day, activities], index) => (
        <div key={index} className="mb-12">
          <h2 className="text-2xl font-semibold text-purple-800 mb-4">{day}:</h2>
          {renderUserActivities(activities)}
        </div>
      ))}
    </div>
  );

  function renderUserActivities(activities: any[]) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {activities.map((activity, index) => (
          <div key={index} className="bg-white dark:bg-darkbg rounded-lg shadow-md p-6 flex items-center space-x-4">
            <div className="flex-shrink-0">
              <UserIcon size={24} color='#70212e' />
            </div>
            <div>
              <p className="text-gray-900 dark:text-white">
                <strong className="font-semibold">{activity.user}</strong> started {activity.action} as a {activity.role} {activity.day}.
              </p>
            </div>
          </div>
        ))}
      </div>
    );
  }
};

export default UserActivityPage;
