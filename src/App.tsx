import { useState, useRef, useEffect, useCallback, type ReactNode } from "react"
import Navigation20MobileAppIos from "./imports/Navigation20MobileAppIos/index"
import BottomNav from "./BottomNav"
import SectionPage from "./SectionPages"

// ─── SF Symbols as inline SVG (cross-platform, exact Figma geometry) ──────────

const ICON_VOETBAL = (
  <svg viewBox="0 0 16.9336 16.9336" fill="none" width="17" height="17">
    <path fill="currentColor" d="M8.4668 5.13818L11.7041 7.62842L10.4092 11.6128H6.52441L5.22949 7.62842L8.4668 5.13818ZM11.3804 1.32812L8.4585 3.68555L5.52832 1.32812L8.4585 0.373535L11.3804 1.32812ZM8.01025 0.655762H8.93164V6.15088H8.01025V0.655762ZM14.2607 3.41992L15.8462 5.40381L16.4438 8.84863L13.1733 7.01416L14.2607 3.41992ZM16.1533 6.30029L11.0566 8.36719L10.708 7.51221L15.8047 5.45361L16.1533 6.30029ZM10.376 16.0454L11.2227 12.3848L15.041 12.4429L13.1484 14.8418L10.376 16.0454ZM13.4473 14.5015L12.7168 15.0576L9.33008 10.7246L10.0688 10.1602L13.4473 14.5015ZM6.54932 16.0122L3.77686 14.8086L1.88428 12.4097L5.70264 12.3516L6.54932 16.0122ZM3.47803 14.4683L6.85645 10.127L7.59521 10.6914L4.2085 15.0244L3.47803 14.4683ZM2.67285 3.41992L3.76025 7.01416L0.489746 8.84863L1.0874 5.40381L2.67285 3.41992ZM0.780273 6.30029L1.12891 5.45361L6.22559 7.51221L5.87695 8.36719L0.780273 6.30029ZM8.4668 16.9336C7.29915 16.9336 6.20345 16.7122 5.17969 16.2695C4.15592 15.8324 3.25667 15.2264 2.48193 14.4517C1.70719 13.6769 1.09847 12.7777 0.655762 11.7539C0.218587 10.7301 0 9.63444 0 8.4668C0 7.29915 0.218587 6.20345 0.655762 5.17969C1.09847 4.15592 1.70719 3.25667 2.48193 2.48193C3.25667 1.70166 4.15592 1.09294 5.17969 0.655762C6.20345 0.218587 7.29915 0 8.4668 0C9.63444 0 10.7301 0.218587 11.7539 0.655762C12.7777 1.09294 13.6769 1.70166 14.4517 2.48193C15.2264 3.25667 15.8324 4.15592 16.2695 5.17969C16.7122 6.20345 16.9336 7.29915 16.9336 8.4668C16.9336 9.63444 16.7122 10.7301 16.2695 11.7539C15.8324 12.7777 15.2264 13.6769 14.4517 14.4517C13.6769 15.2264 12.7777 15.8324 11.7539 16.2695C10.7301 16.7122 9.63444 16.9336 8.4668 16.9336ZM8.4668 15.8047C9.47949 15.8047 10.4285 15.6138 11.314 15.2319C12.1994 14.8501 12.9797 14.3244 13.6548 13.6548C14.3299 12.9797 14.8556 12.1994 15.2319 11.314C15.6138 10.4285 15.8047 9.47949 15.8047 8.4668C15.8047 7.4541 15.6138 6.50505 15.2319 5.61963C14.8556 4.72868 14.3299 3.9484 13.6548 3.27881C12.9797 2.60368 12.1994 2.07796 11.314 1.70166C10.4285 1.31982 9.47949 1.12891 8.4668 1.12891C7.4541 1.12891 6.50505 1.31982 5.61963 1.70166C4.73421 2.07796 3.95394 2.60368 3.27881 3.27881C2.60368 3.9484 2.0752 4.72868 1.69336 5.61963C1.31706 6.50505 1.12891 7.4541 1.12891 8.4668C1.12891 9.47949 1.31706 10.4285 1.69336 11.314C2.0752 12.1994 2.60368 12.9797 3.27881 13.6548C3.95394 14.3244 4.73421 14.8501 5.61963 15.2319C6.50505 15.6138 7.4541 15.8047 8.4668 15.8047Z"/>
  </svg>
)

const ICON_TENNIS = (
  <svg viewBox="0 0 17.8301 17.8215" fill="none" width="18" height="18">
    <path fill="currentColor" d="M16.4771 1.3693C16.9862 1.87288 17.3514 2.45671 17.5728 3.12077C17.7996 3.78483 17.8854 4.47933 17.8301 5.20426C17.7747 5.9292 17.5838 6.64583 17.2573 7.35417C16.9308 8.05697 16.4715 8.70443 15.8794 9.29655C15.1877 9.98828 14.4323 10.4836 13.6133 10.7824C12.7943 11.0757 11.9559 11.2362 11.0981 11.2638C10.4728 11.286 9.90283 11.3275 9.38818 11.3883C8.87354 11.4437 8.37826 11.5544 7.90234 11.7204C7.43197 11.8864 6.95329 12.1382 6.46631 12.4757C5.97933 12.8078 5.44808 13.2588 4.87256 13.8288L4.00928 12.9738C4.5848 12.3983 5.04134 11.867 5.37891 11.38C5.72201 10.8875 5.97656 10.4033 6.14258 9.92741C6.31413 9.4515 6.42757 8.95622 6.48291 8.44157C6.53825 7.92139 6.57145 7.3514 6.58252 6.73161C6.59359 5.89046 6.7513 5.05762 7.05566 4.23307C7.36003 3.40299 7.85531 2.64486 8.5415 1.95866C9.13363 1.36654 9.78109 0.909994 10.4839 0.58903C11.1922 0.262533 11.9089 0.0716146 12.6338 0.016276C13.3587 -0.0390625 14.0532 0.0467122 14.7173 0.2736C15.3813 0.494954 15.9679 0.860189 16.4771 1.3693ZM15.5889 2.24919C15.0465 1.70687 14.424 1.36654 13.7212 1.22819C13.0239 1.08984 12.3045 1.15625 11.563 1.42741C10.8215 1.69857 10.1104 2.17171 9.42969 2.84684C8.74902 3.52751 8.27311 4.24137 8.00195 4.98844C7.73079 5.73551 7.66439 6.45768 7.80273 7.15495C7.94108 7.85221 8.28418 8.47201 8.83203 9.01432C9.37435 9.55664 9.99414 9.89697 10.6914 10.0353C11.3887 10.1737 12.1081 10.1073 12.8496 9.8361C13.5967 9.56494 14.3133 9.08903 14.9995 8.40837C15.6802 7.73324 16.1533 7.0249 16.4189 6.28337C16.6901 5.54183 16.7537 4.82243 16.6099 4.12516C16.4715 3.42236 16.1312 2.79704 15.5889 2.24919ZM7.94385 9.90251C7.8221 9.78076 7.70589 9.65348 7.59521 9.52067C7.49007 9.38786 7.39323 9.24675 7.30469 9.09733C7.23828 9.50684 7.13037 9.90804 6.98096 10.3009C6.83708 10.6883 6.62679 11.0868 6.3501 11.4963C6.7596 11.2251 7.15804 11.0148 7.54541 10.8654C7.93831 10.716 8.33952 10.6053 8.74902 10.5334C8.60514 10.4448 8.46403 10.3507 8.32568 10.2511C8.18734 10.146 8.06006 10.0298 7.94385 9.90251ZM0.290527 16.9831C0.0968425 16.7894 0 16.5653 0 16.3107C0 16.0617 0.0968425 15.8431 0.290527 15.6549L3.50293 12.4259C3.69661 12.2378 3.91797 12.1437 4.16699 12.1437C4.42155 12.1437 4.64567 12.2378 4.83936 12.4259L5.38721 12.9821C5.58089 13.1702 5.67773 13.3916 5.67773 13.6462C5.67773 13.9007 5.58089 14.1248 5.38721 14.3185L2.1748 17.5392C1.98112 17.7274 1.757 17.8215 1.50244 17.8215C1.25342 17.8215 1.03206 17.7274 0.838379 17.5392L0.290527 16.9831ZM7.22998 6.632L13.2148 0.638835L13.6299 1.06217L7.64502 7.04704L7.22998 6.632ZM7.69482 8.54118L15.1323 1.11198L15.5308 1.53532L8.10156 8.95622L7.69482 8.54118ZM8.88184 9.73649L16.3193 2.29899L16.7344 2.72233L9.30518 10.1515L8.88184 9.73649ZM10.7993 10.2013L16.7759 4.21647L17.1992 4.63151L11.2061 10.6247L10.7993 10.2013ZM12.6006 0.871257L13.0156 0.456217L17.332 4.76432L16.917 5.17936L12.6006 0.871257ZM10.7246 1.26139L11.1396 0.846354L17 6.6984L16.5684 7.12174L10.7246 1.26139ZM9.5127 2.29069L9.92773 1.86735L15.9624 7.90202L15.5308 8.32536L9.5127 2.29069ZM8.4585 3.34489L8.87354 2.92155L14.8999 8.95622L14.4766 9.37956L8.4585 3.34489ZM7.4292 4.5568L7.83594 4.15006L13.6963 10.0021L13.2812 10.4172L7.4292 4.5568ZM7.02246 6.41618L7.4375 6.00114L11.7871 10.3424L11.3638 10.7658L7.02246 6.41618Z"/>
  </svg>
)

