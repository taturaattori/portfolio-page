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
import FormAlert from "./FormAlert";

const formSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address",
  }),
  message: z.string().min(1, {
    message: "Message cannot be empty",
  }),
});

const EmailForm = () => {
  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState("");

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      message: "",
    },
  });

  const onSubmit = async (data) => {
    try {
      const response = await fetch(process.env.NEXT_PUBLIC_FORM_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        form.reset();
        setAlertType("success");
        setShowAlert(true);

        setTimeout(() => {
          setShowAlert(false);
          setAlertType("");
        }, 5000);
      } else {
        setAlertType("failure");
        setShowAlert(true);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setAlertType("failure");
      setShowAlert(true);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="email">Your email</FormLabel>
              <FormControl>
                <Input {...field} id="email" type="email" />
              </FormControl>
              <FormMessage />
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
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Send message</Button>
        {showAlert && <FormAlert type={alertType} />}
      </form>
    </Form>
  );
};

export default EmailForm;
