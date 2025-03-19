import { Spotlight } from "@/components/ui/spotlight-new";
import React from "react";

const Home: React.FC = () => {
  return (
      <div className="h-screen w-full rounded-md flex md:items-center md:justify-center dark:bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
        <Spotlight duration={4}/>
        
    </div>
  );
};

export default Home;
