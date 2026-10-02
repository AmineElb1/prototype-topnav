import NavItemButton from "@/imports/NavItemButton";
type NavItemProps = {
  className?: string;
  children?: React.ReactNode | null;
  property1?: "Tab active - chevron active";
};

function NavItem({ className, children = null, property1 = "Tab active - chevron active" }: NavItemProps) {
  return (
    <div className={className || "bg-[rgba(255,255,255,0.1)] relative rounded-[9999px]"}>
      <div aria-hidden className="absolute border border-[#08f] border-solid inset-0 pointer-events-none rounded-[9999px] shadow-[0px_2px_10px_0px_rgba(0,0,0,0.15)]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-[17px] pr-[9px] py-[9px] relative size-full">
          <p className="[word-break:break-word] font-['SF_Pro_Text:Regular',sans-serif] leading-[1.15] not-italic relative shrink-0 text-[#1a1a1a] text-[14px] text-center whitespace-nowrap">Voorpagina</p>
          <div className="h-[16px] relative shrink-0 w-0" data-name="Slot">
            {children}
          </div>
          <NavItemButton className="flex items-center justify-center relative shrink-0" property1="Variant2" />
        </div>
      </div>
    </div>
  );
}

export default function NavItem1() {
  return <NavItem className="bg-[rgba(255,255,255,0.1)] relative rounded-[9999px] size-full" />;
}