"use client";

export function StepIneligibleUnder13() {
  return (
    <div className="flex flex-col items-center justify-start w-full h-full text-center pt-[12vh] px-4">
      {/* Headline */}
      <h2 className="m-0 font-inter font-black text-white text-2xl leading-snug">
        Not quite yet.
      </h2>

      {/* Body */}
      <p className="m-0 mt-4 text-base text-[#EAEAEA] max-w-[90%] leading-relaxed">
        You need to be 13 or older to use this app. Come back when you’re old
        enough to start your NIL journey.
      </p>
    </div>
  );
}
