"use client";
import { useParams } from 'next/navigation';
import React from 'react';

const Shoukai = () => {
  const param = useParams();
  const id = param.id;

  return (
    <div>
      {id}
    </div>
  );
};

export default Shoukai;
