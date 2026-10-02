import svgPaths from "./svg-fnmaq02ho2";
type NavItemButtonProps = {
  className?: string;
  property1?: "Default";
};

function NavItemButton({ className, property1 = "Default" }: NavItemButtonProps) {
  return (
    <div className={className || "relative rounded-[999px] size-[16px]"}>
      <div className="absolute left-0 size-[16px] top-0" data-name="Icon">
        <div className="absolute inset-[34.71%_26.44%_37.34%_26.44%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" height="4.47175" preserveAspectRatio="none" viewBox="0 0 7.53843 4.47175" width="7.53843">
            <path d={svgPaths.p2fb44d00} fill="black" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="content-stretch flex gap-[12px] items-center p-[16px] relative size-full">
      <div className="bg-[rgba(255,255,255,0.1)] relative rounded-[9999px] shrink-0" data-name="Nav-item">
        <div aria-hidden className="absolute border border-[#08f] border-solid inset-0 pointer-events-none rounded-[9999px] shadow-[0px_2px_10px_0px_rgba(0,0,0,0.15)]" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[4px] items-center px-[13px] py-[9px] relative size-full">
            <p className="[word-break:break-word] font-['SF_Pro_Text:Regular',sans-serif] leading-[1.15] not-italic relative shrink-0 text-[#1a1a1a] text-[14px] text-center whitespace-nowrap">Alles</p>
          </div>
        </div>
      </div>
      <div className="bg-[rgba(255,255,255,0.1)] relative rounded-[9999px] shrink-0" data-name="Nav-item">
        <div aria-hidden className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[9999px] shadow-[0px_2px_10px_0px_rgba(0,0,0,0.15)]" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center pl-[17px] pr-[9px] py-[9px] relative size-full">
            <div className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1a1a1a] text-[12px] text-center w-[20px]" style={{ fontVariationSettings: '"wdth" 100' }}>
              <p className="leading-[22px]">{`\u{100433}`}</p>
            </div>
            <p className="[word-break:break-word] font-['SF_Pro_Text:Regular',sans-serif] leading-[1.15] not-italic relative shrink-0 text-[#1a1a1a] text-[14px] text-center whitespace-nowrap">Voetbal</p>
            <NavItemButton className="relative rounded-[999px] shrink-0 size-[16px]" />
          </div>
        </div>
      </div>
      <div className="bg-[rgba(255,255,255,0.1)] relative rounded-[9999px] shrink-0" data-name="Nav-item">
        <div aria-hidden className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[9999px] shadow-[0px_2px_10px_0px_rgba(0,0,0,0.15)]" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center pl-[17px] pr-[9px] py-[9px] relative size-full">
            <div className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1a1a1a] text-[17px] text-center w-[20px]" style={{ fontVariationSettings: '"wdth" 100' }}>
              <p className="leading-[22px]">{`\u{1015CD}`}</p>
            </div>
            <p className="[word-break:break-word] font-['SF_Pro_Text:Regular',sans-serif] leading-[1.15] not-italic relative shrink-0 text-[#1a1a1a] text-[14px] text-center whitespace-nowrap">Tennis</p>
            <NavItemButton className="relative rounded-[999px] shrink-0 size-[16px]" />
          </div>
        </div>
      </div>
      <div className="bg-[rgba(255,255,255,0.1)] relative rounded-[9999px] shrink-0" data-name="Nav-item">
        <div aria-hidden className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[9999px] shadow-[0px_2px_10px_0px_rgba(0,0,0,0.15)]" />
        <div className="flex flex-row items-center size-full">
          <div className="[word-break:break-word] content-stretch flex gap-[4px] items-center px-[13px] py-[9px] relative size-full text-[#1a1a1a] text-center">
            <div className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[17px] w-[20px]" style={{ fontVariationSettings: '"wdth" 100' }}>
              <p className="leading-[22px]">{`\u{101309}`}</p>
            </div>
            <p className="font-['SF_Pro_Text:Regular',sans-serif] leading-[1.15] not-italic relative shrink-0 text-[14px] whitespace-nowrap">Wielrennen</p>
          </div>
        </div>
      </div>
      <div className="bg-[rgba(255,255,255,0.1)] relative rounded-[9999px] shrink-0" data-name="Nav-item">
        <div aria-hidden className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[9999px] shadow-[0px_2px_10px_0px_rgba(0,0,0,0.15)]" />
        <div className="flex flex-row items-center size-full">
          <div className="[word-break:break-word] content-stretch flex gap-[4px] items-center px-[13px] py-[9px] relative size-full text-[#1a1a1a] text-center">
            <div className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[17px] w-[20px]" style={{ fontVariationSettings: '"wdth" 100' }}>
              <p className="leading-[22px]">{`\u{1016FD}`}</p>
            </div>
            <p className="font-['SF_Pro_Text:Regular',sans-serif] leading-[1.15] not-italic relative shrink-0 text-[14px] whitespace-nowrap">Hockey</p>
          </div>
        </div>
      </div>
    </div>
  );
}