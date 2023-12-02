const Icon: React.FC<{
  children: React.ReactNode;
  size?: number;
}> = ({ children, size = 24 }) => {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      {children}
    </svg>
  );
};

export const HomeIcon: React.FC<{
  size?: number;
}> = ({ size }) => {
  return (
    <Icon size={size}>
      <path
        d="M3 9.5L12 2L21 9.5V20C21 20.2652 20.8946 20.5196 20.7071 20.7071C20.5196 20.8946 20.2652 21 20 21H4C3.73478 21 3.48043 20.8946 3.29289 20.7071C3.10536 20.5196 3 20.2652 3 20V9.5Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M9 21V12H15V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </Icon>
  );
};

export const CloseIcon: React.FC<{
  size?: number;
}> = ({ size }) => {
  return (
    <Icon size={size}>
      <path d="M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </Icon>
  );
};

export const MinimizeIcon: React.FC<{
  size?: number;
}> = ({ size }) => {
  return (
    <Icon size={size}>
      <path d="M18 13H6V11H18V13Z" fill="currentColor" />
    </Icon>
  );
};

export const MaximizeIcon: React.FC<{
  size?: number;
}> = ({ size }) => {
  return (
    <Icon size={size}>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M4 4H20V20H4V4ZM6 6V18H18V6H6Z" fill="currentColor" />
    </Icon>
  );
};
