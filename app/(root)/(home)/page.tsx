// CallList.tsx
'use client';

import { useEffect, useState } from 'react';

import MeetingTypeList from "@/components/ui/MeetingTypeList";
import { useNextMeetingTime } from "../../../components/ui/CallList";

const Home = () => {
  const [currentTime, setCurrentTime] = useState('');
  const [currentDate, setCurrentDate] = useState('');
  const nextMeetingTime = useNextMeetingTime();

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString('en-US', {hour: '2-digit', minute: '2-digit'}));
      setCurrentDate(new Intl.DateTimeFormat('en-US', {dateStyle: 'full'}).format(now));
    };

    updateDateTime();
    const intervalId = setInterval(updateDateTime, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const formatUpcomingMeetingTime = (date: Date | null) => {
    if (!date) return "No upcoming meetings";
    return date.toLocaleTimeString('en-US', {hour: '2-digit', minute: '2-digit'});
  };

  return (
    <section className="flex size-full gap-10 text-white flex-col">
      <div className="h-[300px] w-full rounded-[20px] bg-hero bg-cover">
        <div className="flex h-full flex-col justify-between max-md:px-5 max-md:py-8 lg:p-11">
          <h2 className="glassmorphism max-w-[270px] rounded py-2 text-center text-base font-normal">
            Upcoming Meeting at: {formatUpcomingMeetingTime(nextMeetingTime)}
          </h2>

          <div className="flex flex-col gap-2">
            <h1 className="text-4xl font-extrabold lg:text-7xl">{currentTime}</h1>
            <p className="text-lg font-medium text-sky-1 lg:text-2xl">
              {currentDate}
            </p>
          </div>
        </div>
      </div>

      <MeetingTypeList />
    </section>
  );
};

export default Home;