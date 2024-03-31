'use client';

import dynamic from "next/dynamic";

let Foo: React.ComponentType = () => null;

try {
  const TempFoo = dynamic(() => import("./foo"), { ssr: false });
  Foo = TempFoo;
}
catch (e) {
  console.error(e);
}

export default function ComponentPicker() {

  return (
    <>
      <h1>Foo:</h1>
      <Foo />
    </>
  );
}
