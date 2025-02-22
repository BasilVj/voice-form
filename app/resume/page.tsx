import dynamic from "next/dynamic";
import React from "react";

const PdfComponent = dynamic(() => import("../../components/GeneratePDF"), {
  ssr: false,
});

const page = () => {
  return (
    <div >
      <PdfComponent />
    </div>
  );
};

export default page;
