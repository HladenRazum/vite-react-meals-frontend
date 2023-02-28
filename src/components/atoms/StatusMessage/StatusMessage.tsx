type StatusMessageProps = {
   message: string;
   type: "success" | "error";
};

const StatusMessage: React.FC<StatusMessageProps> = ({ type, message }) => {
   return (
      <span className="test">
         <span>{type === "error" ? "ErrorIcon" : "SuccessIcon"}</span>
         <p>{message}</p>
      </span>
   );
};

export default StatusMessage;
