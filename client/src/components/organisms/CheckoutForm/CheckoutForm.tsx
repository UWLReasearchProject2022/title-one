import {
  Container,
  TextInput,
  Row,
  FormLabel,
  Section,
  Payment,
  StyledDivider,
  SubText,
} from "./CheckoutForm.styles";
import { AddressField } from "components";
import { useForm } from "react-hook-form";
import { CheckoutInputs, User } from "types";
import { useUserData } from "hooks";

type Props = {
  submitForm: () => void;
};

export const CheckoutForm: React.FunctionComponent<Props> = ({
  submitForm,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CheckoutInputs>();
  const { user } = useUserData();
  const initialUser: User = user
    ? user
    : {
        other_names: "",
        surname: "",
        email: "",
        password: "",
        address: {
          house_number: "",
          road_name: "",
          city: "",
          county: "",
          postcode: "",
        },
      };

  return (
    <Container>
      <form onSubmit={handleSubmit(submitForm)} id="payment-form">
        <Section>
          <FormLabel>Billing Details</FormLabel>
          <StyledDivider />
          <SubText>Your name</SubText>
          <Row>
            <TextInput
              defaultValue={initialUser.other_names}
              size="small"
              label="First Name"
              variant="outlined"
              error={!!errors.other_names}
              helperText={errors.other_names?.message}
            />
            <TextInput
              defaultValue={initialUser.surname}
              size="small"
              label="Last Name"
              variant="outlined"
              {...register("surname")}
              error={!!errors.surname}
              helperText={errors.surname?.message}
            />
          </Row>
          <SubText>Billing address</SubText>
          <Row>
            <TextInput
              defaultValue={initialUser.email}
              size="small"
              label="Email"
              variant="outlined"
              type={"email"}
              {...register("email")}
              error={!!errors.email}
              helperText={errors.email?.message}
            />
          </Row>
          <AddressField
            address={initialUser.address}
            onChange={(_) => {
              console.log();
            }}
          />
        </Section>
        <FormLabel>Payment Details</FormLabel>
        <StyledDivider />
        <Payment />
      </form>
    </Container>
  );
};
