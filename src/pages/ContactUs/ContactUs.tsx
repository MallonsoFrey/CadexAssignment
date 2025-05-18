/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { TextField, Button, Typography } from "@mui/material";
import { useState } from "react";
import { useForm } from "react-hook-form";

const formContainer = css`
  max-width: 600px;
  margin: 2rem auto;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

type FormData = {
  name: string;
  email: string;
  message: string;
};

export default function ContactUs() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const [responseMessage, setResponseMessage] = useState("");

  const onSubmit = async (data: FormData) => {
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();
      setResponseMessage(result.message);
    } catch (error) {
      console.error("Failed to submit form", error);
      setResponseMessage("Something went wrong.");
    }
  };

  if (responseMessage) {
    return (
      <div css={formContainer}>
        <Typography variant="h5" color="primary" align="center">
          {responseMessage}
        </Typography>
      </div>
    );
  }

  return (
    <form css={formContainer} onSubmit={handleSubmit(onSubmit)} noValidate>
      <Typography variant="h4" component="h1">
        Contact Us
      </Typography>

      <TextField
        label="Name"
        fullWidth
        {...register("name", { required: "Name is required" })}
        error={!!errors.name}
        helperText={errors.name?.message}
      />

      <TextField
        label="Email"
        type="email"
        fullWidth
        {...register("email", {
          required: "Email is required",
          pattern: {
            value: /^\S+@\S+$/i,
            message: "Invalid email format",
          },
        })}
        error={!!errors.email}
        helperText={errors.email?.message}
      />

      <TextField
        label="Message"
        fullWidth
        multiline
        rows={4}
        {...register("message", { required: "Message is required" })}
        error={!!errors.message}
        helperText={errors.message?.message}
      />

      <Button type="submit" variant="contained" color="primary">
        Send
      </Button>
    </form>
  );
}
