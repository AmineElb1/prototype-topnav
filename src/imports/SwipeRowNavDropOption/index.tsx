import imgPlaceholder from "./941fdb80140d5a65b39255b5f432f035bba86d80.png";
import imgPremium from "./a0ae29c039332fbcf8b86b2d1c99fa7a8d34d6cd.png";
import svgPaths from "./svg-qaqw4ar06x";
import imgHeaderLogo from "./46f61462f703111ff59745994d2f7e2505d0a338.png";
import imgPlaceholder1 from "./dcde0f5af188b20b2783a79ac2dccc9e59497f16.png";
import { imgBlur } from "./svg-01qht";
type LargeTeaserMobileProps = {
  className?: string;
  ad?: "False";
  highlight?: "False";
  padding?: "True";
};

function LargeTeaserMobile({ className, ad = "False", highlight = "False", padding = "True" }: LargeTeaserMobileProps) {
  return (
    <div className={className || "relative w-[375px]"}>
      <div className="content-stretch flex flex-col items-start px-[16px] relative size-full">
        <div className="relative shrink-0 w-full" data-name="DefaultTeaser">
          <div className="content-stretch flex flex-col items-start relative size-full">
            <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Image Prop">
              <div className="flex-[1_0_0] min-w-px relative shadow-[0px_0px_0px_0px_rgba(0,0,0,0)]" data-name="Placeholder">
                <div aria-hidden className="absolute inset-0 pointer-events-none">
                  <div className="absolute bg-[#e0e0e0] inset-0" />
                  <img alt="" className="absolute max-w-none object-contain size-full" src={imgPlaceholder} />
                </div>
                <div className="overflow-clip rounded-[inherit] size-full">
                  <div className="content-stretch flex flex-col items-start relative size-full">
                    <div className="relative shrink-0 w-full" data-name="Aspect Ratio">
                      <div className="overflow-clip rounded-[inherit] size-full">
                        <div className="content-stretch flex flex-col items-start relative size-full">
                          <div className="flex h-[166.666px] items-center justify-center relative shrink-0 w-full">
                            <div className="flex-none rotate-[-41.81deg] w-full">
                              <div className="h-0 relative w-full" data-name="Aspect ratio keeper # Rotated Auto Layout" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-[0.32px] content-stretch flex flex-col h-[32.001px] items-start left-0 pb-[16px] pl-[16px] w-[68.481px]" data-name="Premium Long Prop" />
            </div>
            <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-col items-start pt-[8px] relative shrink-0 w-full" data-name="Body">
              <div className="content-center flex flex-wrap gap-0 items-center relative shrink-0 w-full" data-name="Taxonomy">
                <div className="bg-white relative shrink-0 size-[0.001px]" data-name="Spacer" />
                <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Premium Prop">
                  <div className="bg-white relative shrink-0 size-[0.001px]" data-name="Spacer" />
                </div>
                <div className="content-stretch flex items-start pb-[4px] pr-[4px] relative shrink-0" data-name="Label">
                  <div className="bg-[rgba(255,255,255,0)] content-stretch flex items-start relative shrink-0" data-name="Label Layout">
                    <p className="[word-break:break-word] font-['SF_Pro_Text:Bold',sans-serif] leading-[1.15] not-italic relative shrink-0 text-[#2b70e8] text-[14px] whitespace-nowrap">label</p>
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Premium Prop">
                  <div className="content-stretch flex flex-col items-start pb-[4px] relative shrink-0" data-name="Premium Token After Taxonomy">
                    <div className="content-stretch flex items-start overflow-clip pb-[12px] pr-[12px] relative shrink-0" data-name="Premium">
                      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgPremium} />
                      <div className="bg-white relative shrink-0 size-[0.001px]" data-name="Spacer" />
                    </div>
                  </div>
                  <div className="bg-white relative shrink-0 size-[0.001px]" data-name="Spacer" />
                </div>
              </div>
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Title">
                <p className="[word-break:break-word] font-['SF_Pro_Text:Medium',sans-serif] leading-[1.2] min-w-full not-italic relative shrink-0 text-[#1a1a1a] text-[32px] w-[min-content]">The quick brown fox jumps over the lazy dog and bumps into a hole</p>
                <div className="absolute content-stretch flex items-center left-0 overflow-clip top-0" data-name="Premium Prop">
                  <p className="[word-break:break-word] font-['SF_Pro_Text:Medium',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#1a1a1a] text-[32px] w-[0.001px]">M</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
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

function Time() {
  return (
    <div className="h-[54px] relative shrink-0 w-[134.065px]" data-name="Time">
      <p className="[word-break:break-word] absolute font-['SF_Pro:Semibold',sans-serif] font-[590] inset-[33.96%_36.71%_25.3%_36.96%] leading-[22px] text-[17px] text-center text-white whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        9:41
      </p>
    </div>
  );
}

function Levels() {
  return (
    <div className="h-[54px] relative shrink-0 w-[134.065px]" data-name="Levels">
      <svg className="absolute block inset-0 size-full" fill="none" height="54" preserveAspectRatio="none" viewBox="0 0 134.065 54" width="134.065">
        <g id="Levels">
          <g id="Battery">
            <rect height="12" id="Border" opacity="0.35" rx="3.8" stroke="white" width="24" x="78.5" y="23.5" />
            <path d={svgPaths.p1af82040} fill="white" id="Cap" opacity="0.4" />
            <rect fill="white" height="9" id="Capacity" rx="2.5" width="21" x="80" y="25" />
          </g>
          <path clipRule="evenodd" d={svgPaths.p397d7f00} fill="white" fillRule="evenodd" id="Wifi" />
          <path clipRule="evenodd" d={svgPaths.p37488800} fill="white" fillRule="evenodd" id="Cellular Connection" />
        </g>
      </svg>
    </div>
  );
}

function Spacer() {
  return <div className="bg-black relative shrink-0 size-0" data-name="spacer" />;
}

function HeaderLogo() {
  return (
    <div className="flex-[1_0_0] max-w-[170px] min-w-px relative" data-name="header__logo">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgHeaderLogo} />
      <div className="flex flex-row items-center justify-center max-w-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center max-w-[inherit] pr-[170px] pt-[23px] relative size-full">
          <Spacer />
        </div>
      </div>
    </div>
  );
}

