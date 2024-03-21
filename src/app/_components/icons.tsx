interface SvgComponentProps {
  color?: string;
  className: string;
  path: string;
  secondPath?: string;
}

interface IconProps {
  color?: string;
  className: string;
}

function SvgComponent(props: SvgComponentProps) {
  return (
    <svg
      fill="none"
      strokeWidth={1}
      viewBox="0 0 24 24"
      className={props.className}
      xmlns="http://www.w3.org/2000/svg"
      stroke={props.color ?? "currentColor"}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d={props.path} />
      {props.secondPath && (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d={props.secondPath}
        />
      )}
    </svg>
  );
}

export function SearchIcon({ className, color }: IconProps) {
  return (
    <SvgComponent
      color={color}
      className={className}
      path="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
    />
  );
}
export function CloseIcon({ className, color }: IconProps) {
  return (
    <SvgComponent
      color={color}
      className={className}
      path="M6 18 18 6M6 6l12 12"
    />
  );
}

export function MenuIcon({ className, color }: IconProps) {
  return (
    <SvgComponent
      color={color}
      className={className}
      path="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
    />
  );
}

export function PhoneIcon({ className, color }: IconProps) {
  return (
    <SvgComponent
      color={color}
      className={className}
      path="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
    />
  );
}

export function MailIcon({ className, color }: IconProps) {
  return (
    <SvgComponent
      color={color}
      className={className}
      path="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
    />
  );
}
