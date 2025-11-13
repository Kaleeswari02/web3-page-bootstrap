'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
   <div>
    Navbar
   </div>
  );
}