function HeaderNavLogo() {
  return (
    <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
      <div className="content-stretch flex flex-[1_0_0] h-full items-center max-h-[32px] min-w-px overflow-clip relative" data-name="header-nav__logo">
        <HeaderLogo />
      </div>
    </div>
  );
}

function TintShadow() {
  return (
    <div className="absolute inset-0 rounded-[1000px] shadow-[0px_8px_40px_0px_rgba(0,0,0,0.12)]" data-name="Tint + Shadow">
      <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[1000px]">
        <div className="absolute bg-[rgba(255,255,255,0.75)] inset-0 rounded-[1000px]" />
        <div className="absolute bg-white inset-0 mix-blend-saturation rounded-[1000px]" />
        <div className="absolute bg-[#999] inset-0 mix-blend-overlay rounded-[1000px]" />
      </div>
    </div>
  );
}

function TintShadow1() {
  return <div className="absolute bg-[#2b70e8] inset-0 rounded-[1000px]" data-name="Tint + Shadow" />;
}

function GlassEffect() {
  return <div className="absolute bg-[rgba(0,0,0,0)] inset-0 rounded-[296px]" data-name="Glass Effect" />;
}

function ButtonLiquidGlassText() {
  return (
    <div className="content-stretch flex gap-[4px] h-[32px] items-center justify-center pb-[5px] pt-[7px] px-[20px] relative rounded-[1000px] shrink-0" data-name="Button - Liquid Glass - Text">
      <TintShadow />
      <TintShadow1 />
      <GlassEffect />
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-center text-white whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[16px]">Subscribe</p>
      </div>
    </div>
  );
}

function TintShadow2() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%+0.5px)] rounded-[1000px] shadow-[0px_8px_40px_0px_rgba(0,0,0,0.12)] size-[30px] top-[calc(50%+0.5px)]" data-name="Tint + Shadow">
      <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[1000px]">
        <div className="absolute bg-[rgba(255,255,255,0.75)] inset-0 rounded-[1000px]" />
        <div className="absolute bg-white inset-0 mix-blend-saturation rounded-[1000px]" />
        <div className="absolute bg-[#999] inset-0 mix-blend-overlay rounded-[1000px]" />
      </div>
    </div>
  );
}

