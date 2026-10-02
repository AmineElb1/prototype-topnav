function Slot() {
  return <div className="h-[16px] relative shrink-0 w-0" data-name="Slot" />;
}

export default function NavItem() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] relative rounded-[9999px] size-full" data-name="Nav-item">
      <div aria-hidden className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[9999px] shadow-[0px_2px_10px_0px_rgba(0,0,0,0.15)]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center px-[13px] py-[9px] relative size-full">
          <div className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1a1a1a] text-[17px] text-center w-[20px]" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="leading-[22px]">{`\u{1009A5}`}</p>
          </div>
          <p className="[word-break:break-word] font-['SF_Pro_Text:Regular',sans-serif] leading-[1.15] not-italic relative shrink-0 text-[#1a1a1a] text-[14px] text-center whitespace-nowrap">Voetbal</p>
          <Slot />
        </div>
      </div>
    </div>
  );
}