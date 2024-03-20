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
