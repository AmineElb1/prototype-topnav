import svgPaths from "./svg-ma6idkz1pe";
type NavItemButtonProps = {
  className?: string;
  property1?: "Default" | "Variant2";
};

function NavItemButton({ className, property1 = "Default" }: NavItemButtonProps) {
  const isVariant2 = property1 === "Variant2";
  return (
    <div className={className || `relative rounded-[999px] size-[16px] ${isVariant2 ? "bg-[#08f]" : ""}`}>
      <div className="absolute left-0 size-[16px] top-0" data-name="Icon">
        <div className="absolute inset-[34.71%_26.44%_37.34%_26.44%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" height="4.47175" preserveAspectRatio="none" viewBox="0 0 7.53843 4.47175" width="7.53843">
            <path d={svgPaths.p2fb44d00} fill={isVariant2 ? "white" : "black"} id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}
type NavItemProps = {
  className?: string;
  property1?: "Icon + chevron" | "No iocn" | "tab active" | "Tab active - chevron active" | "Tab active - no icon" | "Icon front button" | "Variant7" | "Icon front button - active" | "Icon + chevron - active" | "Icon + chevron - active - chevron active";
};

export default function NavItem({ className, property1 = "No iocn" }: NavItemProps) {
  const isIconChevronActiveChevronActiveOrTabActiveChevronActive = ["Icon + chevron - active - chevron active", "Tab active - chevron active"].includes(property1);
  const isIconChevronOrIconChevronActiveOrIconChevronActiveChevronActive = ["Icon + chevron", "Icon + chevron - active", "Icon + chevron - active - chevron active", "Variant7", "tab active", "Tab active - chevron active"].includes(property1);
  const isIconChevronOrIconChevronActiveOrIconChevronActiveChevronActive1 = ["Icon + chevron", "Icon + chevron - active", "Icon + chevron - active - chevron active"].includes(property1);
  const isIconFrontButtonOrIconFrontButtonActiveOrIconChevronOrIcon = ["Icon front button", "Icon front button - active", "Icon + chevron", "Icon + chevron - active", "Icon + chevron - active - chevron active"].includes(property1);
  return (
    <div className={className || "bg-[rgba(255,255,255,0.1)] relative rounded-[9999px]"}>
      <div aria-hidden className={`absolute border border-solid inset-0 pointer-events-none rounded-[9999px] shadow-[0px_2px_10px_0px_rgba(0,0,0,0.15)] ${["Tab active - no icon", "Icon front button - active", "Icon + chevron - active", "Icon + chevron - active - chevron active", "tab active", "Tab active - chevron active"].includes(property1) ? "border-[#08f]" : "border-white"}`} />
      <div className="flex flex-row items-center size-full">
        <div className={`content-stretch flex items-center py-[9px] relative size-full ${isIconChevronOrIconChevronActiveOrIconChevronActiveChevronActive ? "gap-[8px] pl-[17px] pr-[9px]" : ["Icon front button", "Icon front button - active"].includes(property1) ? "[word-break:break-word] gap-[4px] px-[13px] text-[#1a1a1a] text-center" : "gap-[4px] px-[13px]"}`}>
          {["No iocn", "Tab active - no icon", "Variant7", "tab active", "Tab active - chevron active"].includes(property1) && <p className="[word-break:break-word] font-['SF_Pro_Text:Regular',sans-serif] leading-[1.15] not-italic relative shrink-0 text-[#1a1a1a] text-[14px] text-center whitespace-nowrap">Voorpagina</p>}
          {isIconFrontButtonOrIconFrontButtonActiveOrIconChevronOrIcon && (
            <>
              <div className={`[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] flex flex-col font-["SF_Pro:Regular",sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[12px] w-[20px] ${isIconChevronOrIconChevronActiveOrIconChevronActiveChevronActive1 ? "[word-break:break-word] text-[#1a1a1a] text-center" : ""}`} style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[22px]">{`\u{100433}`}</p>
              </div>
              <p className={`font-["SF_Pro_Text:Regular",sans-serif] leading-[1.15] not-italic relative shrink-0 text-[14px] whitespace-nowrap ${isIconChevronOrIconChevronActiveOrIconChevronActiveChevronActive1 ? "[word-break:break-word] text-[#1a1a1a] text-center" : ""}`}>Voorpagina</p>
            </>
          )}
          {isIconChevronOrIconChevronActiveOrIconChevronActiveChevronActive && <NavItemButton className={`relative rounded-[999px] shrink-0 size-[16px] ${isIconChevronActiveChevronActiveOrTabActiveChevronActive ? "bg-[#08f]" : ""}`} property1={isIconChevronActiveChevronActiveOrTabActiveChevronActive ? "Variant2" : undefined} />}
        </div>
      </div>
    </div>
  );
}