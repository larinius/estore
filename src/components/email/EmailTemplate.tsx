import { Html, Heading, Text } from "@react-email/components";

const EmailTemplate = ({
  name,
  email,
  phone,
  message,
}: {
  name: string;
  email: string;
  phone: string;
  message: string[];
}) => {
  return (
    <Html lang="en">
      <Heading as="h1">New order</Heading>

      <Text>Customer: {name}</Text>
      <Text>Email: {email}</Text>
      <Text>Phone: {phone}</Text>
      <Text>Products:</Text>
      {message.map((item: string, index: number) => (
        <Text key={index}>{item}</Text>
      ))}
    </Html>
  );
};

export default EmailTemplate;
