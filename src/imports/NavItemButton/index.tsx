import svgPaths from "./svg-9qgdp11we1";
type NavItemButtonProps = {
  className?: string;
  property1?: "Default" | "Variant2";
};

export default function NavItemButton({ className, property1 = "Default" }: NavItemButtonProps) {
  const isVariant2 = property1 === "Variant2";
  return (
    <div className={className || `relative rounded-[999px] size-[16px] ${isVariant2 ? "bg-[#08f]" : ""}`}>
      {property1 === "Default" && (
        <div className="absolute left-0 size-[16px] top-0" data-name="Icon">
          <div className="absolute inset-[34.71%_26.44%_37.34%_26.44%]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" height="4.47175" preserveAspectRatio="none" viewBox="0 0 7.53843 4.47175" width="7.53843">
              <path d={svgPaths.p2fb44d00} fill="black" id="Vector" />
            </svg>
          </div>
        </div>
      )}
      {isVariant2 && (
        <div className="absolute flex items-center justify-center left-0 size-[16px] top-0">
          <div className="flex-none rotate-180">
            <div className="relative size-[16px]" data-name="Icon">
              <div className="absolute inset-[34.71%_26.44%_37.34%_26.44%]" data-name="Vector">
                <svg className="absolute block inset-0 size-full" fill="none" height="4.47175" preserveAspectRatio="none" viewBox="0 0 7.53843 4.47175" width="7.53843">
                  <path d={svgPaths.p2fb44d00} fill="white" id="Vector" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}