const ICON_WIELRENNEN = (
  <svg viewBox="0 0 21.0259 15.9458" fill="none" width="21" height="16">
    <path fill="currentColor" d="M10.5171 12.6753C10.2847 12.6753 10.0882 12.5951 9.92773 12.4346C9.76725 12.2686 9.68701 12.0721 9.68701 11.8452V8.01855L6.64062 4.95557C6.3418 4.65674 6.15088 4.30257 6.06787 3.89307C5.98486 3.47803 6.0236 3.07406 6.18408 2.68115C6.3501 2.29378 6.60465 1.98389 6.94775 1.75146C7.29639 1.51351 7.68376 1.39453 8.10986 1.39453H12.1855C12.6504 1.39453 13.0433 1.55778 13.3643 1.88428C13.6908 2.20524 13.854 2.59814 13.854 3.06299V6.00146H16.3691C16.596 6.00146 16.7897 6.08171 16.9502 6.24219C17.1107 6.40267 17.1909 6.59912 17.1909 6.83154C17.1909 7.05843 17.1107 7.25212 16.9502 7.4126C16.7897 7.57308 16.596 7.65332 16.3691 7.65332H13.0239C12.797 7.65332 12.6006 7.57308 12.4346 7.4126C12.2741 7.25212 12.1938 7.05843 12.1938 6.83154V4.76465C12.1938 4.65397 12.1634 4.5516 12.1025 4.45752C12.0417 4.35791 11.931 4.30811 11.7705 4.30811H9.10596C9.00081 4.30811 8.92887 4.35238 8.89014 4.44092C8.85693 4.52393 8.87354 4.60417 8.93994 4.68164L11.1147 7.10547C11.2697 7.27702 11.3472 7.46517 11.3472 7.66992V11.8452C11.3472 12.0721 11.2642 12.2686 11.0981 12.4346C10.9377 12.5951 10.744 12.6753 10.5171 12.6753ZM4.50732 15.9458C3.882 15.9458 3.29541 15.8296 2.74756 15.5972C2.20524 15.3647 1.72656 15.041 1.31152 14.626C0.902018 14.2109 0.581055 13.7323 0.348633 13.1899C0.116211 12.6421 0 12.0555 0 11.4302C0 10.8049 0.116211 10.221 0.348633 9.67871C0.581055 9.13086 0.902018 8.64941 1.31152 8.23438C1.72656 7.81934 2.20524 7.49561 2.74756 7.26318C3.29541 7.03076 3.882 6.91455 4.50732 6.91455C5.13818 6.91455 5.72477 7.03076 6.26709 7.26318C6.81494 7.49561 7.29362 7.81934 7.70312 8.23438C8.11816 8.64941 8.44189 9.13086 8.67432 9.67871C8.90674 10.221 9.02295 10.8049 9.02295 11.4302C9.02295 12.0555 8.90674 12.6421 8.67432 13.1899C8.44189 13.7323 8.11816 14.2109 7.70312 14.626C7.29362 15.041 6.81494 15.3647 6.26709 15.5972C5.72477 15.8296 5.13818 15.9458 4.50732 15.9458ZM4.50732 14.7754C5.12158 14.7754 5.6805 14.6232 6.18408 14.3188C6.6932 14.02 7.09717 13.6188 7.396 13.1152C7.70036 12.6061 7.85254 12.0444 7.85254 11.4302C7.85254 10.8159 7.70036 10.257 7.396 9.75342C7.09717 9.2443 6.6932 8.84033 6.18408 8.5415C5.6805 8.23714 5.12158 8.08496 4.50732 8.08496C3.8986 8.08496 3.33968 8.23714 2.83057 8.5415C2.32699 8.84033 1.92301 9.2443 1.61865 9.75342C1.31982 10.257 1.17041 10.8159 1.17041 11.4302C1.17041 12.0444 1.31982 12.6061 1.61865 13.1152C1.92301 13.6188 2.32699 14.02 2.83057 14.3188C3.33968 14.6232 3.8986 14.7754 4.50732 14.7754ZM18.7432 8.94824C18.5661 8.79329 18.4748 8.63558 18.4692 8.4751C18.4692 8.30908 18.519 8.17074 18.6187 8.06006C18.7238 7.94938 18.8538 7.88574 19.0088 7.86914C19.1693 7.84701 19.327 7.90234 19.4819 8.03516C19.9578 8.45573 20.3341 8.95654 20.6108 9.5376C20.8875 10.1187 21.0259 10.7495 21.0259 11.4302C21.0259 12.0555 20.9097 12.6421 20.6772 13.1899C20.4448 13.7323 20.1211 14.2109 19.7061 14.626C19.2965 15.041 18.8179 15.3647 18.27 15.5972C17.7277 15.8296 17.1439 15.9458 16.5186 15.9458C15.8932 15.9458 15.3066 15.8296 14.7588 15.5972C14.2109 15.3647 13.7295 15.041 13.3145 14.626C12.9049 14.2109 12.584 13.7323 12.3516 13.1899C12.1191 12.6421 12.0029 12.0555 12.0029 11.4302C12.0029 11.1037 12.0361 10.7882 12.1025 10.4839C12.1745 10.174 12.2741 9.87516 12.4014 9.5874C12.4788 9.41032 12.5868 9.29688 12.7251 9.24707C12.869 9.19173 13.0101 9.19173 13.1484 9.24707C13.2923 9.29688 13.4002 9.39648 13.4722 9.5459C13.5441 9.69531 13.533 9.88346 13.439 10.1104C13.2619 10.5254 13.1733 10.9653 13.1733 11.4302C13.1733 12.0444 13.3228 12.6061 13.6216 13.1152C13.9259 13.6188 14.3299 14.02 14.8335 14.3188C15.3426 14.6232 15.9043 14.7754 16.5186 14.7754C17.1328 14.7754 17.6917 14.6232 18.1953 14.3188C18.6989 14.02 19.1001 13.6188 19.3989 13.1152C19.7033 12.6061 19.8555 12.0444 19.8555 11.4302C19.8555 10.9377 19.7531 10.4784 19.5483 10.0522C19.3491 9.62061 19.0807 9.2526 18.7432 8.94824ZM16.5186 3.62744C16.181 3.62744 15.8739 3.5472 15.5972 3.38672C15.3205 3.2207 15.0991 3.00212 14.9331 2.73096C14.7726 2.45426 14.6924 2.14714 14.6924 1.80957C14.6924 1.47754 14.7726 1.17594 14.9331 0.904785C15.0991 0.628092 15.3205 0.409505 15.5972 0.249023C15.8739 0.0830078 16.181 0 16.5186 0C16.8506 0 17.1522 0.0830078 17.4233 0.249023C17.6945 0.409505 17.9103 0.628092 18.0708 0.904785C18.2368 1.17594 18.3198 1.47754 18.3198 1.80957C18.3198 2.14714 18.2368 2.45426 18.0708 2.73096C17.9103 3.00212 17.6945 3.2207 17.4233 3.38672C17.1522 3.5472 16.8506 3.62744 16.5186 3.62744Z"/>
  </svg>
)

const ICON_HOCKEY = (
  <svg viewBox="0 0 17.0664 13.0488" fill="none" width="18" height="14">
    <path fill="currentColor" d="M8.5249 13.0488C7.32406 13.0488 6.20622 12.9243 5.17139 12.6753C4.13656 12.4263 3.23177 12.0804 2.45703 11.6377C1.68229 11.195 1.0791 10.6831 0.647461 10.1021C0.21582 9.521 0 8.9012 0 8.24268V3.88477L1.32812 5.04688V8.24268C1.32812 8.8846 1.61865 9.46842 2.19971 9.99414C2.7863 10.5143 3.61637 10.9321 4.68994 11.2476C5.76904 11.5575 7.04736 11.7124 8.5249 11.7124C10.0024 11.7124 11.2808 11.5575 12.3599 11.2476C13.439 10.9321 14.269 10.5143 14.8501 9.99414C15.4367 9.46842 15.73 8.8846 15.73 8.24268V5.04688L17.0664 3.88477V8.24268C17.0664 8.9012 16.8478 9.521 16.4106 10.1021C15.979 10.6831 15.3758 11.195 14.6011 11.6377C13.8263 12.0804 12.9215 12.4263 11.8867 12.6753C10.8519 12.9243 9.73128 13.0488 8.5249 13.0488ZM8.5249 7.73633C7.32959 7.73633 6.21452 7.63672 5.17969 7.4375C4.15039 7.23828 3.24561 6.95882 2.46533 6.59912C1.69059 6.23942 1.08464 5.82438 0.647461 5.354C0.21582 4.87809 0 4.36344 0 3.81006C0 3.27881 0.21582 2.78353 0.647461 2.32422C1.08464 1.85938 1.69059 1.4554 2.46533 1.1123C3.24561 0.763672 4.15039 0.492513 5.17969 0.298828C6.21452 0.0996094 7.32959 0 8.5249 0C9.72021 0 10.8353 0.0996094 11.8701 0.298828C12.9049 0.492513 13.8097 0.763672 14.5845 1.1123C15.3647 1.4554 15.9735 1.85938 16.4106 2.32422C16.8478 2.78353 17.0664 3.27881 17.0664 3.81006C17.0664 4.36344 16.8478 4.87809 16.4106 5.354C15.9735 5.82438 15.3647 6.23942 14.5845 6.59912C13.8097 6.95882 12.9049 7.23828 11.8701 7.4375C10.8353 7.63672 9.72021 7.73633 8.5249 7.73633ZM8.5249 6.3999C9.5376 6.3999 10.4811 6.3335 11.3555 6.20068C12.2298 6.06787 12.9935 5.88525 13.6465 5.65283C14.305 5.41488 14.8169 5.14095 15.1821 4.83105C15.5474 4.51562 15.73 4.17529 15.73 3.81006C15.73 3.46143 15.5474 3.1377 15.1821 2.83887C14.8169 2.54004 14.305 2.27718 13.6465 2.05029C12.9935 1.8234 12.2298 1.64909 11.3555 1.52734C10.4811 1.40007 9.5376 1.33643 8.5249 1.33643C7.51221 1.33643 6.56868 1.40007 5.69434 1.52734C4.82552 1.64909 4.06185 1.8234 3.40332 2.05029C2.75033 2.27718 2.24121 2.54004 1.87598 2.83887C1.51074 3.1377 1.32812 3.46143 1.32812 3.81006C1.32812 4.17529 1.51074 4.51562 1.87598 4.83105C2.24121 5.14095 2.75033 5.41488 3.40332 5.65283C4.06185 5.88525 4.82552 6.06787 5.69434 6.20068C6.56868 6.3335 7.51221 6.3999 8.5249 6.3999Z"/>
  </svg>
)

const ICON_ZWEMMEN = (
  <svg viewBox="0 0 19 14" fill="none" width="19" height="14">
    <circle cx="14.5" cy="2.5" r="1.5" fill="currentColor"/>
    <path d="M11 4.5L14 2L17 5.5L13 9" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M1 9.5C2.5 8.5 4 8 5.5 8.5L9 10L13 8" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round"/>
    <path d="M1 12C3 11 5 11.5 7 12.5C9 13.5 11 13.5 13 12.5C15 11.5 17 11 19 12" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round"/>
  </svg>
)

