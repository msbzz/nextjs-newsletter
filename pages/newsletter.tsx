import Box from "@src/components/Box/Box";
import Button from "@src/components/Button/Button";
import Image from "@src/components/Image/Image";
import Text from "@src/components/Text/Text";
// import Form from "@src/components/Form/Form";

import { BaseComponent } from "@src/theme/BaseComponent";
import React from "react";

function useForm({ initialValues }) {
  const [values, setValues] = React.useState(initialValues);
  return {
    values,
    handleChange(evento){
      const{name,value} = evento.target;  
      console.log('name e value => ',name,value)
      setValues({
        ...values,
        [name]:value,
      })
    }
  };
}

export default function NewsletterScrenn() {
  
  const form = useForm({
    initialValues: {
      email: "",
      
    },
  });

  return (
    <Box
      styleSheet={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <form
        onSubmit={(event) => {
          event.preventDefault();
          console.log("Estamos enviado dados do formulario");
        }}
      >
        <Box
          styleSheet={{
            alignItems: "center",
            width: "100%",
            maxWidth: "400px",
            padding: "16px",
          }}
        >
          <Image
            src="https://github.com/omariosouto.png"
            alt="Foto do dev soutinho"
            styleSheet={{
              borderRadius: "100%",
              width: "100px",
              marginTop: "16px",
              marginBotton: "16px",
            }}
          />
          <Text variant="heading4">Newsletter do DevSoutinho</Text>

          <NewsletterTextField 
          placeholder="informe seu email" 
          name='email'
          value={form.values.email}
          onChange={form.handleChange}
          />

          <Button fullWidth styleSheet={{ marginTop: "16px" }}>
            Cadastrar
          </Button>
        </Box>
      </form>
    </Box>
  );
}

interface NewsletterTextFieldProps {
  placeholder?: string;
  name:string
  value?:string;
  onChange?:(event:React.ChangeEvent<HTMLInputElement>)=> void;
}

function NewsletterTextField(
  props: NewsletterTextFieldProps,
) {
  return (
    <Box
      styleSheet={{
        maxWidth: "300px",
        width: "100%",
      }}
    >
      <BaseComponent
        as="input"
        {...props}
        styleSheet={{
          border: "1px solid rgb(195,195,195)",
          borderRadius: "4px",
          padding: "8px",
          width: "100%",
        }}
      />
    </Box>
  );
}
