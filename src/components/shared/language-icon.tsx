"use client";

interface LanguageIconProps {
  slug: string;
  className?: string;
}

export function LanguageIcon({ slug, className = "w-8 h-8" }: LanguageIconProps) {
  switch (slug) {
    case "python":
      return (
        <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15.885 2C12.234 2 11.445 3.605 11.445 6.031V9h7.678v1.194H8.333C4.682 10.194 2 12.617 2 16.268c0 3.65 2.319 5.795 5.969 5.795h3.476v-2.788c0-2.023 1.88-3.754 3.904-3.754h7.677c1.687 0 3.017-1.369 3.017-3.056V8.847C26.043 5.24 23.607 2 19.956 2h-4.07z" fill="url(#python1)" />
          <path d="M21.677 9.222V11c0 2.134-1.87 3.903-3.904 3.903h-7.68c-1.688 0-3.016 1.38-3.016 3.068v5.756C7.077 26.868 9.601 29 13.252 29h4.047c3.651 0 5.967-2.389 5.967-6.04v-2.808h-7.678v-1.194h12.077C30.327 18.958 30 15.357 30 13.232c0-2.125-1.003-5.34-4.654-5.34h-3.669z" fill="url(#python2)" />
          <circle cx="12.478" cy="6.466" r="1.029" fill="#fff" />
          <circle cx="20.756" cy="25.534" r="1.029" fill="#fff" />
          <defs>
            <linearGradient id="python1" x1="14.655" y1="1" x2="14.655" y2="14.423" gradientUnits="userSpaceOnUse">
              <stop stopColor="#387EB8" />
              <stop offset="1" stopColor="#366994" />
            </linearGradient>
            <linearGradient id="python2" x1="18.186" y1="18.218" x2="18.186" y2="29" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FFE052" />
              <stop offset="1" stopColor="#FFC331" />
            </linearGradient>
          </defs>
        </svg>
      );
    case "javascript":
      return (
        <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="2" y="2" width="28" height="28" rx="2" fill="#F7DF1E" />
          <path d="M20.809 23.875c.695 1.145 1.6 1.987 3.2 1.987 1.344 0 2.202-.672 2.202-1.6 0-1.114-.882-1.508-2.362-2.157l-.81-.347c-2.338-1.003-3.89-2.26-3.89-4.917 0-2.445 1.853-4.306 4.748-4.306 2.06 0 3.542.716 4.608 2.592l-2.524 1.622c-.566-1.01-1.177-1.408-2.111-1.408-.962 0-1.572.612-1.572 1.408 0 .986.612 1.385 2.021 1.996l.81.348c2.762 1.182 4.318 2.388 4.318 5.098 0 2.922-2.291 4.52-5.367 4.52-3.007 0-4.941-1.434-5.795-3.314l2.572-1.596zM12.313 24.43c.509.91 1.323 1.658 2.448 1.658 1.282 0 2.093-.502 2.093-2.452v-6.586h3.882v6.695c0 4.039-2.324 5.88-5.863 5.88-3.153 0-5.253-1.61-6.2-3.578l2.616-1.617h.024z" fill="#000" />
        </svg>
      );
    case "html-css":
      return (
        <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6 28L4 3h24l-2 25-10 3-10-3z" fill="#E44D26" />
          <path d="M26 5H16v24.5l8-2.5 2-22z" fill="#F16529" />
          <path d="M9.5 17.5l.5 4.5H22l-.5 5-5.5 1.5-5.5-1.5-.5-3h-3l1 5.5L16 28l10-3 1.5-11-1-7H9.5v5.5z" fill="#fff" />
          <path d="M9.5 11.5v2.5h13l-.5 3h-9l.5 3h8l-.5 3.5-4.5 1.5v.5l5.5-1.5 1-6-1-7h-12l-.5 2.5z" fill="#EBEBEB" />
        </svg>
      );
    case "java":
      return (
        <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11.5 25.5c0 0-1.5.5 1 1 3 .5 4.5.5 7.5-.5 0 0 .5.5 1 .5-4 2-9.5 1-9.5-1z" fill="#5382A1" />
          <path d="M10.5 22.5c0 0-1.5 1 1 1.5 3 .5 5.5.5 8.5-.5 0 0 0 .5.5.5-3.5 1.5-10 1-10-1.5z" fill="#5382A1" />
          <path d="M17 15c2 2.5-.5 4.5-.5 4.5s5-2.5 2.5-5.5c-2-2.5-3.5-4 4.5-9 0 0-11 3.5-6.5 10z" fill="#E76F00" />
          <path d="M24 24s1 1-1 2c-3 1.5-12 2-14.5.5 0 0 .5 1 2.5 1.5 6 1 12.5-.5 13-3.5 0 0 .5-.5 0 0z" fill="#5382A1" />
          <path d="M20.5 0S18 2.5 20.5 5.5c2.5 3 4 5-5 8 0 0 9-1.5 12-5 3-3.5-7-8.5-7-8.5z" fill="#E76F00" />
          <path d="M10 31c6 1 16-.5 16-3 0 0-1 1-3 2-5 1.5-14 1-14.5.5 0 0 .5.5 1.5.5z" fill="#5382A1" />
        </svg>
      );
    case "csharp":
      return (
        <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 8l12-5 12 5v16l-12 5-12-5V8z" fill="#68217A" />
          <path d="M20 10l6 3v6l-6 3V10z" fill="#fff" opacity="0.3" />
          <path d="M28 8v16l-12 5V28l12-5V8z" fill="#fff" opacity="0.1" />
          <path d="M16 3v24l12-5V8L16 3z" fill="#fff" opacity="0.2" />
          <text x="14" y="22" fontSize="11" fontWeight="bold" fill="#fff" textAnchor="middle" fontFamily="system-ui">C#</text>
        </svg>
      );
    case "cpp":
      return (
        <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 8l12-5 12 5v16l-12 5-12-5V8z" fill="#00599C" />
          <path d="M20 10l6 3v6l-6 3V10z" fill="#fff" opacity="0.3" />
          <text x="14" y="22" fontSize="10" fontWeight="bold" fill="#fff" textAnchor="middle" fontFamily="system-ui">C++</text>
        </svg>
      );
    default:
      return (
        <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="4" y="6" width="24" height="20" rx="3" stroke="currentColor" strokeWidth="1.5" fill="none" />
          <path d="M12 14l-3 3 3 3M20 14l3 3-3 3M15 11l-3 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );
  }
}
