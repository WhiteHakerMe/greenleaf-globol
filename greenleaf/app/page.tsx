import Image from "next/image";
import { useState } from "react";

export default function Home() {

  const [modalContent, setModalContent] = useState<string | null>(null);

  return (
    <>
      <h2>Hello</h2>
    </>
  );
}