const ICON_ATLETIEK = (
  <svg viewBox="0 0 14 19" fill="none" width="14" height="19">
    <circle cx="7" cy="2" r="1.7" fill="currentColor"/>
    <path d="M7 4.5L5 9H9.5L11 13" stroke="currentColor" strokeWidth="1.15" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M5 9L3 13.5" stroke="currentColor" strokeWidth="1.15" strokeLinecap="round"/>
    <path d="M9.5 9L10.5 12L8.5 15L7 18" stroke="currentColor" strokeWidth="1.15" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M3 13.5L1 17" stroke="currentColor" strokeWidth="1.15" strokeLinecap="round"/>
  </svg>
)

// ─── Images (Unsplash) ───────────────────────────────────────────────────────

const UNSPLASH: Record<string, string> = {
  amsterdam: "photo-1583295125721-766a0088cd3f",
  banknotes: "photo-1580519542036-c47de6196ba5",
  beijing: "photo-1584872589930-e99fe5bf4408",
  bigben: "photo-1681407979872-0a4cbde28391",
  binnenhof1: "photo-1650343974594-deb8bf24ebe8",
  binnenhof2: "photo-1633613455921-1563cb174b9d",
  brain: "photo-1711409645921-ef3db0501f96",
  cannabis: "photo-1741471597208-aeb6fd635378",
  cell: "photo-1699492719221-20c091891d27",
  cinema: "photo-1702890764798-eda71e941da1",
  clayAerial: "photo-1620742820748-87c09249a72a",
  clayNet: "photo-1751275061929-2f63fc96838c",
  clayPlayer: "photo-1750858285407-069e874245d4",
  code1: "photo-1555949963-ff9fe0c870eb",
  code2: "photo-1533709752211-118fcaf03312",
  containers: "photo-1601897690942-bcacbad33e55",
  court: "photo-1758541213979-fe8c9996e197",
  crowd: "photo-1573358695783-005699a7fc94",
  cycleBW: "photo-1713937071114-e94d5f8053a0",
  cycleBlur: "photo-1516147697747-02adcafd3fda",
  cyclePeloton: "photo-1517649763962-0c623066013b",
  euFlags: "photo-1645705315654-019e91990d4f",
  euParl: "photo-1718260775649-b925159be5a0",
  euro: "photo-1550133881-13e70aa00bae",
  gavel: "photo-1767972463877-b64ba4283cd0",
  grass: "photo-1685880423505-3a9a5515efd9",
  grassPlayer: "photo-1717014178120-670190ab0497",
  hockey1: "photo-1734159319354-b9ead78dd441",
  hockey2: "photo-1541983663620-7571a820610c",
  hospital: "photo-1777269749032-d8d458ae594d",
  kremlin: "photo-1547448415-e9f5b28e570d",
  kyiv: "photo-1639341267320-2d062b250c0d",
  marathon: "photo-1590333748338-d629e4564ad9",
  melbourne: "photo-1730291811261-691499fe7346",
  nuclear3: "photo-1630142896875-d71a6ee6db03",
  nuclearDay: "photo-1630142895963-6996ae6b3a5b",
  nuclearNight: "photo-1591200834528-4050ce99fe78",
  paris: "photo-1502602898657-3e91760cbb34",
  pills: "photo-1631549916768-4119b2e5f926",
  pills2: "photo-1512069772995-ec65ed45afd6",
  police1: "photo-1718592168437-8382e5b97736",
  port1: "photo-1702499384351-8f84e3f9281c",
  port2: "photo-1610720705146-e651f3442aa4",
  prison: "photo-1543536833-6d65fcc64f66",
  protest: "photo-1511898634545-c01af8a54dd5",
  reichstag: "photo-1552035496-08efc7baf40e",
  scales: "photo-1687289133469-b2a07a13b78b",
  smoke: "photo-1701970947932-d5f730c3c1cb",
  smoke2: "photo-1707852710487-8f7837975208",
  stadiumAerial: "photo-1565483276107-8a1fbf01ab03",
  stadiumDay: "photo-1571754472834-677ab0a62ba7",
  stadiumFull: "photo-1629217855633-79a6925d6c47",
  stadiumLights: "photo-1676746424139-77f8bd8922a8",
  stadiumNight: "photo-1706675780107-7c43cc487928",
  stbasil: "photo-1596484552834-6a58f850e0a1",
  swim1: "photo-1730244548329-4ae2f4fcaa7c",
  swim2: "photo-1603980399352-18a3b0cdf1e0",
  tanker: "photo-1518527989017-5baca7a58d3c",
  tehran: "photo-1613881348993-bc547b53daba",
  tennisPlayer: "photo-1545151414-8a948e1ea54f",
  track: "photo-1461896836934-ffe607ba8211",
  voting: "photo-1782998307726-f93ec14eda24",
  whitehouse: "photo-1485394595691-5411947d63a4",
  wind: "photo-1653325712370-204610e704c3",
}

function unsplashUrl(key: string, width: number): string {
  return `https://images.unsplash.com/${UNSPLASH[key] ?? key}?w=${width}&h=${Math.round((width * 9) / 16)}&q=80&fit=crop&auto=format`
}

// ─── Types ───────────────────────────────────────────────────────────────────

interface SubmenuItem { id: string; label: string }

interface PillConfig {
  id: string
  label: string
  icon?: ReactNode
  chevron?: boolean
  submenu?: SubmenuItem[]
}

interface TabConfig {
  id: string
  label: string
  pills: PillConfig[]
}

interface Article {
  label: string
  title: string
  excerpt: string
  image: string
  timeAgo: string
  premium?: boolean
}

// ─── Navigation data ─────────────────────────────────────────────────────────

const MAIN_TABS: TabConfig[] = [
  {
    id: "vandaag",
    label: "Vandaag",
    pills: [],
  },
  {
    id: "sport",
    label: "Sport",
    pills: [
      { id: "alles", label: "Alles" },
      {
        id: "voetbal", label: "Voetbal", icon: ICON_VOETBAL, chevron: true,
        submenu: [
          { id: "eredivisie", label: "Eredivisie" },
          { id: "champions-league", label: "Champions League" },
          { id: "premier-league", label: "Premier League" },
          { id: "knvb-beker", label: "KNVB Beker" },
        ],
      },
      {
        id: "tennis", label: "Tennis", icon: ICON_TENNIS, chevron: true,
        submenu: [
          { id: "roland-garros", label: "Roland Garros" },
          { id: "wimbledon", label: "Wimbledon" },
          { id: "us-open", label: "US Open" },
          { id: "australian-open", label: "Australian Open" },
        ],
      },
      { id: "wielrennen", label: "Wielrennen", icon: ICON_WIELRENNEN },
      { id: "hockey", label: "Hockey", icon: ICON_HOCKEY },
      { id: "zwemmen", label: "Zwemmen", icon: ICON_ZWEMMEN },
      { id: "atletiek", label: "Atletiek", icon: ICON_ATLETIEK },
    ],
  },
  {
    id: "iran",
    label: "Iran",
    pills: [
      { id: "alles", label: "Alles" },
      { id: "politiek", label: "Politiek" },
      { id: "nucleair", label: "Nucleair" },
      { id: "sancties", label: "Sancties" },
      { id: "mensenrechten", label: "Mensenrechten" },
    ],
  },
  {
    id: "politiek",
    label: "Politiek",
    pills: [
      { id: "alles", label: "Alles" },
      {
        id: "nederland", label: "Nederland", chevron: true,
        submenu: [
          { id: "tweede-kamer", label: "Tweede Kamer" },
          { id: "kabinet", label: "Kabinet" },
          { id: "provincies", label: "Provincies" },
          { id: "gemeenten", label: "Gemeenten" },
        ],
      },
      {
        id: "europa", label: "Europa", chevron: true,
        submenu: [
          { id: "eu", label: "Europese Unie" },
          { id: "duitsland", label: "Duitsland" },
          { id: "frankrijk", label: "Frankrijk" },
          { id: "vk", label: "Verenigd Koninkrijk" },
        ],
      },
      { id: "wereld", label: "Wereld" },
      { id: "opinie", label: "Opinie" },
    ],
  },
  {
    id: "misdaad",
    label: "Misdaad",
    pills: [
      { id: "alles", label: "Alles" },
      { id: "rechtbank", label: "Rechtbank" },
      {
        id: "drugs", label: "Drugs", chevron: true,
        submenu: [
          { id: "cocaine", label: "Cocaine" },
          { id: "xtc", label: "XTC" },
          { id: "wietteelt", label: "Wietteelt" },
          { id: "synthetisch", label: "Synthetische drugs" },
        ],
      },
      { id: "fraude", label: "Fraude" },
      { id: "moord", label: "Moord" },
      { id: "cybercrime", label: "Cybercrime" },
    ],
  },
  {
    id: "financieel",
    label: "Financieel",
    pills: [
      { id: "alles", label: "Alles" },
      { id: "beurs", label: "Beurs" },
      { id: "crypto", label: "Crypto" },
      { id: "vastgoed", label: "Vastgoed" },
      { id: "sparen", label: "Sparen" },
      { id: "belastingen", label: "Belastingen" },
    ],
  },
]

// ─── Content ─────────────────────────────────────────────────────────────────

