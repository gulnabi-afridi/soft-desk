import React from "react";
import Link from "next/link";
import PhotoGallery from "@/component/PhotoGallery/PhotoGallery";
import SecoundLayout from "@/Layout/SecoundLayout/SecoundLayout";

function photogallery() {
  return (
    <SecoundLayout>
      <PhotoGallery />
    </SecoundLayout>
  );
}

export default photogallery;
