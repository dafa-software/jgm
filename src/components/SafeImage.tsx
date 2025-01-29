"use client";

import { useState } from "react";
import Image, { type ImageProps } from "next/image";

type SafeImageProps = Omit<ImageProps, "onError"> & {
  fallbackSrc?: string;
};

export function SafeImage({
  fallbackSrc = "/logo.png",
  alt,
  placeholder = "blur",
  blurDataURL,
  ...props
}: SafeImageProps) {
  const [isError, setIsError] = useState(false);

  if (isError) {
    return (
      <Image
        {...props}
        src={fallbackSrc}
        alt={alt}
        placeholder="empty"
        onError={() => setIsError(false)}
        style={{ objectFit: "contain" }}
      />
    );
  }

  return (
    <Image
      {...props}
      alt={alt}
      placeholder={placeholder}
      blurDataURL={
        blurDataURL ??
        "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQrJyEwPENrLi4wPDtBRFhKYUJZW0FBW15hZGhkY3N4eXtya3N7cGp0c3P/2wBDARUXFx4aHR4eHXNvZG9zc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3P/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
      }
      onError={() => setIsError(true)}
    />
  );
}
