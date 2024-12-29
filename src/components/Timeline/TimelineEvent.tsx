import React from 'react';
import { Briefcase, GraduationCap } from 'lucide-react';
import { TimelineEvent as TimelineEventType } from '../../types';

interface Props {
  event: TimelineEventType;
}

export const TimelineEvent: React.FC<Props> = ({ event }) => {
  const icon = event.type === 'experience' ? <Briefcase className="w-6 h-6" /> : <GraduationCap className="w-6 h-6" />;
  
  return (
    <div className="relative pl-8 pb-8">
      <div className="absolute left-0 top-0 bg-blue-500 rounded-full p-1 text-white">
        {icon}
      </div>
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="text-xl font-bold">{event.title}</h3>
            <p className="text-gray-600">{event.organization}</p>
          </div>
          <span className="text-sm text-gray-500">
            {event.startDate} - {event.endDate}
          </span>
        </div>
        {Array.isArray(event.description) ? (
          <ul className="list-disc list-inside text-gray-600 space-y-1">
            {event.description.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-600">{event.description}</p>
        )}
        {event.tags && (
          <div className="flex flex-wrap gap-2 mt-4">
            {event.tags.map((tag) => (
              <span key={tag} className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};