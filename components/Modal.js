"use client";
import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Modal({ children }) {
  const modalRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    if (!modalRef.current.open) {
      modalRef.current.showModal();
    }
  }, []);

  const onHide = () => {
    router.back();
    console.log("clidked");
  };
  return createPortal(
    <dialog className="w-4/5" ref={modalRef} onClose={onHide}>
      <span onClick={onHide} className="flex justify-end cursor-pointer">
        <Image src="/xmark.svg" alt="close" width={30} height={30} />
      </span>
      {children}
    </dialog>,
    document.getElementById("modal-root-content")
  );
}
