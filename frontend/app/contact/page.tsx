"use client";
import {
  Center,
  Container,
  Grid,
  GridCol,
  Notification,
  Paper,
  Title,
  Text,
  Space,
  TextInput,
  Textarea,
  Button,
  useMantineTheme,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import Image from "next/image";
import { IconMessages, IconCheck, IconX } from "@tabler/icons-react";
import { useState } from "react";

// Contact page component
const ContactUs = () => {
  const theme = useMantineTheme();
  const largeRadius = theme.radius.lg;
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  const imageStyle = {
    borderRadius: largeRadius,
    display: "block",
    overflow: "hidden",
    objectFit: "cover" as const,
  };

  // Form setup and validation
  const form = useForm({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validate: {
      name: (value) => (value.trim().length < 2 ? "Name is too short" : null),
      email: (value) => (!/^\S+@\S+$/.test(value) ? "Invalid email" : null),
      message: (value) =>
        value.trim().length < 10 ? "Message is too short" : null,
    },
  });

  // Handle form submission
  const handleSubmit = async (values: {
    name: string;
    email: string;
    message: string;
  }) => {
    setIsSubmitting(true);
    setSubmitStatus(null);
    console.log("Attempting to send form:", values);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        let errorMessage = `HTTP error! Status: ${response.status}`;
        try {
          const errorData = await response.json();
          errorMessage = errorData.error || errorMessage;
        } catch (error) {
          console.error("Response Error:", error);
        }
        throw new Error(errorMessage);
      }
      console.log("Form submitted successfully");
      setSubmitStatus({
        type: "success",
        message: "Message sent successfully!",
      });
      form.reset();
    } catch (error) {
      console.error("Failed to submit form:", error);
      const message =
        error instanceof Error
          ? error.message
          : "An unknown error occurred. Please try again.";
      setSubmitStatus({
        type: "error",
        message: `Failed to send message: ${message}`,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Container
      fluid
      style={{
        paddingLeft: 0,
        paddingRight: 0,
        overflow: "hidden",
      }}
    >
      {/* Header section with terracotta background */}
      <Space bg="terracotta" h="xl" />
      <Space bg="terracotta" h="xl" />
      <Grid bg="terracotta" align="center" gutter="xl">
        {/* ... (Header Grid content remains unchanged) ... */}
        <GridCol span={{ base: 12, md: 6 }}>
          <Title order={1} ta="center" c="offwhite">
            Contact us
          </Title>
        </GridCol>
        <GridCol span={{ base: 12, md: 6 }}>
          <Text c="offwhite" ta="justify" size="xl" px="xl">
            Have questions? We&apos;d love to hear from you. Send us a message
            and we&apos;ll respond as soon as we can!
          </Text>
        </GridCol>
      </Grid>
      <Space bg="terracotta" h="xl" />
      <Space bg="terracotta" h="xl" />

      {/* Spacing between sections */}
      <Space h="xl" />
      <Space h="xl" />

      {/* Contact Form and Image */}
      <Grid align="flex-start" gutter="xl" px="xl">
        <GridCol span={{ base: 12, md: 6 }}>
          <Paper p="lg" radius="lg" withBorder bd="2px solid wood">
            {submitStatus && (
              <Notification
                icon={
                  submitStatus.type == "success" ? <IconCheck /> : <IconX />
                }
                color={submitStatus.type == "success" ? "teal" : "red"}
                title={submitStatus.type == "success" ? "Success!" : "Error"}
                onClose={() => setSubmitStatus(null)}
                mb="md"
              >
                {submitStatus.message}
              </Notification>
            )}
            <form onSubmit={form.onSubmit(handleSubmit)}>
              <TextInput
                label="Name"
                placeholder="Your name"
                mb="md"
                required
                disabled={isSubmitting}
                {...form.getInputProps("name")}
              />
              <TextInput
                label="Email"
                placeholder="your@email.com"
                mb="md"
                required
                type="email"
                disabled={isSubmitting}
                {...form.getInputProps("email")}
              />
              <Textarea
                label="Message"
                placeholder="Your message"
                minRows={4}
                mb="xl"
                required
                disabled={isSubmitting}
                {...form.getInputProps("message")}
              />
              <Center>
                <Button
                  type="submit"
                  bg="offwhite"
                  c="wood"
                  bd="2px solid wood"
                  radius="lg"
                  w="75%"
                  leftSection={<IconMessages />}
                  className="standard-button"
                  loading={isSubmitting}
                  disabled={isSubmitting}
                >
                  Send Message
                </Button>
              </Center>
            </form>
          </Paper>
        </GridCol>
        <GridCol span={{ base: 12, md: 6 }}>
          <Center>
            <Image
              src="/images/contact/contact_us.webp"
              width={600}
              height={400}
              alt="Stylized image representing communication or contact"
              style={imageStyle}
            />
          </Center>
        </GridCol>
      </Grid>

      {/* Bottom spacing */}
      <Space h="xl" />
      <Space h="xl" />
    </Container>
  );
};

export default ContactUs;
