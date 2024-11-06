type ErrorMessageProps = {
  message?: string;
};

const ErrorMessage = ({ message }: ErrorMessageProps) => {
  return (
    message && (
      <>
        <p className="w-fit bg-blue-100 text-xs font-semibold">{message}</p>
      </>
    )
  );
};

export default ErrorMessage;
