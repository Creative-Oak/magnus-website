// components/Icons.tsx
import { h } from "preact";

interface IconProps {
  class?: string;
}

export function IconWorkshop({ class: className }: { class?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      class={className}
    >
      <path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5C8.24 12.26 8.71 13.02 8.91 14" />
      <line x1="9" y1="18" x2="15" y2="18" />
      <line x1="10" y1="22" x2="14" y2="22" />
    </svg>
  );
}

export function IconConsulting({ class: className }: { class?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      class={className}
    >
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      <polyline points="7.5 4.21 12 6.81 16.5 4.21" />
      <polyline points="7.5 19.79 7.5 14.6 3 12" />
      <polyline points="21 12 16.5 14.6 16.5 19.79" />
      <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
      <line x1="12" y1="22.08" x2="12" y2="12" />
    </svg>
  );
}

export function IconTarget({ class: className }: { class?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      class={className}
    >
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  );
}

export function IconEmail({ class: className }: IconProps) {
  return (
    <svg
      class={className}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );
}

export function IconLocation({ class: className }: IconProps) {
  return (
    <svg
      class={className}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}

export function IconChat({ class: className }: IconProps) {
  return (
    <svg
      class={className}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
    </svg>
  );
}

export function IconUXDesign({ class: className }: IconProps) {
  return (
    <svg
      class={className}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 100 100"
      fill="currentColor"
      stroke="none"
    >
      <path d="m31.25 74.137 42.887-42.887-9.5547-9.5547-42.887 42.887zm14.582-8.6914-13.109 13.109-0.69922 0.46484-20.832 8.332c-1.7031 0.67969-3.3906-1.0078-2.7109-2.707l8.3359-20.836 0.46094-0.69922 13.109-13.109-21.441-21.445c-0.81641-0.8125-0.81641-2.1328 0-2.9453l16.664-16.664c0.8125-0.81641 2.1328-0.81641 2.9453 0l21.445 21.441 20.223-20.223c2.4414-2.4414 6.4023-2.4414 8.8398 0l6.6055 6.6055c2.4453 2.4414 2.4453 6.3984 0 8.8398l-20.223 20.223 21.445 21.445c0.8125 0.8125 0.8125 2.1328 0 2.9453l-16.668 16.668c-0.8125 0.8125-2.1328 0.8125-2.9453 0zm2.9492-2.9453 19.969 19.969 13.719-13.719-5.3867-5.3867-2.6914 2.6914c-1.9648 1.9648-4.9102-0.98047-2.9453-2.9453l2.6914-2.6914-5.3867-5.3867-6.8594 6.8594c-1.9648 1.9648-4.9102-0.98438-2.9453-2.9453l6.8594-6.8633-3.3047-3.3008zm-15.449-15.445 13.723-13.723-3.3047-3.3008-2.6953 2.6914c-1.9609 1.9648-4.9102-0.98047-2.9453-2.9453l2.6953-2.6953-5.3867-5.3867-6.8633 6.8594c-1.9609 1.9648-4.9102-0.98047-2.9453-2.9453l6.8594-6.8594-5.3867-5.3867-13.719 13.719zm-5.7891 29.27-8.0312-8.0352-5.3555 13.387zm39.988-57.574 9.5508 9.5547 5.6406-5.6406c0.81641-0.81641 0.81641-2.1328 0-2.9453l-6.6094-6.6094c-0.8125-0.8125-2.1289-0.8125-2.9453 0z" />
    </svg>
  );
}

export function IconPresentation({ class: className }: IconProps) {
  return (
    <svg
      class={className}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 1200 1200"
      fill="currentColor"
      stroke="none"
    >
      <path
        xmlns="http://www.w3.org/2000/svg"
        d="m295.13 751.08h32.578l43.734 340.64c5.1562 40.359 39.797 70.828 80.484 70.828h296.06c40.688 0 75.328-30.469 80.484-70.781l43.734-340.64h32.578c44.766 0 81.141-36.375 81.141-81.141v-30.797c0-44.766-36.375-81.141-81.141-81.141h-56.156c-1.1719-107.34-70.641-198.42-166.97-232.08 44.391-27.516 74.156-76.5 74.156-132.47 0-85.969-69.938-155.9-155.9-155.9-85.969 0-155.9 69.938-155.9 155.9 0 55.969 29.719 105 74.156 132.47-96.281 33.656-165.79 124.69-166.97 232.08h-56.156c-44.766 0-81.141 36.375-81.141 81.141v30.797c0 44.766 36.375 81.141 81.141 81.141zm496.22 335.86c-2.7656 21.703-21.375 38.062-43.312 38.062h-296.06c-21.891 0-40.5-16.359-43.312-38.062l-43.125-335.86h468.94zm-309.74-893.53c0-65.297 53.109-118.41 118.41-118.41 65.25 0 118.41 53.109 118.41 118.41 0 65.25-53.109 118.41-118.41 118.41-65.25 0-118.41-53.109-118.41-118.41zm118.41 155.9c115.64 0 209.9 93.375 211.36 208.64h-422.72c1.4531-115.31 95.719-208.64 211.36-208.64zm-348.52 289.82c0-24.094 19.594-43.641 43.641-43.641h609.74c24.094 0 43.641 19.594 43.641 43.641v30.797c0 24.094-19.594 43.641-43.641 43.641l-609.74-0.046875c-24.094 0-43.641-19.594-43.641-43.641v-30.797z"
      />
    </svg>
  );
}

export function IconAI({ class: className }: IconProps) {
  return (
    <svg
      class={className}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 1200 1200"
      fill="currentColor"
      stroke="none"
    >
      <path d="m1081.7 610.18c-192.47-53.156-229.45-90.141-282.56-282.56-3-10.828-12.844-18.328-24.094-18.328s-21.094 7.5-24.094 18.328c-53.109 192.42-90.094 229.4-282.56 282.56-10.828 3-18.328 12.844-18.328 24.094s7.5 21.094 18.328 24.094c192.47 53.109 229.4 90.094 282.56 282.56 3 10.828 12.844 18.328 24.094 18.328s21.094-7.5 24.094-18.328c53.156-192.47 90.094-229.4 282.56-282.56 10.828-3 18.328-12.844 18.328-24.094s-7.5-21.094-18.328-24.094z" />
      <path d="m210.47 336.61c117.09 32.344 137.76 53.016 170.06 170.06 3 10.828 12.891 18.328 24.094 18.328s21.141-7.5 24.094-18.328c32.297-117.05 52.969-137.72 170.06-170.06 10.828-3 18.328-12.844 18.328-24.094s-7.5-21.094-18.328-24.094c-117.09-32.344-137.76-53.016-170.06-170.06-2.9531-10.828-12.844-18.328-24.094-18.328s-21.094 7.5-24.094 18.328c-32.344 117.09-53.016 137.72-170.06 170.06-10.828 3-18.328 12.844-18.328 24.094s7.5 21.094 18.328 24.094z" />
      <path d="m531.66 850.92c-124.36-34.312-148.26-58.219-182.58-182.53-3-10.828-12.844-18.328-24.094-18.328s-21.094 7.5-24.094 18.328c-34.312 124.31-58.219 148.22-182.58 182.53-10.828 3-18.328 12.844-18.328 24.094s7.5 21.094 18.328 24.094c124.36 34.359 148.26 58.219 182.58 182.53 3 10.828 12.844 18.328 24.094 18.328s21.094-7.5 24.094-18.328c34.312-124.36 58.219-148.22 182.58-182.53 10.828-3 18.328-12.844 18.328-24.094s-7.5469-21.094-18.328-24.094z" />
    </svg>
  );
}

export function IconCode({ class: className }: IconProps) {
  return (
    <svg
      class={className}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}

export function IconArchitecture({ class: className }: IconProps) {
  return (
    <svg
      class={className}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 100 100"
      fill="currentColor"
      stroke="none"
    >
      <path d="m88.262 50c0-0.71094-0.41406-1.3555-1.0586-1.6484l-20.664-9.4336 6.6289-3.0273c0.91016-0.41406 1.3125-1.4922 0.89453-2.4023-0.41406-0.91016-1.4883-1.3086-2.4023-0.89453l-8.3789 3.8281c-0.32422 0.14844-0.58203 0.38281-0.76562 0.66406l-11.766-5.3711c-0.47656-0.21875-1.0273-0.21875-1.5039 0l-11.766 5.3711c-0.17969-0.28125-0.4375-0.51563-0.76172-0.66406l-8.3789-3.8281c-0.91016-0.41406-1.9844-0.015625-2.4023 0.89453-0.41406 0.91016-0.015625 1.9844 0.89453 2.4023l6.6289 3.0273-20.664 9.4336c-0.64453 0.29297-1.0586 0.9375-1.0586 1.6484s0.41406 1.3555 1.0586 1.6484l20.664 9.4336-20.664 9.4336c-0.64453 0.29297-1.0586 0.9375-1.0586 1.6484 0 0.71094 0.41406 1.3555 1.0586 1.6484l36.449 16.645c0.23828 0.10938 0.49609 0.16406 0.75391 0.16406s0.51562-0.054688 0.75391-0.16406l36.449-16.645c0.64453-0.29297 1.0586-0.9375 1.0586-1.6484 0-0.71094-0.41406-1.3555-1.0586-1.6484l-20.664-9.4336 20.664-9.4336c0.64453-0.29297 1.0586-0.9375 1.0586-1.6484zm-6.1758 22.168-32.086 14.652-32.082-14.652 19.91-9.0898 11.422 5.2148c0.23828 0.10938 0.49609 0.16406 0.75391 0.16406 0.25781 0 0.51562-0.054687 0.75391-0.16406l11.422-5.2148 19.91 9.0898zm-32.086-7.5195-32.082-14.648 32.082-14.648 32.086 14.648zm-7.3047-50.129c-0.41406-0.91016-0.015624-1.9844 0.89453-2.4023l5.6562-2.582c0.47656-0.21875 1.0273-0.21875 1.5039 0l5.6562 2.582c0.91016 0.41406 1.3125 1.4922 0.89453 2.4023-0.30469 0.66797-0.96094 1.0586-1.6484 1.0586-0.25 0-0.50781-0.050781-0.75-0.16406l-4.9023-2.2383-4.9023 2.2383c-0.91016 0.41406-1.9844 0.015626-2.4023-0.89453zm-16.758 7.6562c-0.41406-0.91016-0.015625-1.9883 0.89453-2.4023l8.3789-3.8281c0.91406-0.41406 1.9883-0.015624 2.4023 0.89453 0.41406 0.91016 0.015625 1.9883-0.89453 2.4023l-8.3789 3.8281c-0.24609 0.10938-0.5 0.16406-0.75391 0.16406-0.6875 0-1.3438-0.39453-1.6484-1.0586zm-14.199 5.6562c0-0.71094 0.41406-1.3555 1.0586-1.6484l5.6562-2.582c0.91016-0.41406 1.9844-0.015624 2.4023 0.89453 0.41406 0.91016 0.015625 1.9844-0.89453 2.4023l-2.043 0.93359 2.043 0.93359c0.91016 0.41406 1.3125 1.4922 0.89453 2.4023-0.30469 0.66797-0.96094 1.0586-1.6484 1.0586-0.25391 0-0.50781-0.050781-0.75-0.16406l-5.6562-2.582c-0.64453-0.29297-1.0586-0.9375-1.0586-1.6484zm38.262 14.648 4.9023-2.2383c0.91016-0.41406 1.9844-0.015626 2.4023 0.89453 0.41406 0.91016 0.015624 1.9844-0.89453 2.4023l-5.6562 2.582c-0.23828 0.10938-0.49609 0.16406-0.75391 0.16406s-0.51562-0.054687-0.75391-0.16406l-5.6562-2.582c-0.91016-0.41406-1.3125-1.4922-0.89453-2.4023 0.41406-0.91016 1.4922-1.3125 2.4023-0.89453zm30.043-13.719 2.043-0.93359-2.043-0.93359c-0.91016-0.41406-1.3125-1.4922-0.89453-2.4023 0.41406-0.91016 1.4922-1.3125 2.4023-0.89453l5.6562 2.582c0.64453 0.29297 1.0586 0.9375 1.0586 1.6484s-0.41406 1.3555-1.0586 1.6484l-5.6562 2.582c-0.24219 0.10938-0.5 0.16406-0.75 0.16406-0.6875 0-1.3438-0.39453-1.6484-1.0586-0.41406-0.91016-0.015625-1.9844 0.89453-2.4023zm-17.656-11.922c0.41406-0.91016 1.4922-1.3125 2.4023-0.89453l8.3789 3.8281c0.91016 0.41406 1.3125 1.4922 0.89453 2.4023-0.30469 0.66797-0.96094 1.0586-1.6484 1.0586-0.25391 0-0.50781-0.050781-0.75-0.16406l-8.3789-3.8281c-0.91016-0.41406-1.3125-1.4922-0.89453-2.4023z" />
    </svg>
  );
}

export function IconTwitter({ class: className }: IconProps) {
  return (
    <svg
      class={className}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
}

export function IconLinkedIn({ class: className }: IconProps) {
  return (
    <svg
      class={className}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export function IconGithub({ class: className }: IconProps) {
  return (
    <svg
      class={className}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
  );
}

export function IconCalendar({ class: className }: IconProps) {
  return (
    <svg
      class={className}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );
}

export function IconUsers({ class: className }: IconProps) {
  return (
    <svg
      class={className}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

export function IconLightbulb({ class: className }: IconProps) {
  return (
    <svg
      class={className}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <line x1="9" y1="18" x2="15" y2="18" />
      <line x1="10" y1="22" x2="14" y2="22" />
      <path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5C8.24 12.26 8.71 13.02 8.91 14" />
    </svg>
  );
}

export function IconArrowRight({ class: className }: IconProps) {
  return (
    <svg
      class={className}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

export function IconClock({ class: className }: IconProps) {
  return (
    <svg
      class={className}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}