const CONTENT: Record<string, Article[]> = {
  vandaag: [
    { label: "Economie", title: "Inflatie daalt verder naar 2,3 procent — laagste niveau in drie jaar", excerpt: "De prijzen in de eurozone stijgen minder snel dan verwacht. Economen wijzen op dalende energieprijzen en een zwakkere binnenlandse vraag.", image: "euro", timeAgo: "12 min geleden", premium: true },
    { label: "Klimaat", title: "Nederland mist klimaatdoelen voor 2030 door traag beleid kabinet", excerpt: "Uit een nieuw rapport van het Planbureau voor de Leefomgeving blijkt dat de uitstoot van broeikasgassen onvoldoende daalt.", image: "wind", timeAgo: "1 uur geleden" },
    { label: "Buitenland", title: "Zelensky: offensief gaat door ondanks zware verliezen aan het front", excerpt: "De Oekraïense president hield een toespraak in Kyiv en benadrukte dat steun van het Westen cruciaal blijft.", image: "kyiv", timeAgo: "2 uur geleden" },
    { label: "Wetenschap", title: "Wetenschappers ontdekken mechanisme achter veroudering van hersencellen", excerpt: "Een nieuwe studie in Nature toont aan dat mitochondriaal disfunctioneren een sleutelrol speelt bij het verouderingsproces.", image: "brain", timeAgo: "3 uur geleden", premium: true },
    { label: "Politiek", title: "Coalitieakkoord klaar: belastingverlaging voor middeninkomens centraal", excerpt: "De vier coalitiepartijen presenteerden vandaag een akkoord met een totale omvang van 28 miljard euro aan plannen.", image: "binnenhof1", timeAgo: "4 uur geleden" },
    { label: "Cultuur", title: "Film 'De Stille Kracht' wint grote prijs op filmfestival Rotterdam", excerpt: "De Nederlandse regisseur Mila de Vries sleepte met haar debuutfilm de Gouden Beer in de wacht.", image: "cinema", timeAgo: "5 uur geleden" },
  ],
  "sport/alles": [
    { label: "Voetbal", title: "Ajax wint spectaculaire topper van PSV met 3-2 na rode kaart keeper", excerpt: "In de 82e minuut greep de PSV-doelman in na een uitbraak van Brobbey. Ajax profiteerde van het numerieke overwicht.", image: "stadiumNight", timeAgo: "35 min geleden" },
    { label: "Tennis", title: "Swiatek wint Australian Open: zesde Grand Slam-titel voor de Poolse", excerpt: "In de finale versloeg ze Gauff in twee sets: 6-3 en 6-4. 'Ik ben trots op mijn vechtlust', aldus Swiatek.", image: "tennisPlayer", timeAgo: "1 uur geleden" },
    { label: "Wielrennen", title: "Vingegaard pakt eindwinst in de Tour: historisch derde overwinning", excerpt: "In de tijdrit naar Dijon soleerde de Deen naar de definitieve eindzege. Pogacar moest genoegen nemen met zilver.", image: "cyclePeloton", timeAgo: "2 uur geleden", premium: true },
    { label: "Hockey", title: "Hockeydames pakken goud op WK na dramatische shoot-out tegen België", excerpt: "Na 1-1 in de finale werd het in de shoot-out 3-2 voor Oranje. 'Een sprookje', zei aanvoerder Dicke.", image: "hockey1", timeAgo: "3 uur geleden" },
    { label: "Atletiek", title: "Dafne Schippers verbetert Nederlands record op 100m in Amsterdam", excerpt: "Met een tijd van 10,81 seconden verbrak ze haar eigen record uit 2015. 'Ik had nooit verwacht dit ooit nog te doen.'", image: "track", timeAgo: "4 uur geleden" },
    { label: "Zwemmen", title: "Kira Toussaint pakt zilver op 100m rugslag bij WK kortebaan", excerpt: "De Française Bonnet was nipt te snel, maar Toussaint verbeterde wel het Nederlands record.", image: "swim1", timeAgo: "5 uur geleden" },
  ],
  "sport/voetbal": [
    { label: "Eredivisie", title: "Ajax wint spectaculaire topper van PSV met 3-2 na rode kaart keeper", excerpt: "In de 82e minuut greep de PSV-doelman in na een uitbraak van Brobbey. Ajax profiteerde van het numerieke overwicht.", image: "stadiumNight", timeAgo: "35 min geleden" },
    { label: "Eredivisie", title: "Feyenoord pakt koploperplaats na zege op AZ", excerpt: "Trainer Slot reageerde na afloop tevreden. 'Dit is wat we de hele zomer hebben geoefend.'", image: "stadiumDay", timeAgo: "2 uur geleden", premium: true },
    { label: "Champions League", title: "PSV overleeft spannende avond in Milaan: gelijkspel via Veerman", excerpt: "De Eindhovenaren kwamen twee keer achter maar wisten via Veerman en Tillman toch een punt te pakken.", image: "stadiumLights", timeAgo: "Gisteren" },
    { label: "Transfer", title: "Memphis Depay tekent bij Atletico Madrid voor twee seizoenen", excerpt: "De voormalig Oranje-international kiest bewust voor de Spaanse hoofdstad na zijn avontuur in Brazilië.", image: "stadiumAerial", timeAgo: "Gisteren" },
  ],
  "sport/voetbal/eredivisie": [
    { label: "Eredivisie", title: "Programma speelronde 18: Ajax ontvangt Feyenoord in De Klassiker", excerpt: "De topper staat zondag om 14:30 in de Johan Cruijff Arena.", image: "stadiumFull", timeAgo: "1 uur geleden" },
    { label: "Eredivisie", title: "NEC Nijmegen verslaat Utrecht met 2-0 en klimt naar plek vijf", excerpt: "Doelpunten van Van Rooij en Odenthal bezorgden de Nijmegenaren een verdiende overwinning.", image: "stadiumLights", timeAgo: "3 uur geleden" },
  ],
  "sport/voetbal/champions-league": [
    { label: "Champions League", title: "Real Madrid en City botsen in historische achtste finale", excerpt: "Voor de derde keer in vier jaar treffen de twee grootmachten elkaar in de knock-outfase.", image: "stadiumAerial", timeAgo: "2 uur geleden", premium: true },
    { label: "Champions League", title: "PSV loot Ajax in de play-offronde: primeur voor Nederland", excerpt: "Een volledig Nederlandse kraker in de voorronde van de Champions League.", image: "stadiumFull", timeAgo: "4 uur geleden" },
  ],
  "sport/voetbal/premier-league": [
    { label: "Premier League", title: "Liverpool leidt met 8 punten na 20 speelrondes — op weg naar de titel", excerpt: "De Reds wonnen ook hun dertiende competitiewedstrijd dit seizoen.", image: "stadiumDay", timeAgo: "1 uur geleden" },
    { label: "Premier League", title: "Ten Hag ontslagen bij Manchester United: Ruud van Nistelrooij neemt over", excerpt: "Na een reeks teleurstellende resultaten besloot de directie in te grijpen.", image: "stadiumLights", timeAgo: "Gisteren", premium: true },
  ],
  "sport/voetbal/knvb-beker": [
    { label: "KNVB Beker", title: "Loting kwartfinale Beker: PSV thuis tegen Go Ahead Eagles", excerpt: "Ajax speelt uit bij sc Heerenveen. De kwartfinales worden gespeeld op 5 en 6 maart.", image: "stadiumFull", timeAgo: "3 uur geleden" },
    { label: "KNVB Beker", title: "NEC elimineert Feyenoord na shoot-out: 4-2 na 1-1", excerpt: "Na penalty's triomfeerden de Nijmegenaren.", image: "stadiumNight", timeAgo: "Gisteren" },
  ],
  "sport/tennis": [
    { label: "WTA", title: "Swiatek wint Australian Open: zesde Grand Slam-titel voor de Poolse", excerpt: "In de finale versloeg ze Gauff in twee sets: 6-3 en 6-4.", image: "tennisPlayer", timeAgo: "1 uur geleden" },
    { label: "ATP", title: "Djokovic trekt zich terug uit ATP Finals vanwege knieblessure", excerpt: "De Serviër meldde via sociale media dat hij nog niet 100 procent fit is.", image: "grassPlayer", timeAgo: "3 uur geleden" },
    { label: "Davis Cup", title: "Nederland bereikt halve finale Davis Cup na zege op Argentinië", excerpt: "Tallon Griekspoor was de grote held met twee gewonnen rubbers op rij.", image: "clayNet", timeAgo: "Gisteren" },
  ],
  "sport/tennis/roland-garros": [
    { label: "Roland Garros", title: "Nadal kondigt afscheid aan op Roland Garros: 'De cirkel is rond'", excerpt: "De Spanjaard, 14-voudig winnaar op het Parijse gravel, maakt zijn laatste opwachting.", image: "clayPlayer", timeAgo: "2 uur geleden" },
    { label: "Roland Garros", title: "Swiatek favoriet maar Sabalenka jaagt op zand-primeur", excerpt: "Tennisexperts zijn verdeeld over wie dit jaar Roland Garros wint.", image: "clayAerial", timeAgo: "4 uur geleden", premium: true },
  ],
  "sport/tennis/wimbledon": [
    { label: "Wimbledon", title: "Alcaraz verdedigt zijn Wimbledon-titel: 'Gras ligt me het best'", excerpt: "De Spanjaard gaat als topfavoriet naar Londen.", image: "grass", timeAgo: "5 uur geleden" },
  ],
  "sport/tennis/us-open": [
    { label: "US Open", title: "Sinner wint US Open: eerste Italiaan ooit op de troon in Flushing Meadows", excerpt: "In een meeslepende finale versloeg de 23-jarige Sinner Djokovic in vijf sets.", image: "tennisPlayer", timeAgo: "Gisteren", premium: true },
  ],
  "sport/tennis/australian-open": [
    { label: "Australian Open", title: "Hitte-protocol van kracht in Melbourne: 42 graden op de baan", excerpt: "Het hitteschild wordt geactiveerd. Medvedev verliet woedend de baan.", image: "melbourne", timeAgo: "3 uur geleden" },
    { label: "Australian Open", title: "Griekspoor bereikt tweede ronde na vijfsettenstrijd van 3 uur 40", excerpt: "De Nederlander verloor de eerste twee sets maar vond zijn niveau.", image: "tennisPlayer", timeAgo: "Gisteren" },
  ],
  "sport/wielrennen": [
    { label: "Tour de France", title: "Vingegaard pakt eindwinst in de Tour: historisch derde overwinning", excerpt: "In de tijdrit naar Dijon soleerde de Deen naar de definitieve eindzege.", image: "cyclePeloton", timeAgo: "1 uur geleden", premium: true },
    { label: "Vuelta", title: "Van Aert sprint naar ritzege — Evenepoel behoudt rode trui", excerpt: "De Belg was de snelste in een massasprint in Madrid.", image: "cycleBlur", timeAgo: "3 uur geleden" },
    { label: "Classics", title: "Van der Poel wint Parijs-Roubaix na banden-drama in de finale", excerpt: "De wereldkampioen wist zijn leidersplaats te behouden ondanks een lekke band.", image: "cycleBW", timeAgo: "Gisteren" },
  ],
  "sport/hockey": [
    { label: "WK", title: "Hockeydames pakken goud op WK na dramatische shoot-out tegen België", excerpt: "Na 1-1 in de finale werd het in de shoot-out 3-2 voor Oranje.", image: "hockey1", timeAgo: "2 uur geleden" },
    { label: "EK", title: "Oranje heren verslaan Duitsland in EK-finale: vierde Europese titel", excerpt: "De mannen van bondscoach Oltmans domineerden de finale en wonnen overtuigend met 4-1.", image: "hockey2", timeAgo: "Gisteren", premium: true },
  ],
  "sport/zwemmen": [
    { label: "WK", title: "Kira Toussaint pakt zilver op 100m rugslag bij WK kortebaan", excerpt: "De Française Bonnet was nipt te snel, maar Toussaint verbeterde het Nederlands record.", image: "swim1", timeAgo: "4 uur geleden" },
    { label: "Olympisch", title: "Sharon van Rouwendaal begint aan olympisch kwalificatietraject voor LA 2028", excerpt: "De olympisch kampioene richt haar pijlen op de Spelen van 2028.", image: "swim2", timeAgo: "Gisteren" },
  ],
  "sport/atletiek": [
    { label: "Sprint", title: "Dafne Schippers verbetert Nederlands record op 100m in Amsterdam", excerpt: "Met een tijd van 10,81 seconden verbrak ze haar eigen record uit 2015.", image: "track", timeAgo: "1 uur geleden" },
    { label: "Marathon", title: "Abdi Nageeye wint marathon van Rotterdam in nieuw parcoursrecord", excerpt: "De Nederlander liep 2:03:58 en versloeg een sterk internationaal deelnemersveld.", image: "marathon", timeAgo: "Gisteren", premium: true },
  ],
  "iran/alles": [
    { label: "Nucleair", title: "Iran verrijkt uranium tot 83 procent, net onder wapenkwaliteit", excerpt: "Het IAEA heeft de verrijking bevestigd na inspectie van de faciliteiten in Natanz.", image: "nuclearDay", timeAgo: "45 min geleden", premium: true },
    { label: "Diplomatiek", title: "EU legt nieuwe sancties op na aanhoudende schending mensenrechten", excerpt: "De sancties richten zich op 32 Iraanse officials.", image: "euFlags", timeAgo: "2 uur geleden" },
    { label: "Protest", title: "Massale protesten in Tehran ondanks zware repressie door het regime", excerpt: "Duizenden mensen kwamen naar het Azadi-plein.", image: "protest", timeAgo: "3 uur geleden" },
    { label: "Economie", title: "Iraanse rial bereikt historisch dieptepunt tegen de dollar", excerpt: "Door opeenstapeling van sancties is de koopkracht gedaald met 60 procent.", image: "banknotes", timeAgo: "Gisteren" },
  ],
  "iran/politiek": [
    { label: "Machtsstrijd", title: "Intern conflict in Iraans regime: revolutionaire garde vs. gematigden", excerpt: "Bronnen binnen het regime melden toenemende spanning.", image: "tehran", timeAgo: "3 uur geleden", premium: true },
    { label: "Diplomatiek", title: "President Raisi bezoekt Beijing: 'China is onze strategische partner'", excerpt: "De twee landen tekenden een reeks economische samenwerkingsakkoorden.", image: "beijing", timeAgo: "1 uur geleden" },
  ],
  "iran/nucleair": [
    { label: "Nucleair", title: "Iran installeert geavanceerde centrifuges in Fordow-faciliteit", excerpt: "Het IAEA waarschuwt dat de verrijkingscapaciteit aanzienlijk vergroot.", image: "nuclearNight", timeAgo: "2 uur geleden", premium: true },
    { label: "Diplomatiek", title: "Onderhandelingen over nucleair akkoord hervat in Genève", excerpt: "Voor het eerst in negen maanden zitten de VS en Iran aan tafel.", image: "nuclear3", timeAgo: "4 uur geleden" },
  ],
  "iran/sancties": [
    { label: "Sancties", title: "VS breiden sancties uit naar Iraanse oliesector: acht nieuwe tankers op lijst", excerpt: "Drie rederijen worden toegevoegd aan de zwarte lijst.", image: "tanker", timeAgo: "30 min geleden" },
    { label: "Sancties", title: "Europese bedrijven trekken zich terug uit Iran na dreigen met secundaire sancties", excerpt: "Shell, Total en Siemens stoppen hun activiteiten.", image: "port2", timeAgo: "2 uur geleden" },
  ],
  "iran/mensenrechten": [
    { label: "Mensenrechten", title: "VN-rapporteur: aantal executies in Iran bereikte record van 834 in 2023", excerpt: "Amnesty International spreekt van een 'schrikbewind'.", image: "prison", timeAgo: "1 uur geleden", premium: true },
    { label: "Vrouwen", title: "Iraanse vrouwen dragen hoofddoek weer verplicht na nieuwe wetgeving", excerpt: "Het parlement heeft strengere handhaving goedgekeurd.", image: "crowd", timeAgo: "3 uur geleden" },
  ],
  "politiek/alles": [
    { label: "Formatie", title: "Coalitieakkoord gepresenteerd: 28 miljard voor koopkracht en klimaat", excerpt: "Na 227 dagen onderhandelen hebben de vier partijen een akkoord bereikt.", image: "binnenhof1", timeAgo: "2 uur geleden" },
    { label: "Europa", title: "Europees Parlement stemt in met nieuwe AI-wetgeving: strengste ter wereld", excerpt: "De AI Act treedt gefaseerd in werking.", image: "euParl", timeAgo: "3 uur geleden", premium: true },
    { label: "Wereld", title: "Biden tekent nieuwe veiligheidswetten vlak voor inauguratie opvolger", excerpt: "De uittredende president ondertekent een reeks maatregelen.", image: "whitehouse", timeAgo: "4 uur geleden" },
  ],
  "politiek/nederland": [
    { label: "Formatie", title: "Coalitieakkoord gepresenteerd: 28 miljard voor koopkracht en klimaat", excerpt: "Na 227 dagen onderhandelen hebben de vier partijen een akkoord bereikt.", image: "binnenhof1", timeAgo: "2 uur geleden" },
    { label: "Tweede Kamer", title: "Motie van wantrouwen verworpen: kabinet overleeft debat", excerpt: "Met 83 tegen 67 stemmen bleef het kabinet overeind.", image: "binnenhof2", timeAgo: "4 uur geleden", premium: true },
  ],
  "politiek/nederland/tweede-kamer": [
    { label: "Tweede Kamer", title: "Debat over begroting Defensie: oppositie eist meer transparantie", excerpt: "Geert Wilders en GroenLinks-fractieleider Klever willen inzage in de NAVO-contracten.", image: "binnenhof2", timeAgo: "1 uur geleden" },
    { label: "Tweede Kamer", title: "VVD en D66 bereiken akkoord over stikstofwet", excerpt: "Na maanden van onderhandelen gaan de partijen akkoord met een gedifferentieerde aanpak.", image: "smoke2", timeAgo: "Gisteren", premium: true },
  ],
  "politiek/nederland/kabinet": [
    { label: "Kabinet", title: "Ministerraad akkoord met nieuw klimaatpakket: 12 miljard investering", excerpt: "Het kabinet presenteert een ambitieus pakket maatregelen.", image: "wind", timeAgo: "3 uur geleden" },
    { label: "Kabinet", title: "Minister Van der Wal stapt op na vertrouwenscrisis in de Kamer", excerpt: "Na het debat over de boerenprotesten kondigde de minister haar aftreden aan.", image: "binnenhof1", timeAgo: "Gisteren", premium: true },
  ],
  "politiek/nederland/provincies": [
    { label: "Provincies", title: "Noord-Holland kiest voor nieuwe coalitie: GroenLinks en VVD samen", excerpt: "Na de Statenverkiezingen vormen de twee partijen een ongebruikelijke combinatie.", image: "voting", timeAgo: "Gisteren" },
  ],
  "politiek/nederland/gemeenten": [
    { label: "Gemeenten", title: "Amsterdam verhoogt ozb met 12 procent om begrotingstekort te dekken", excerpt: "Het college van B&W ziet geen andere mogelijkheid.", image: "amsterdam", timeAgo: "2 uur geleden" },
  ],
  "politiek/europa": [
    { label: "EU", title: "Europees Parlement stemt in met nieuwe AI-wetgeving: strengste ter wereld", excerpt: "De AI Act treedt gefaseerd in werking.", image: "euParl", timeAgo: "1 uur geleden" },
    { label: "EU", title: "Von der Leyen kondigt tweede termijn aan als Commissievoorzitter", excerpt: "Met steun van de grootste fracties mikt ze op een nieuw mandaat.", image: "euFlags", timeAgo: "3 uur geleden", premium: true },
  ],
  "politiek/europa/eu": [
    { label: "EU", title: "Europese Raad debatteert over uitbreiding: Oekraïne dichter bij lidmaatschap", excerpt: "De staatshoofden spraken urenlang over het tijdpad voor toetreding.", image: "euParl", timeAgo: "2 uur geleden", premium: true },
  ],
  "politiek/europa/duitsland": [
    { label: "Duitsland", title: "SPD verliest deelstaatverkiezingen in Beieren: historisch slecht resultaat", excerpt: "De sociaaldemocraten halen minder dan 9 procent.", image: "reichstag", timeAgo: "Gisteren" },
  ],
  "politiek/europa/frankrijk": [
    { label: "Frankrijk", title: "Macron lost Assemblée Nationale op na verlies bij Europese verkiezingen", excerpt: "De president verrast iedereen met vervroegde verkiezingen.", image: "paris", timeAgo: "3 uur geleden", premium: true },
  ],
  "politiek/europa/vk": [
    { label: "VK", title: "Labour wint Britse verkiezingen met historische meerderheid: Starmer premier", excerpt: "De Conservatieven lijden hun zwaarste verkiezingsnederlaag in honderd jaar.", image: "bigben", timeAgo: "Gisteren", premium: true },
  ],
  "politiek/wereld": [
    { label: "VS", title: "Biden tekent nieuwe veiligheidswetten vlak voor inauguratie opvolger", excerpt: "De uittredende president ondertekent een reeks maatregelen.", image: "whitehouse", timeAgo: "2 uur geleden" },
    { label: "China", title: "Xi Jinping maakt staatsbezoek aan Rusland te midden van oorlog in Oekraïne", excerpt: "Het bezoek wordt door het Westen gezien als politieke steun voor Poetin.", image: "stbasil", timeAgo: "4 uur geleden", premium: true },
  ],
  "politiek/opinie": [
    { label: "Column", title: "Hoe het Westen Poetin miskende — en wat we ervan kunnen leren", excerpt: "Een terugblik op twintig jaar westerse Rusland-politiek. Door oud-ambassadeur Pieter Feith.", image: "kremlin", timeAgo: "3 uur geleden", premium: true },
    { label: "Opinie", title: "De klimaatcrisis vraagt om meer dan vliegtaks", excerpt: "Individuele maatregelen zijn niet genoeg. We hebben structureel beleid nodig.", image: "smoke", timeAgo: "Gisteren" },
  ],
  "misdaad/alles": [
    { label: "Drugs", title: "Politie rolt groot drugsnetwerk op in Rotterdam-Haven: 23 arrestaties", excerpt: "Na een jaar undercover-operatie werd vannacht tegelijk op tien locaties ingevallen.", image: "port1", timeAgo: "1 uur geleden" },
    { label: "Rechtbank", title: "Taghi krijgt levenslang: rechtbank overtuigd van rol bij vijf moorden", excerpt: "De uitspraak was na drie jaar strafproces.", image: "court", timeAgo: "3 uur geleden", premium: true },
    { label: "Fraude", title: "Voormalig ABN-directeur schuldig aan fraude van 40 miljoen euro", excerpt: "De rechtbank in Amsterdam achtte bewezen dat hij jarenlang klantgeld overhevelde.", image: "banknotes", timeAgo: "4 uur geleden" },
  ],
  "misdaad/rechtbank": [
    { label: "Rechtbank", title: "Uitspraak in zaak-Taghi: levenslang voor leider criminele organisatie", excerpt: "De rechtbank Amsterdam deed na drie jaar strafproces uitspraak.", image: "court", timeAgo: "2 uur geleden", premium: true },
    { label: "Rechtbank", title: "Kroongetuige Nabil B. getuigt: 'Taghi belde zelf met de opdracht'", excerpt: "Op de zitting van gisteren gaf de kroongetuige gedetailleerde verklaringen.", image: "gavel", timeAgo: "Gisteren" },
  ],
  "misdaad/drugs": [
    { label: "Cocaine", title: "Recordvangst: 10 ton cocaine gevonden in scheepslading bananen in Antwerpen", excerpt: "De straatwaarde wordt geschat op meer dan een miljard euro.", image: "containers", timeAgo: "1 uur geleden" },
    { label: "Beleid", title: "Rapport: legalisatie cannabis reduceert drugscriminaliteit met 23 procent", excerpt: "Een vergelijkend onderzoek naar Canada, Uruguay en Nederland.", image: "cannabis", timeAgo: "Gisteren" },
  ],
  "misdaad/drugs/cocaine": [
    { label: "Cocaine", title: "Antwerpen is het cocaine-hart van Europa: hoe de haven zo kwetsbaar werd", excerpt: "Een reconstructie van tien jaar cocaïnehandel via de op twee na grootste haven.", image: "port2", timeAgo: "2 uur geleden", premium: true },
  ],
  "misdaad/drugs/xtc": [
    { label: "XTC", title: "Nederland produceert nog steeds 80 procent van wereldwijde XTC-voorraad", excerpt: "Ondanks jarenlange bestrijding is Brabant het mondiale epicentrum.", image: "pills", timeAgo: "3 uur geleden" },
  ],
  "misdaad/drugs/wietteelt": [
    { label: "Wietteelt", title: "Eerste legale wietkwekers starten productie: experiment gereguleerde teelt", excerpt: "Tien telers in Breda en Tilburg mogen cannabis produceren voor de coffeeshopmarkt.", image: "cannabis", timeAgo: "1 uur geleden" },
  ],
  "misdaad/drugs/synthetisch": [
    { label: "Fentanyl", title: "Fentanyl opgedoken in Amsterdam: eerste overdosis-doden bevestigd", excerpt: "Toxicologen bevestigen dat het opiaat verantwoordelijk is voor drie sterfgevallen.", image: "pills2", timeAgo: "2 uur geleden", premium: true },
  ],
  "misdaad/fraude": [
    { label: "Toeslagen", title: "Toeslagenaffaire: commissie eist stelselherziening van de belastingdienst", excerpt: "Na jaren van onrecht voor duizenden ouders wil de commissie een cultuurwijziging.", image: "scales", timeAgo: "2 uur geleden" },
    { label: "Fraude", title: "Oplichter verkoopt honderden nep-vakantieboekingen via grote platforms", excerpt: "De man opereerde zes jaar onopgemerkt en maakte meer dan 1,4 miljoen euro buit.", image: "code2", timeAgo: "3 uur geleden", premium: true },
  ],
  "misdaad/moord": [
    { label: "Cold case", title: "Politie lost cold case op na 35 jaar: DNA-match leidt naar verdachte in Gent", excerpt: "De zaak-Femke Brouwer, die in 1989 onopgelost bleef, wordt heropend.", image: "police1", timeAgo: "1 uur geleden" },
    { label: "Liquidatie", title: "Advocaat Derk Wiersum: twee jaar later wordt hoofdverdachte uitgeleverd", excerpt: "België levert de verdachte van de moord op de Taghi-advocaat uit.", image: "cell", timeAgo: "3 uur geleden", premium: true },
  ],
  "financieel/alles": [
    { label: "Beurs", title: "Beurs sluit op recordhoogte na sterke bedrijfscijfers", excerpt: "De hoofdindex won ruim twee procent. Vooral banken en technologiebedrijven trokken de markt omhoog.", image: "banknotes", timeAgo: "40 min geleden" },
    { label: "Rente", title: "Centrale bank verlaagt de rente voor het eerst in twee jaar", excerpt: "De rentebeslissing komt eerder dan verwacht. Spaarders en kopers merken de gevolgen binnen enkele weken.", image: "euro", timeAgo: "2 uur geleden", premium: true },
    { label: "Vastgoed", title: "Huizenprijzen stijgen voor het vijfde kwartaal op rij", excerpt: "Vooral in de grote steden loopt het tekort aan woningen verder op. Starters komen steeds moeilijker aan de bak.", image: "amsterdam", timeAgo: "4 uur geleden" },
    { label: "Crypto", title: "Bitcoin stijgt naar nieuw jaarhoogtepunt na instroom in beursfondsen", excerpt: "Analisten wijzen op grote institutionele aankopen. Tegelijk waarschuwen toezichthouders voor extreme koersschommelingen.", image: "code2", timeAgo: "Gisteren" },
  ],
  "financieel/beurs": [
    { label: "Beurs", title: "Beurs sluit op recordhoogte na sterke bedrijfscijfers", excerpt: "De hoofdindex won ruim twee procent. Vooral banken en technologiebedrijven trokken de markt omhoog.", image: "banknotes", timeAgo: "40 min geleden" },
    { label: "Aandelen", title: "Technologiefondsen onder druk: beleggers nemen winst na jaarstijging", excerpt: "Na een sterke eerste jaarhelft kozen veel beleggers voor winstnemingen. De sector verloor gemiddeld drie procent.", image: "code1", timeAgo: "3 uur geleden" },
    { label: "Dividend", title: "Dividendseizoen start: dit zijn de grootste uitkeerders van het kwartaal", excerpt: "Bedrijven keren dit kwartaal samen bijna twintig miljard euro uit aan aandeelhouders.", image: "euro", timeAgo: "Gisteren", premium: true },
  ],
  "financieel/crypto": [
    { label: "Bitcoin", title: "Bitcoin stijgt naar nieuw jaarhoogtepunt na instroom in beursfondsen", excerpt: "Analisten wijzen op grote institutionele aankopen. Tegelijk waarschuwen toezichthouders voor extreme koersschommelingen.", image: "code2", timeAgo: "Gisteren" },
    { label: "Regelgeving", title: "Toezichthouder scherpt regels aan voor cryptohandelsplatformen", excerpt: "Platformen moeten voortaan strengere eisen voor klantidentificatie en bewaring van tegoeden naleven.", image: "code1", timeAgo: "5 uur geleden" },
  ],
  "financieel/vastgoed": [
    { label: "Woningmarkt", title: "Huizenprijzen stijgen voor het vijfde kwartaal op rij", excerpt: "Vooral in de grote steden loopt het tekort aan woningen verder op. Starters komen steeds moeilijker aan de bak.", image: "amsterdam", timeAgo: "4 uur geleden" },
    { label: "Hypotheek", title: "Hypotheekrente zakt: kopers krijgen weer meer leenruimte", excerpt: "Banken verlagen hun tarieven na de renteknip. Een gemiddeld gezin kan duizenden euro's meer lenen.", image: "euro", timeAgo: "Gisteren", premium: true },
  ],
  "financieel/sparen": [
    { label: "Sparen", title: "Spaarrente keldert: waar kun je nog drie procent krijgen?", excerpt: "Banken passen hun tarieven aan. Wij zetten de beste spaarrekeningen en depots op een rij.", image: "euro", timeAgo: "6 uur geleden" },
    { label: "Budget", title: "Zo bouw je met kleine bedragen een buffer op", excerpt: "Een vaste maandelijkse overschrijving is genoeg. Een financieel adviseur legt uit hoe je begint.", image: "banknotes", timeAgo: "Gisteren" },
  ],
  "financieel/belastingen": [
    { label: "Belastingen", title: "Nieuwe belastingschijven: wie gaat er op vooruit?", excerpt: "Middeninkomens profiteren het meest van de aangekondigde verlaging. Hoge inkomens merken weinig verschil.", image: "binnenhof2", timeAgo: "2 uur geleden" },
    { label: "Aangifte", title: "Belastingdienst handelt aangiftes sneller af dankzij nieuwe app", excerpt: "Burgers kunnen hun gegevens nu in enkele minuten controleren en aanvullen. Het ministerie verwacht minder fouten.", image: "scales", timeAgo: "Gisteren" },
  ],
  "misdaad/cybercrime": [
    { label: "Ransomware", title: "Ransomware legt drie gemeenten plat: burgerdiensten weken offline", excerpt: "Eindhoven, Helmond en Tilburg zijn getroffen. Losgeld van 3,5 miljoen geëist.", image: "code1", timeAgo: "2 uur geleden" },
    { label: "Datalek", title: "Ziekenhuizen doelwit van phishingcampagne: patiëntdata van 80.000 mensen gelekt", excerpt: "Drie ziekenhuizen schreven patiënten aan vanwege een mogelijk datalek.", image: "hospital", timeAgo: "Gisteren" },
  ],
}

