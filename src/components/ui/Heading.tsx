interface Props {
  children: React.ReactNode;
  variant: string;
  className?: string;
}

const Heading = ({ children, className, variant }: Props) => {
  switch (variant) {
    case 'h1':
      return (
        <h1 className={`text-5xl font-semibold ${className}`}>{children}</h1>
      );
    case 'h2':
      return (
        <h2 className={`text-3xl font-semibold ${className}`}>{children}</h2>
      );
    case 'h3':
      return (
        <h3 className={`text-2xl font-semibold ${className}`}>{children}</h3>
      );
    case 'h4':
      return (
        <h4 className={`text-xl font-semibold ${className}`}>{children}</h4>
      );
    case 'h5':
      return (
        <h5 className={`text-lg font-semibold ${className}`}>{children}</h5>
      );
    case 'h6':
      return <h6 className={`font-semibold ${className}`}>{children}</h6>;
    default:
      return <h2>Incompatible heading variant</h2>;
  }
};

export default Heading;