function TintShadow3() {
  return <div className="absolute bg-[#2b70e8] inset-0 rounded-[1000px]" data-name="Tint + Shadow" />;
}

function GlassEffect1() {
  return <div className="absolute bg-[rgba(0,0,0,0)] inset-0 rounded-[296px]" data-name="Glass Effect" />;
}

function Bg() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%-0.5px)] size-[33px] top-[calc(50%-0.5px)]" data-name="BG">
      <TintShadow2 />
      <TintShadow3 />
      <GlassEffect1 />
    </div>
  );
}

function Search() {
  return (
    <div className="content-stretch flex items-center p-[4px] relative shrink-0 w-[32px]" data-name="Search">
      <Bg />
      <div className="relative shrink-0 size-[24px]" data-name="person">
        <div className="absolute inset-[22.44%_20.83%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" height="13.231" preserveAspectRatio="none" viewBox="0 0 14 13.231" width="14">
            <path d={svgPaths.p306d7800} fill="white" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Wrapper() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[36px]" data-name="Wrapper">
      <Search />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <ButtonLiquidGlassText />
      <Wrapper />
    </div>
  );
}

function HeaderNav() {
  return (
    <div className="relative shrink-0 w-full" data-name="header-nav">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[16px] py-[8px] relative size-full">
          <HeaderNavLogo />
          <Frame1 />
        </div>
      </div>
    </div>
  );
}

function Navigation20MobileAppIos() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Navigation2.0 - MobileApp - IOS">
      <div className="relative shrink-0 w-full" data-name=".Status Bar - iPhone">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-between relative size-full">
            <Time />
            <Levels />
          </div>
        </div>
      </div>
      <HeaderNav />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex items-center justify-center py-[20px] relative shrink-0">
      <p className="[word-break:break-word] font-['SF_Pro_Text:Regular',sans-serif] leading-[1.15] not-italic relative shrink-0 text-[#1a1a1a] text-[14px] text-center whitespace-nowrap">Vandaag</p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex items-center justify-center py-[20px] relative shrink-0">
      <div aria-hidden className="absolute border-b-4 border-black border-solid inset-0 pointer-events-none" />
      <p className="[word-break:break-word] font-['SF_Pro_Text:Regular',sans-serif] leading-[1.15] not-italic relative shrink-0 text-[#1a1a1a] text-[14px] text-center whitespace-nowrap">Sport</p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex items-center justify-center py-[20px] relative shrink-0">
      <p className="[word-break:break-word] font-['SF_Pro_Text:Regular',sans-serif] leading-[1.15] not-italic relative shrink-0 text-[#1a1a1a] text-[14px] text-center whitespace-nowrap">Iran</p>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex items-center justify-center py-[20px] relative shrink-0">
      <p className="[word-break:break-word] font-['SF_Pro_Text:Regular',sans-serif] leading-[1.15] not-italic relative shrink-0 text-[#1a1a1a] text-[14px] text-center whitespace-nowrap">Politiek</p>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex items-center justify-center py-[20px] relative shrink-0">
      <p className="[word-break:break-word] font-['SF_Pro_Text:Regular',sans-serif] leading-[1.15] not-italic relative shrink-0 text-[#1a1a1a] text-[14px] text-center whitespace-nowrap">Misdaad</p>
    </div>
  );
}

