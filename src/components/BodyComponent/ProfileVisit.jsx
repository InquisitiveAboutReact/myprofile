import React, { useState, useEffect } from 'react';

export default function Counter() {
 const [count, setCount] = useState(0);

 useEffect(() => {
 const storedCount = localStorage.getItem("pageVisits");
 const initialCount = storedCount ? Number(storedCount) : 0;
 setCount(initialCount + 1);
 localStorage.setItem("pageVisits", initialCount + 1);
 }, []);

 return (
 <div>
  Total Visits: {count}
 </div>
);
}


