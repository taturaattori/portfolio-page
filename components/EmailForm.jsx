"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "./ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Alert, AlertDescription, AlertTitle } from "./ui/alert";

const formSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address",
  }),
  message: z.string().min(1, {
    message: "Message cannot be empty",
  }),
});

// TODO: create a seperate alert component and a alert for error messages
const FormAlert = () => {
  return (
    <Alert>
      <AlertTitle>Success!</AlertTitle>
      <AlertDescription> Your message was sent successfully.</AlertDescription>
    </Alert>
  );
};

const EmailForm = () => {
  const [showAlert, setShowAlert] = useState(false);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      message: "",
    },
  });

  const onSubmit = (data) => {
    console.log(data);
    setShowAlert(true);
    form.reset();

    setTimeout(() => {
      setShowAlert(false);
    }, 5000);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        {showAlert && <FormAlert />}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="email">Your email</FormLabel>
              <FormControl>
                <Input {...field} id="email" type="email" />
              </FormControl>
              <FormMessage {...form.formState.errors} name="email" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="message">Message</FormLabel>
              <FormControl>
                <Textarea {...field} id="message" />
              </FormControl>
              <FormMessage {...form.formState.errors} name="message" />
            </FormItem>
          )}
        />
        <Button type="submit">Send message</Button>
      </form>
    </Form>
  );
};

export default EmailForm;
