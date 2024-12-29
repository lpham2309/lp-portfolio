import { TimelineEvent } from './TimelineEvent';
import { timelineEvents } from './TimelineData';

export const Timeline = () => {
  const sortedEvents = [...timelineEvents].sort((a, b) => {
    const dateA = a.endDate === 'Present' ? new Date().getFullYear() : parseInt(a.endDate);
    const dateB = b.endDate === 'Present' ? new Date().getFullYear() : parseInt(b.endDate);
    return dateB - dateA;
  });

  return (
    <section className="py-20 bg-gray-50" id="timeline">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Experience & Education</h2>
        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-gray-200" />
          {sortedEvents.map((event, index) => (
            <TimelineEvent key={index} event={event} />
          ))}
        </div>
      </div>
    </section>
  );
};