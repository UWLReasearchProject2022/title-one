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
          <FormLabel>Billing Details</FormLabel>
          <Row>
            <TextInput
              size="small"
              label="First Name"
              variant="outlined"
              error={!!errors.other_names}
              helperText={errors.other_names?.message}
            />
            <TextInput
              size="small"
              label="Last Name"
              variant="outlined"
              {...register("surname")}
              error={!!errors.surname}
              helperText={errors.surname?.message}
            />
          </Row>
          <Row>
            <TextInput
              size="small"
              label="Email"
              variant="outlined"
              type={"email"}
              {...register("email")}
              error={!!errors.email}
              helperText={errors.email?.message}
            />
          </Row>
          <TextInput
            label="Address"
            variant="outlined"
            size="small"
            {...register("address")}
            error={!!errors.address}
            helperText={errors.address?.message}
            multiline={true}
            rows={2}
          />
          <TextInput
            label="City"
            variant="outlined"
            size="small"
            {...register("city")}
            error={!!errors.city}
            helperText={errors.city?.message}
          />
        </Section>
        <FormLabel>Payment Details</FormLabel>
        <Payment />
      </form>
    </Container>
  );
};
