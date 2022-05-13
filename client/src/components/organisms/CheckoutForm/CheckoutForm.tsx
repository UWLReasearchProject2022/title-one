import React, { useState, useEffect } from "react";
import {
  Container,
  TextInput,
  Row,
  FormLabel,
  Section,
  Payment,
  StyledDivider,
  SubText,
  SplitInput,
  ErrorContainer,
  ErrorText,
  HelperText,
} from "./CheckoutForm.styles";
import { AddressField, AddressErrors } from "components";
import { Address, User } from "types";
import { useUserData } from "hooks";
import { isBlank, validateEmail } from "utils/helpers";

type Props = {
  submitForm: (_: User) => void;
};

type FormErrors = {
  payment: boolean;
  other_names: string;
  surname: string;
  email: string;
  address: AddressErrors;
};

export const CheckoutForm: React.FunctionComponent<Props> = ({
  submitForm,
}) => {
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
  const [formData, setFormData] = useState<User>(initialUser);

  const initialErrors = {
    payment: false,
    other_names: " ",
    surname: " ",
    email: " ",
    address: {
      house_number: " ",
      road_name: " ",
      city: " ",
      county: " ",
      postcode: " ",
    },
  };
  const [formErrors, setFormErrors] = useState<FormErrors>(initialErrors);
  const [paymentComplete, setPaymentComplete] = useState<boolean>(false);

  useEffect(() => {
    user && setFormData(user);
  }, [user]);

  const updateValue = (key: keyof User, data: string | Address) => {
    if (key !== "user_id") {
      const newValue = { ...formData };
      if (key === "address") {
        newValue.address = data as Address;
      } else {
        newValue[key] = data as string;
      }
      setFormData(newValue);
    }
  };

  const errorsExist = (errors: FormErrors): boolean => {
    let errorFound = false;
    (Object.keys(errors) as (keyof FormErrors)[]).map((key) => {
      const error = errors[key];
      if (key === "address") {
        Object.values(errors.address).forEach((addressValue) => {
          if (addressValue !== " ") {
            errorFound = true;
          }
        });
      } else if (key === "payment") {
        if (error) {
          errorFound = true;
        }
      } else if (error !== " ") {
        errorFound = true;
      }
    });
    return errorFound;
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newFormErrors = {
      payment: paymentComplete,
      other_names: isBlank(formData.other_names) ? "Please complete" : " ",
      surname: isBlank(formData.surname) ? "Please complete" : " ",
      email: !validateEmail(formData.email) ? "Invalid email" : " ",
      address: {
        house_number: isBlank(formData.address.house_number)
          ? "Please complete"
          : " ",
        road_name: isBlank(formData.address.road_name)
          ? "Please complete"
          : " ",
        city: isBlank(formData.address.city) ? "Please complete" : " ",
        county: isBlank(formData.address.county) ? "Please complete" : " ",
        postcode: isBlank(formData.address.postcode) ? "Please complete" : " ",
      },
    };

    setFormErrors(newFormErrors);

    if (!errorsExist(newFormErrors)) {
      submitForm(formData);
    }
  };

  return (
    <Container>
      <form onSubmit={handleSubmit} id="payment-form">
        <Section>
          <FormLabel>Billing Details</FormLabel>
          <StyledDivider />
          <SubText>Your name</SubText>
          <Row>
            <SplitInput
              value={formData.other_names}
              onChange={(event) =>
                updateValue("other_names", event.target.value)
              }
              size="small"
              label="First Name"
              variant="outlined"
              error={formErrors.other_names !== " "}
              helperText={formErrors.other_names}
            />
            <SplitInput
              value={formData.surname}
              onChange={(event) => updateValue("surname", event.target.value)}
              size="small"
              label="Last Name"
              variant="outlined"
              error={formErrors.surname !== " "}
              helperText={formErrors.surname}
            />
          </Row>
          <SubText>Contact details</SubText>
          <Row>
            <TextInput
              value={formData.email}
              onChange={(event) => updateValue("email", event.target.value)}
              size="small"
              label="Email"
              variant="outlined"
              error={formErrors.email !== " "}
              helperText={formErrors.email}
            />
          </Row>
          <SubText>Shipping address</SubText>
          <AddressField
            style={{ marginBottom: "0.25rem" }}
            address={formData.address}
            onChange={(newAddress) => updateValue("address", newAddress)}
            errors={formErrors.address}
          />
        </Section>
        <FormLabel>Payment Details</FormLabel>
        <StyledDivider />
        <Payment onChange={(event) => setPaymentComplete(!event.complete)} />
        <HelperText color="secondary">
          *For testing use card details: 5555 5555 5555 4444 - 01/23 - 100
        </HelperText>
        <ErrorContainer>
          {formErrors.payment && <ErrorText>Please complete</ErrorText>}
        </ErrorContainer>
      </form>
    </Container>
  );
};