function TabRow() {
  return (
    <div className="content-stretch flex items-center px-[12px] relative shrink-0" data-name="TabRow">
      <div className="relative shrink-0" data-name="Tab">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center px-[8px] relative size-full">
            <Frame5 />
          </div>
        </div>
      </div>
      <div className="relative shrink-0" data-name="Tab">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center px-[8px] relative size-full">
            <Frame4 />
          </div>
        </div>
      </div>
      <div className="relative shrink-0" data-name="Tab">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center px-[8px] relative size-full">
            <Frame6 />
          </div>
        </div>
      </div>
      <div className="relative shrink-0" data-name="Tab">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center px-[8px] relative size-full">
            <Frame7 />
          </div>
        </div>
      </div>
      <div className="relative shrink-0" data-name="Tab">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center px-[8px] relative size-full">
            <Frame8 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[12px] items-center p-[16px] relative shrink-0 w-full">
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

function FillShadow() {
  return (
    <div className="absolute left-0 rounded-[296px] shadow-[0px_8px_40px_0px_rgba(0,0,0,0.12)] size-[51px] top-0" data-name="Fill + Shadow">
      <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[296px]">
        <div className="absolute bg-[rgba(255,255,255,0.65)] inset-0 rounded-[296px]" />
        <div className="absolute bg-[#ddd] inset-0 mix-blend-color-burn rounded-[296px]" />
        <div className="absolute bg-[#f7f7f7] inset-0 mix-blend-darken rounded-[296px]" />
      </div>
    </div>
  );
}

function FillShadow1() {
  return <div className="absolute bg-white inset-0 rounded-[296px]" data-name="Fill + Shadow" />;
}

function GlassEffect2() {
  return <div className="absolute bg-[rgba(0,0,0,0)] inset-0 rounded-[296px]" data-name="Glass Effect" />;
}

function Bg1() {
  return (
    <div className="absolute left-0 size-[51px] top-0" data-name="BG">
      <FillShadow />
      <FillShadow1 />
      <GlassEffect2 />
    </div>
  );
}

function Tab() {
  return (
    <div className="content-stretch flex flex-col gap-px items-center justify-center pb-[7px] pt-[6px] px-[8px] relative shrink-0 size-[51px]" data-name="Tab 1">
      <div className="relative shrink-0 size-[28px]" data-name="home">
        <div className="absolute inset-[17.55%_20.83%_16.67%_20.83%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" height="18.4199" preserveAspectRatio="none" viewBox="0 0 16.3333 18.4199" width="16.3333">
            <path d={svgPaths.p30021800} fill="#2B70E8" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function FillShadow2() {
  return (
    <div className="absolute inset-0 rounded-[296px] shadow-[0px_8px_40px_0px_rgba(0,0,0,0.12)]" data-name="Fill + Shadow">
      <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[296px]">
        <div className="absolute bg-[rgba(255,255,255,0.65)] inset-0 rounded-[296px]" />
        <div className="absolute bg-[#ddd] inset-0 mix-blend-color-burn rounded-[296px]" />
        <div className="absolute bg-[#f7f7f7] inset-0 mix-blend-darken rounded-[296px]" />
      </div>
    </div>
  );
}

function FillShadow3() {
  return <div className="absolute bg-white inset-0 rounded-[296px]" data-name="Fill + Shadow" />;
}

function GlassEffect3() {
  return <div className="absolute bg-[rgba(0,0,0,0)] inset-0 rounded-[296px]" data-name="Glass Effect" />;
}

function AspectRatioKeeperRotatedAutoLayout() {
  return (
    <div className="flex h-full items-center justify-center relative shrink-0 w-[103.554px]">
      <div className="flex-none h-full rotate-[24.47deg]">
        <div className="h-full relative w-0" data-name="Aspect ratio keeper # Rotated Auto Layout" />
      </div>
    </div>
  );
}

function AspectRatioKeeperAdditionally45RotatedAutoLayout() {
  return (
    <div className="flex h-[250px] items-center justify-center relative shrink-0 w-full" style={{ containerType: "size" }}>
      <div className="-rotate-45 flex-none h-[100cqw]">
        <div className="content-stretch flex h-full items-start relative w-[103.554px]" data-name="Aspect ratio keeper # Additionally 45º rotated Auto Layout">
          <AspectRatioKeeperRotatedAutoLayout />
        </div>
      </div>
    </div>
  );
}

function TitleAndDescription() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative self-stretch text-[#1a1a1a] text-[15px] tracking-[-0.23px]" data-name="Title and Description">
      <p className="font-['SF_Pro:Semibold',sans-serif] font-[590] h-[17.5px] leading-[17px] relative shrink-0 w-[235.667px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        Title
      </p>
      <p className="font-['SF_Pro:Regular',sans-serif] font-normal h-[17.5px] leading-[18px] relative shrink-0 w-[309.667px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        Description
      </p>
    </div>
  );
}

function Icon() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative shrink-0" data-name="Icon">
      <div className="relative shrink-0 size-[24px]" data-name="pause">
        <div className="absolute inset-[22.92%_26.04%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" height="13" preserveAspectRatio="none" viewBox="0 0 11.5 13" width="11.5">
            <path d={svgPaths.p19296a25} fill="#1A1A1A" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative shrink-0" data-name="Icon">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="close">
        <div className="absolute inset-[20.83%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" height="14" preserveAspectRatio="none" viewBox="0 0 14 14" width="14">
            <path d={svgPaths.p2404b080} fill="#1A1A1A" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[10px] items-start justify-center min-w-px relative" data-name="Frame">
      <TitleAndDescription />
      <button className="cursor-pointer relative rounded-[9999px] shrink-0 size-[40px]" data-name="Icon Button">
        <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-center justify-center p-[12px] relative size-full">
            <Icon />
          </div>
        </div>
      </button>
      <button className="bg-[rgba(255,255,255,0)] cursor-pointer relative rounded-[2px] shrink-0 size-[40px]" data-name="Icon Button">
        <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-center justify-center p-[12px] relative size-full">
            <Icon1 />
          </div>
        </div>
      </button>
    </div>
  );
}

function NotificationCollapsed() {
  return (
    <div className="absolute content-stretch flex gap-[10px] h-[52px] items-center justify-center left-[63px] px-[16px] py-[12px] rounded-[24px] top-0 w-[271px]" data-name="Notification - Collapsed">
      <FillShadow2 />
      <FillShadow3 />
      <GlassEffect3 />
      <div className="relative rounded-[8px] shadow-[0px_0px_0px_0px_rgba(0,0,0,0)] shrink-0 size-[32px]" data-name="Placeholder">
        <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[8px]">
          <div className="absolute bg-[#e0e0e0] inset-0 rounded-[8px]" />
          <img alt="" className="absolute max-w-none object-contain rounded-[8px] size-full" src={imgPlaceholder1} />
        </div>
        <div className="overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col items-start relative size-full">
            <div className="relative rounded-[4px] shrink-0 w-full" data-name="Aspect Ratio">
              <div className="overflow-clip rounded-[inherit] size-full">
                <div className="content-stretch flex flex-col items-start relative size-full">
                  <AspectRatioKeeperAdditionally45RotatedAutoLayout />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Frame />
    </div>
  );
}

function TabBarButtons() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-[51px] items-center min-w-px relative" data-name="Tab Bar Buttons">
      <Bg1 />
      <Tab />
      <NotificationCollapsed />
    </div>
  );
}

