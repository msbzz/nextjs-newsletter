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
    handleChange(evento) {
      const { name, value } = evento.target;
      // console.log("name e value => ", name, value);
      setValues({
        ...values,
        [name]: value,
      });
    },
  };
}

export default function NewsletterScrenn() {
  const form = useForm({
    initialValues: {
      emailNewsletter: "",
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
          // validar form  

          //// A validação foi desabilitada no front-end (`newsletter.tsx`) 
          ////e transferida para o back-end (`optin.ts`)
          
          // if (!form.values.emailNewsletter.includes("@")) {
          //   alert("Voce precisa informar um email valido !");
          //   return;
          // }
          alert(
            "Você foi cadastrado com sucesso, cheque seu  email para garantir"
          );
          // enviar dados servidor
          // fetch
          fetch("/api/newsletter/optin", {
            method: "POST",
            headers:{
              "Content-type":"application/json",
            },
            body: JSON.stringify(form.values),
          }).then(async (respostaDoServer) => {
            await console.log(respostaDoServer.json());
          });
          // console.log("Estamos enviado dados do formulario");
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
              marginBottom: "16px",
            }}
          />
          <Text variant="heading4">Newsletter do DevSoutinho</Text>

          <NewsletterTextField
            placeholder="informe seu email"
            name="emailNewsletter"
            value={form.values.emailNewsletter}
            onChange={form.handleChange}
          />
          <Box>
            <Text>Seu email é : {form.values.emailNewsletter}</Text>
          </Box>
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
  name: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function NewsletterTextField(props: NewsletterTextFieldProps) {
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
