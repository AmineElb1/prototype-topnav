export default function Component({ className }: { className?: string }) {
  return (
    <div className={className || "h-[12px] relative w-[21px]"} data-name="􁛽">
      <div className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] absolute flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal inset-0 justify-center leading-[0] text-[#1a1a1a] text-[17px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[22px]">{`\u{1016FD}`}</p>
      </div>
    </div>
  );
}