function TabBarIPhone() {
  return (
    <div className="absolute bottom-0 content-stretch flex items-start left-0 pb-[25px] pt-[16px] px-[25px] w-[375px]" data-name="Tab Bar - iPhone">
      <TabBarButtons />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col items-start px-[16px] py-[8px] relative shrink-0 w-full">
      <p className="[word-break:break-word] font-['SF_Pro_Text:Bold',sans-serif] leading-[1.15] not-italic relative shrink-0 text-[24px] text-black text-center whitespace-nowrap">Sport</p>
    </div>
  );
}

export default function SwipeRowNavDropOption() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-name="Swipe row nav + drop option">
      <Navigation20MobileAppIos />
      <div className="relative shrink-0 w-[393px]" data-name="TabRow-Brand">
        <div aria-hidden className="absolute border-[#e0e0e0] border-b border-solid inset-0 pointer-events-none" />
        <div className="content-stretch flex items-start relative size-full">
          <TabRow />
        </div>
      </div>
      <Frame3 />
      <div className="absolute h-[93px] left-0 top-[759px] w-[393px]" data-name="Tab Bar - IOS">
        <div className="-translate-x-1/2 absolute backdrop-blur-[5px] bottom-0 h-[93px] left-1/2 opacity-75 w-[375px]" data-name=".gradient">
          <div className="absolute backdrop-blur-[30px] bg-black inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-size-[100%_100%] mix-blend-screen opacity-90" style={{ maskImage: `url("${imgBlur}")` }} data-name="Blur" />
        </div>
        <TabBarIPhone />
      </div>
      <Frame2 />
      <LargeTeaserMobile className="relative shrink-0 w-full" />
    </div>
  );
}