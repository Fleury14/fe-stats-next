'use client';

import { useEffect, useState } from 'react';
import Papa from 'papaparse';
import { ScheduleSheet, Schedule } from '../lib/interfaces';
import AFCSchedule from '../ui/afc/afc-schedule';

export default function Page() {

const [schedule, setSchedule] = useState<Schedule[] | null>(null);

useEffect(() => {
  Papa.parse("https://docs.google.com/spreadsheets/d/e/2PACX-1vQsw0czmhGK0gVLhqWPQG-gnLp4in3b-L1u9WXQfMqp2lvcqp1XHyyeBlXnS4-UcB3h2w4IiZk1i0Zj/pub?gid=1901311855&single=true&output=csv", {
    download: true,
    header: true,
    complete: (results: ScheduleSheet) => {
      console.log(' zz6 schedule results', results);
      setSchedule(results.data);
    }
  })
}, []);

console.log('afc data', schedule);

if (schedule === null) return (
  <p>No data yet...</p>
);

const upcoming = schedule.filter(match => match.Winner === "")
const completed = schedule.filter(match => match.Winner !== "")

return (
  <div>
    <h1 className="font-bold text-center text-4xl mt-5 mb-5">All Forked Cup</h1>
    <AFCSchedule upcoming={upcoming} completed={completed} />
  </div>
)

}