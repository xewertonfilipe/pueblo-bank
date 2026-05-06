'use client';

import { X } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useEffect, useRef } from 'react';

interface ModalProps {
  children: React.ReactNode;
}

export function Modal({ children }: ModalProps) {
  const router = useRouter();
  const dialogRef = useRef<React.ElementRef<'dialog'>>(null);

  useEffect(() => {
    if (!dialogRef.current?.open) {
      dialogRef.current?.showModal();
    }
  }, []);

  function onDismiss() {
    router.back();
  }

  return (
    <dialog ref={dialogRef} className="modal backdrop:bg-black/50 backdrop:backdrop-blur-sm" onClose={onDismiss}>
      <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm" onClick={onDismiss} />
      <div className="fixed top-[50%] left-[50%] z-50 w-full max-w-4xl translate-x-[-50%] translate-y-[-50%] rounded-lg bg-white shadow-2xl">
        <button
          onClick={onDismiss}
          className="absolute top-4 right-4 z-10 rounded-full bg-black/10 p-2 transition-colors hover:bg-black/20"
        >
          <X className="h-4 w-4" />
        </button>
        {children}
      </div>
    </dialog>
  );
}
