import { Alert, AlertTitle, AlertDescription } from "./ui/alert";

const FormAlert = ({ type }) => {
  if (type === "success") {
    return (
      <Alert>
        <AlertTitle>Success!</AlertTitle>
        <AlertDescription>
          Thank you. Your message was sent successfully.
        </AlertDescription>
      </Alert>
    );
  } else if (type === "failure") {
    return (
      <Alert>
        <AlertTitle>Oh no!</AlertTitle>
        <AlertDescription>
          Failed to send message. Please try again.
        </AlertDescription>
      </Alert>
    );
  } else {
    <></>;
  }
};

export default FormAlert;
