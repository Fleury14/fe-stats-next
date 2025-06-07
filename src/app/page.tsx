import ActiveRacesFront from "./ui/active-races-front/active-races";
import LeaderboardFront from "./ui/leaderboard-front/leaderboard-front";
import RecentRacesFront from "./ui/recent-races-front/recent-races-front";

export default function Home() {
  return (
    <div className="grid grid-cols-12 gap-2">
      <div className="col-span-3">
        <LeaderboardFront />
      </div>
      <div className="col-span-9">
        <div className="flex flex-col">
          <ActiveRacesFront />
          <RecentRacesFront />
        </div>
      </div>
      
    </div>
     );
}
