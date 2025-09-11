"use client";

interface StepVerifyPhoneProps {
  onNext: () => void;
}

export function StepVerifyPhone({ onNext }: StepVerifyPhoneProps) {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <p className="text-gray-700">Hello World — StepVerifyPhone</p>
      <button
        onClick={onNext}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Next
      </button>
    </div>
  );
}
