import {
  Container,
  TextInput,
  Row,
  FormLabel,
  Section,
  Payment,
} from "./CheckoutForm.styles";
import { useForm } from "react-hook-form";
import { CheckoutInputs } from "types";

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

  return (
    <Container>
      <form onSubmit={handleSubmit(submitForm)} id="payment-form">
        <Section>
          <FormLabel variant="h2">Billing Details</FormLabel>
          <Row>
            <TextInput
              label="First Name"
              variant="outlined"
              error={!!errors.other_names}
              helperText={errors.other_names?.message}
            />
            <TextInput
              label="Last Name"
              variant="outlined"
              {...register("surname")}
              error={!!errors.surname}
              helperText={errors.surname?.message}
            />
          </Row>
          <Row>
            <TextInput
              label="Email"
              variant="outlined"
              type={"email"}
              {...register("email")}
              error={!!errors.email}
              helperText={errors.email?.message}
              sx={{ width: "20rem" }}
            />
            <TextInput
              label="Phone Number"
              variant="outlined"
              type={"tel"}
              {...register("phone")}
              error={!!errors.phone}
              helperText={errors.phone?.message}
            />
          </Row>
          <TextInput
            label="Address"
            variant="outlined"
            {...register("address")}
            error={!!errors.address}
            helperText={errors.address?.message}
            multiline={true}
            rows={2}
            sx={{ width: "20rem" }}
          />
          <TextInput
            label="City"
            variant="outlined"
            {...register("city")}
            error={!!errors.city}
            helperText={errors.city?.message}
          />
        </Section>
        <FormLabel variant="h2">Payment Details</FormLabel>
        <Payment />
      </form>
    </Container>
  );
};
