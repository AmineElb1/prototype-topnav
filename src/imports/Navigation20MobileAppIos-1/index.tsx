import svgPaths from "./svg-xeo0dfukyr";

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

function HeaderNavLogo() {
  return (
    <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
      <div className="content-stretch flex flex-[1_0_0] h-full items-center max-h-[32px] max-w-[170px] min-w-px overflow-clip relative" data-name="header-nav__logo">
        <div className="aspect-[316.6361389160156/44.44443893432617] flex-[1_0_0] min-w-px relative" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" height="23.8619" preserveAspectRatio="none" viewBox="0 0 170 23.8619" width="170">
            <g id="Vector">
              <path d={svgPaths.p11e7f180} fill="black" />
              <path d={svgPaths.p17155600} fill="black" />
              <path d={svgPaths.p3ebc2000} fill="black" />
              <path d={svgPaths.p318d8200} fill="black" />
              <path d={svgPaths.p115d2e00} fill="black" />
              <path d={svgPaths.p397827e0} fill="black" />
              <path d={svgPaths.p6829f00} fill="black" />
              <path d={svgPaths.p240f2b00} fill="black" />
              <path d={svgPaths.p290a5f00} fill="black" />
              <path d={svgPaths.p294ce100} fill="black" />
            </g>
          </svg>
        </div>
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

function Frame() {
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
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[8px] relative size-full">
          <HeaderNavLogo />
          <Frame />
        </div>
      </div>
    </div>
  );
}

export default function Navigation20MobileAppIos() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full" data-name="Navigation2.0 - MobileApp - IOS">
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