function getContentKey(tabId: string, pillId?: string, submenuId?: string): string {
  if (!pillId) return tabId
  if (submenuId) {
    const key = `${tabId}/${pillId}/${submenuId}`
    if (CONTENT[key]) return key
  }
  return `${tabId}/${pillId}`
}

// ─── Components ──────────────────────────────────────────────────────────────

function ArticleImage({ article, index }: { article: Article; index: number }) {
  const shades = ["#e8e8e8", "#e4e4e4", "#ececec", "#e6e6e6"]
  return (
    <div style={{
      width: "100%",
      aspectRatio: "16/9",
      background: shades[index % shades.length],
      borderRadius: 2,
      overflow: "hidden",
      flexShrink: 0,
    }}>
      <img
        src={unsplashUrl(article.image, 800)}
        srcSet={`${unsplashUrl(article.image, 480)} 480w, ${unsplashUrl(article.image, 800)} 800w, ${unsplashUrl(article.image, 1200)} 1200w`}
        sizes="(min-width: 480px) 448px, 100vw"
        alt={article.title}
        loading={index < 2 ? "eager" : "lazy"}
        decoding="async"
        draggable={false}
        style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
      />
    </div>
  )
}

function ArticleTeaser({ article, index }: { article: Article; index: number }) {
  return (
    <article style={{ padding: "0 16px 24px" }}>
      <ArticleImage article={article} index={index} />
      <div style={{ marginTop: 10 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
          <span style={{ fontSize: 13, fontWeight: 600, color: "#2b70e8" }}>
            {article.label}
          </span>
          {article.premium && (
            <span style={{
              fontSize: 11, fontWeight: 600, color: "#b07d10",
              background: "#fef3c7", padding: "2px 6px", borderRadius: 4,
            }}>
              Premium
            </span>
          )}
          <span style={{ fontSize: 12, color: "#aaa", marginLeft: "auto", flexShrink: 0 }}>
            {article.timeAgo}
          </span>
        </div>
        <p style={{ fontSize: 22, fontWeight: 500, color: "#1a1a1a", lineHeight: 1.35, margin: "0 0 6px" }}>
          {article.title}
        </p>
        <p style={{ fontSize: 16, color: "#666", lineHeight: 1.6, margin: 0 }}>
          {article.excerpt}
        </p>
      </div>
    </article>
  )
}

function Pill({
  pill,
  active,
  menuOpen,
  activeSubmenuLabel,
  onSelect,
  onChevronClick,
  onClearSubmenu,
}: {
  pill: PillConfig
  active: boolean
  menuOpen: boolean
  activeSubmenuLabel?: string
  onSelect: () => void
  onChevronClick: () => void
  onClearSubmenu: () => void
}) {
  const hasSubmenuActive = !!activeSubmenuLabel
  const hasRightControl = pill.chevron || hasSubmenuActive

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={onSelect}
      onKeyDown={e => e.key === "Enter" && onSelect()}
      style={{
        position: "relative",
        display: "inline-flex",
        alignItems: "center",
        gap: hasRightControl ? 8 : 4,
        height: 36,
        paddingTop: 8,
        paddingBottom: 8,
        paddingLeft: 12,
        paddingRight: hasRightControl ? 9 : 12,
        borderRadius: 9999,
        flexShrink: 0,
        whiteSpace: "nowrap",
        userSelect: "none",
        cursor: "pointer",
        backgroundColor: "rgba(255,255,255,0.1)",
        border: active ? "1px solid #0088ff" : "1px solid white",
        boxShadow: active ? "none" : "0px 2px 10px 0px rgba(0,0,0,0.15)",
        transition: "border-color 0.15s, box-shadow 0.15s",
      }}
    >
      {pill.icon && (
        <div style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexShrink: 0,
          width: 18,
          height: 18,
          color: "#1a1a1a",
        }}>
          {pill.icon}
        </div>
      )}

      <span style={{
        fontFamily: '"SF Pro Text", -apple-system, sans-serif',
        fontSize: 16,
        fontWeight: 400,
        color: "#1a1a1a",
        lineHeight: 1.15,
      }}>
        {pill.label}
      </span>

      {hasSubmenuActive && (
        <>
          <span style={{ fontSize: 14, color: "rgba(26,26,26,0.4)", lineHeight: 1.15 }}>›</span>
          <span style={{
            fontFamily: '"SF Pro Text", -apple-system, sans-serif',
            fontSize: 14,
            fontWeight: 400,
            color: "#1a1a1a",
            lineHeight: 1.15,
          }}>
            {activeSubmenuLabel}
          </span>
          <button
            style={{
              width: 24, height: 24, flexShrink: 0,
              display: "flex", alignItems: "center", justifyContent: "center",
              color: "rgba(26,26,26,0.5)",
            }}
            onClick={e => { e.stopPropagation(); onClearSubmenu() }}
            aria-label="Verwijder filter"
          >
            <svg width="10" height="10" viewBox="0 0 8 8" fill="none" style={{ margin: 0 }}>
              <path d="M1 1L7 7M7 1L1 7" stroke="rgba(26,26,26,0.8)" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </button>
        </>
      )}

      {!hasSubmenuActive && pill.chevron && (
        <button
          style={{
            width: 24, height: 24, flexShrink: 0,
            display: "flex", alignItems: "center", justifyContent: "center",
            borderRadius: 9999,
            backgroundColor: menuOpen ? "#0088ff" : "transparent",
            transition: "background-color 0.15s",
          }}
          onClick={e => { e.stopPropagation(); onChevronClick() }}
          aria-label={`Open ${pill.label} submenu`}
        >
          <svg
            width="12" height="6" viewBox="0 0 7.53843 4.47175" fill="none"
            style={{ transform: menuOpen ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.2s ease" }}
          >
            <path d="M3.76922 4.47175L0 0.70255L0.70255 0L3.76922 3.06667L6.83588 0L7.53843 0.70255L3.76922 4.47175Z" fill={menuOpen ? "white" : "black"} />
          </svg>
        </button>
      )}
    </div>
  )
}

// ─── TabRow with animated underline indicator ────────────────────────────────

function TabRow({
  tabs,
  activeIdx,
  tabRefs,
  onSelect,
}: {
  tabs: TabConfig[]
  activeIdx: number
  tabRefs: { current: (HTMLButtonElement | null)[] }
  onSelect: (idx: number) => void
}) {
  const rowRef = useRef<HTMLDivElement>(null)
  const [indicator, setIndicator] = useState({ left: 0, width: 0, ready: false, animate: false })

  const measure = useCallback((animate: boolean) => {
    const btn = tabRefs.current[activeIdx]
    const row = rowRef.current
    if (!btn || !row) return
    const btnRect = btn.getBoundingClientRect()
    const rowRect = row.getBoundingClientRect()
    const left = btnRect.left - rowRect.left + row.scrollLeft + 4
    const width = btnRect.width - 8
    setIndicator({ left, width, ready: true, animate })
  }, [activeIdx, tabRefs])

  // Initial placement — defer one frame so the DOM has laid out
  useEffect(() => { requestAnimationFrame(() => measure(false)) }, [])

  // Subsequent tab changes — animate
  useEffect(() => { measure(true) }, [activeIdx])

  return (
    <div
      ref={rowRef}
      style={{ display: "flex", alignItems: "stretch", padding: "0 12px", minWidth: "max-content", height: 56, position: "relative" }}
    >
      {tabs.map((tab, idx) => (
        <button
          key={tab.id}
          ref={el => { tabRefs.current[idx] = el }}
          onClick={() => onSelect(idx)}
          style={{
            position: "relative",
            padding: "8px 10px",
            whiteSpace: "nowrap",
            fontSize: 16,
            color: "#000",
            fontWeight: 400,
            transition: "font-weight 0.2s",
            width: "fit-content",
            height: "100%",
          }}
        >
          {tab.label}
        </button>
      ))}
      {indicator.ready && (
        <span style={{
          position: "absolute",
          bottom: 0,
          left: indicator.left,
          width: indicator.width,
          height: 3,
          background: "#1a1a1a",
          borderRadius: "2px 2px 0 0",
          transition: indicator.animate
            ? "left 0.25s cubic-bezier(0.4,0,0.2,1), width 0.25s cubic-bezier(0.4,0,0.2,1)"
            : "none",
          pointerEvents: "none",
        }} />
      )}
    </div>
  )
}

// ─── App ─────────────────────────────────────────────────────────────────────

export default function App() {
  const [activeTabIdx, setActiveTabIdx] = useState(0)
  const [activeNavId, setActiveNavId] = useState("home")
  const [activePills, setActivePills] = useState<Record<string, string>>({})
  const [selectedSubmenu, setSelectedSubmenu] = useState<Record<string, Record<string, string>>>({})
  const [openMenuPillId, setOpenMenuPillId] = useState<string | null>(null)

  const swipeStartX = useRef<number | null>(null)
  const swipeStartY = useRef<number | null>(null)
  const swipeDir = useRef<"h" | "v" | null>(null)
  const [dragOffsetX, setDragOffsetX] = useState(0)
  const [isDragging, setIsDragging] = useState(false)

  const tabRefs = useRef<(HTMLButtonElement | null)[]>([])
  const pillRowRef = useRef<HTMLDivElement>(null)
  const viewportRef = useRef<HTMLDivElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const headerTranslate = useRef(0)
  const panelScrollTop = useRef(0)
  const HEADER_HEIGHT = 106

  const handleContentScroll = useCallback((e: React.UIEvent<HTMLDivElement>) => {
    const el = e.currentTarget
    const scrollTop = el.scrollTop
    const delta = scrollTop - panelScrollTop.current
    panelScrollTop.current = scrollTop

    const next = Math.max(0, Math.min(HEADER_HEIGHT, headerTranslate.current + delta))
    headerTranslate.current = next

    if (headerRef.current) {
      headerRef.current.style.transform = `translateY(-${next}px)`
      headerRef.current.style.marginBottom = `-${next}px`
    }
  }, [])

  const activeTab = MAIN_TABS[activeTabIdx]
  const activePillId = activePills[activeTab.id] ?? activeTab.pills[0]?.id
  const activeSubmenuId = activePillId ? selectedSubmenu[activeTab.id]?.[activePillId] : undefined
  const contentKey = getContentKey(activeTab.id, activePillId, activeSubmenuId)
  const articles = CONTENT[contentKey] ?? CONTENT[activeTab.id] ?? []

  useEffect(() => {
    tabRefs.current[activeTabIdx]?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" })
    pillRowRef.current?.scrollTo({ left: 0, behavior: "smooth" })
  }, [activeTabIdx])

  // Document-level non-passive touchmove listener: once a horizontal swipe is
  // detected, preventDefault stops vertical drift on any scroll container in the tree.
  useEffect(() => {
    const handler = (e: TouchEvent) => {
      if (swipeDir.current === "h") e.preventDefault()
    }
    document.addEventListener("touchmove", handler, { passive: false })
    return () => document.removeEventListener("touchmove", handler)
  }, [])

  function goToTab(idx: number) {
    if (idx === activeTabIdx) return
    setActiveTabIdx(idx)
    setOpenMenuPillId(null)
    panelScrollTop.current = 0
    headerTranslate.current = 0
    if (headerRef.current) {
      headerRef.current.style.transform = "translateY(0)"
      headerRef.current.style.marginBottom = "0"
    }
  }

  function selectPill(tabId: string, pillId: string) {
    setActivePills(prev => ({ ...prev, [tabId]: pillId }))
    setOpenMenuPillId(null)
  }

  function selectSubmenuItem(tabId: string, pillId: string, submenuId: string) {
    setActivePills(prev => ({ ...prev, [tabId]: pillId }))
    setSelectedSubmenu(prev => ({ ...prev, [tabId]: { ...prev[tabId], [pillId]: submenuId } }))
    setOpenMenuPillId(null)
  }

  function clearSubmenu(tabId: string, pillId: string) {
    setSelectedSubmenu(prev => {
      const tabMap = { ...prev[tabId] }
      delete tabMap[pillId]
      return { ...prev, [tabId]: tabMap }
    })
  }

  const onTouchStart = useCallback((e: React.TouchEvent) => {
    swipeStartX.current = e.touches[0].clientX
    swipeStartY.current = e.touches[0].clientY
    swipeDir.current = null
    setIsDragging(true)
  }, [])

  const onTouchMove = useCallback((e: React.TouchEvent) => {
    if (swipeStartX.current === null) return
    const dx = e.touches[0].clientX - swipeStartX.current
    const dy = e.touches[0].clientY - (swipeStartY.current ?? 0)
    if (!swipeDir.current && (Math.abs(dx) > 8 || Math.abs(dy) > 8)) {
      swipeDir.current = Math.abs(dx) > Math.abs(dy) ? "h" : "v"
    }
    if (swipeDir.current === "h") setDragOffsetX(dx)
  }, [])

  const onTouchEnd = useCallback(() => {
    if (swipeDir.current === "h") {
      const threshold = 55
      if (dragOffsetX < -threshold && activeTabIdx < MAIN_TABS.length - 1) {
        setActiveTabIdx(i => i + 1); setOpenMenuPillId(null)
      } else if (dragOffsetX > threshold && activeTabIdx > 0) {
        setActiveTabIdx(i => i - 1); setOpenMenuPillId(null)
      }
    }
    swipeStartX.current = null; swipeStartY.current = null; swipeDir.current = null
    setDragOffsetX(0); setIsDragging(false)
  }, [dragOffsetX, activeTabIdx])

  const onMouseDown = useCallback((e: React.MouseEvent) => {
    swipeStartX.current = e.clientX; swipeDir.current = "h"; setIsDragging(true)
  }, [])

  const onMouseMove = useCallback((e: React.MouseEvent) => {
    if (swipeStartX.current === null) return
    setDragOffsetX(e.clientX - swipeStartX.current)
  }, [])

  const onMouseUp = useCallback(() => {
    const threshold = 55
    if (dragOffsetX < -threshold && activeTabIdx < MAIN_TABS.length - 1) {
      setActiveTabIdx(i => i + 1); setOpenMenuPillId(null)
    } else if (dragOffsetX > threshold && activeTabIdx > 0) {
      setActiveTabIdx(i => i - 1); setOpenMenuPillId(null)
    }
    swipeStartX.current = null; swipeDir.current = null
    setDragOffsetX(0); setIsDragging(false)
  }, [dragOffsetX, activeTabIdx])

  const vpWidth = viewportRef.current?.offsetWidth ?? 390
  const dragPct = isDragging && swipeDir.current === "h" ? (dragOffsetX / vpWidth) * (100 / MAIN_TABS.length) : 0
  const translatePct = (activeTabIdx / MAIN_TABS.length) * 100 - dragPct

  function getSubmenuLabel(tabId: string, pillId: string): string | undefined {
    const id = selectedSubmenu[tabId]?.[pillId]
    if (!id) return undefined
    const tab = MAIN_TABS.find(t => t.id === tabId)
    const pill = tab?.pills.find(p => p.id === pillId)
    return pill?.submenu?.find(s => s.id === id)?.label
  }

  const openDropdownPill = openMenuPillId ? activeTab.pills.find(p => p.id === openMenuPillId && p.submenu) : null

  return (
    <div style={{ background: "white", height: "100%", width: "100%", display: "flex", flexDirection: "column", overflow: "hidden" }}>

      {/* Home view stays mounted (hidden) while another bottom-nav section is open, so its state survives */}
      <div style={{ flex: 1, minHeight: 0, display: activeNavId === "home" ? "flex" : "none", flexDirection: "column" }}>

      {/* ── Header — translates up with scroll, comes back on scroll-up ── */}
      <div
        ref={headerRef}
        style={{ flexShrink: 0, zIndex: 30, willChange: "transform" }}
      >
        <Navigation20MobileAppIos />
      </div>

      {/* ── Layer 1: Tab Row (sticky) ── */}
      <div style={{ flexShrink: 0, zIndex: 20, background: "white", borderBottom: "1px solid #e0e0e0", overflowX: "auto" }}>
        <TabRow
          tabs={MAIN_TABS}
          activeIdx={activeTabIdx}
          tabRefs={tabRefs}
          onSelect={goToTab}
        />
      </div>

      {/* ── Layer 2: Pill Row (sticky) ── */}
      {activeTab.pills.length > 0 && (
        <div style={{ flexShrink: 0, zIndex: 20, background: "white", position: "relative" }}>
          <div
            ref={pillRowRef}
            style={{ display: "flex", alignItems: "center", gap: 12, padding: "16px", overflowX: "auto" }}
          >
            {activeTab.pills.map(pill => (
              <Pill
                key={pill.id}
                pill={pill}
                active={activePillId === pill.id}
                menuOpen={openMenuPillId === pill.id}
                activeSubmenuLabel={getSubmenuLabel(activeTab.id, pill.id)}
                onSelect={() => selectPill(activeTab.id, pill.id)}
                onChevronClick={() => setOpenMenuPillId(openMenuPillId === pill.id ? null : pill.id)}
                onClearSubmenu={() => clearSubmenu(activeTab.id, pill.id)}
              />
            ))}
          </div>

          {openDropdownPill && (
            <>
              <div style={{ position: "fixed", inset: 0, zIndex: 30 }} onClick={() => setOpenMenuPillId(null)} />
              <div style={{
                position: "absolute", left: 16, right: 16, top: "100%", zIndex: 40,
                background: "white", borderRadius: 16,
                boxShadow: "0px 8px 40px rgba(0,0,0,0.14)",
                border: "1px solid #ebebeb", overflow: "hidden",
              }}>
                {openDropdownPill.submenu!.map((item, i, arr) => {
                  const isActive = selectedSubmenu[activeTab.id]?.[openDropdownPill.id] === item.id
                  return (
                    <button
                      key={item.id}
                      style={{
                        width: "100%", textAlign: "left", padding: "14px 16px", fontSize: 14,
                        color: isActive ? "#2b70e8" : "#1a1a1a",
                        background: isActive ? "#f0f4ff" : "transparent",
                        borderBottom: i < arr.length - 1 ? "1px solid #f0f0f0" : "none",
                        display: "flex", alignItems: "center", justifyContent: "space-between",
                        transition: "background 0.1s",
                      }}
                      onClick={() => selectSubmenuItem(activeTab.id, openDropdownPill.id, item.id)}
                    >
                      {item.label}
                      {isActive && (
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                          <path d="M2 7L6 11L12 3" stroke="#2b70e8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      )}
                    </button>
                  )
                })}
              </div>
            </>
          )}
        </div>
      )}

      {/* ── Swipeable Content Carousel ── */}
      <div
        ref={viewportRef}
        style={{ flex: 1, overflow: "hidden", position: "relative", touchAction: "pan-y" }}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
      >
        <div
          style={{
            display: "flex",
            height: "100%",
            width: `${MAIN_TABS.length * 100}%`,
            transform: `translateX(-${translatePct}%)`,
            transition: isDragging ? "none" : "transform 0.32s cubic-bezier(0.25,0.46,0.45,0.94)",
            willChange: "transform",
          }}
        >
          {MAIN_TABS.map((tab, tabIdx) => {
            const panelPillId = activePills[tab.id] ?? tab.pills[0]?.id
            const panelSubmenuId = panelPillId ? selectedSubmenu[tab.id]?.[panelPillId] : undefined
            const panelKey = getContentKey(tab.id, panelPillId, panelSubmenuId)
            const panelArticles = CONTENT[panelKey] ?? CONTENT[tab.id] ?? []

            const panelPill = tab.pills.find(p => p.id === panelPillId)
            const panelSubmenuLabel = panelSubmenuId
              ? panelPill?.submenu?.find(s => s.id === panelSubmenuId)?.label
              : undefined
            const pageTitle = panelSubmenuLabel
              ? panelSubmenuLabel
              : panelPillId && panelPillId !== "alles"
                ? (panelPill?.label ?? tab.label)
                : tab.label

            return (
              <div
                key={tab.id}
                style={{ width: `${100 / MAIN_TABS.length}%`, height: "100%", overflowY: "auto", touchAction: "pan-y" }}
                onScroll={tabIdx === activeTabIdx ? handleContentScroll : undefined}
              >
                <div style={{ padding: "16px 16px 12px" }}>
                  <h1 style={{ fontSize: 22, fontWeight: 700, color: "#1a1a1a", lineHeight: 1.2, margin: 0 }}>
                    {tabIdx === activeTabIdx ? pageTitle : tab.label}
                  </h1>
                  <p style={{ fontSize: 13, color: "#aaa", margin: "4px 0 0" }}>
                    {panelArticles.length} artikel{panelArticles.length !== 1 ? "en" : ""}
                  </p>
                </div>

                {panelArticles.map((article, i) => (
                  <ArticleTeaser key={i} article={article} index={i} />
                ))}

                <div style={{ height: 32 }} />
              </div>
            )
          })}
        </div>
      </div>

      </div>

      {activeNavId !== "home" && <SectionPage id={activeNavId} header={<Navigation20MobileAppIos />} />}

      {/* ── Bottom navigation ── */}
      <BottomNav activeId={activeNavId} onSelect={setActiveNavId} />
    </div>
  )
}
