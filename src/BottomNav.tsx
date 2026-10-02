import type { ReactNode } from "react"

const ICON_PROPS = {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
}

const ICON_HOME = (
  <svg {...ICON_PROPS}>
    <path d="M5 10.5L12 4l7 6.5V19a1 1 0 0 1-1 1h-3.5v-6h-5v6H6a1 1 0 0 1-1-1z" />
  </svg>
)

const ICON_KRANT = (
  <svg {...ICON_PROPS}>
    <path d="M4 7v10a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H8" />
    <path d="M4 7H2M4 7v0M8 5v13" />
    <path d="M11 10h6M11 14h6" />
  </svg>
)

const ICON_LUISTER = (
  <svg {...ICON_PROPS}>
    <path d="M4 15v-3a8 8 0 0 1 16 0v3" />
    <path d="M4 15h3v5H5.5A1.5 1.5 0 0 1 4 18.5zM20 15h-3v5h1.5a1.5 1.5 0 0 0 1.5-1.5z" />
  </svg>
)

const ICON_KIJKEN = (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M8 5v14l11-7z" />
  </svg>
)

const ITEMS: { id: string; label: string; icon: ReactNode }[] = [
  { id: "home", label: "Home", icon: ICON_HOME },
  { id: "krant", label: "Krant", icon: ICON_KRANT },
  { id: "luister", label: "Luister", icon: ICON_LUISTER },
  { id: "kijken", label: "Kijken", icon: ICON_KIJKEN },
]

export default function BottomNav() {
  return (
    <nav
      aria-label="Hoofdnavigatie onderaan"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: 64,
        flexShrink: 0,
        background: "#EBF2FF",
        zIndex: 5,
      }}
    >
      {ITEMS.map(item => {
        const isActive = item.id === "home"
        return (
          <button
            key={item.id}
            aria-current={isActive ? "page" : undefined}
            style={{
              flex: "1 0 0",
              alignSelf: "stretch",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 4,
              padding: "6px 0",
            }}
          >
            <span
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: 56,
                height: 32,
                borderRadius: 16,
                background: isActive ? "#2b70e8" : "transparent",
                color: isActive ? "#ffffff" : "#000000",
                transition: "background-color 0.15s",
              }}
            >
              {item.icon}
            </span>
            <span
              style={{
                fontFamily: "'Roboto', sans-serif",
                fontWeight: 500,
                fontSize: 12,
                lineHeight: "16px",
                letterSpacing: 0.5,
                textAlign: "center",
                color: isActive ? "#1a1a1a" : "#49454F",
              }}
            >
              {item.label}
            </span>
          </button>
        )
      })}
    </nav>
  )
}
