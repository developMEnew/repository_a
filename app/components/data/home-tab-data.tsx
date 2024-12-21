import React, { useEffect, useState } from "react";

// Define the type for Achievement
interface Achievement {
  uId: number;
  uName: string;
  uMonth: string;
  traget: number;
  countOfDates: number;
  deltaAchievement: number;
}

export default function Home_tab_data() {
  const [data, setData] = useState<Achievement[] | null>(null); // Store the fetched data
  const [exData, setExData] = useState<Achievement | null>(null); // Store the first achievement data

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("api/achievements");
      const result = await response.json();

      if (result.success) {
        setData(result.data); 
      } else {
        console.error("Error fetching achievements:", result.error);
      }
    }

    fetchData();
  }, []); // Runs once when the component mounts

  useEffect(() => {
    // Only update exData if data exists and is non-empty
    if (data && data.length > 0) {
      setExData(data[0]); 
      console.log(data[0].deltaAchievement); 
    }
  }, [data]); // Runs when data changes

  return (
    <div className="bg-blue-500 rounded-2xl p-6 text-white">
      <div className="flex justify-between items-center mb-4">
        <div>
          <p className="text-sm opacity-80 uppercase">Achievements</p>
          <p className="font-medium">
            {exData ? exData.uName : "Loading..."}
          </p>
        </div>
        <div>
          <p className="text-sm opacity-80">{exData ? exData.uMonth : "Loading..."}</p>
        </div>
      </div>
      <h1 className="text-4xl font-bold mb-4">{exData ? exData.deltaAchievement : "Loading..."}</h1>
      <div className="flex justify-between items-center">
        <p>{exData ? exData.deltaAchievement/(exData.traget*exData.countOfDates)*100 + "%" : "Loading..."}</p>
        <p>{exData ? exData.traget*exData.countOfDates : "Loading..."}</p>
      </div>
    </div>
  );
}
