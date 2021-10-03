import { Button } from "@chakra-ui/button";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { VStack } from "@chakra-ui/layout";
import { Textarea, useToast, UseToastOptions } from "@chakra-ui/react";
import React, { useState } from "react";
import { SendEmailRequest } from "../types/api";

export function ContactForm() {
  const toast = useToast()
  const toastIdRef: any = React.useRef()
  // form用に新しい型定義作ってもいいかなと思ったけど、いったん types/api のもので定義
  const [formData, setFormData] = useState<SendEmailRequest>({
    name: '',
    companyName: '',
    email: '',
    phoneNumber: '',
    subject: '',
    content: '',
  })

  function addToast(status: UseToastOptions['status'], title: string) {
    // validation check
    toastIdRef.current = toast({ title, status, isClosable: true })
  }

  async function submit() {
    await fetch('/api/sendgrid/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        ...formData,
      }),
    })
      .then(() => {
        addToast('success', '送信しました')
      })
      .catch(() => {
        addToast('error', '送信に失敗しました')
      })
  }

  return (
    <form>
      <VStack>
        <FormControl id="name" isRequired>
          <FormLabel>お名前</FormLabel>
          <Input
            name="name"
            placeholder="山田太郎"
            value={formData.name}
            onChange={(e) => { setFormData({ ...formData, name: e.target.value })}}
          />
        </FormControl>

        <FormControl id="company-name" isRequired>
          <FormLabel>会社名</FormLabel>
          <Input
            name="companyName"
            placeholder="Calmato"
            value={formData.companyName}
            onChange={(e) => { setFormData({ ...formData, companyName: e.target.value })}}
          />
        </FormControl>

        <FormControl id="email" isRequired>
          <FormLabel>メールアドレス</FormLabel>
          <Input
            type="email"
            name="email"
            placeholder="info@calmato.jp"
            value={formData.email}
            onChange={(e) => { setFormData({ ...formData, email: e.target.value })}}
          />
        </FormControl>

        <FormControl id="phone-number" isRequired>
          <FormLabel>電話番号</FormLabel>
          <Input
            type="number"
            name="phoneNumber"
            placeholder="08011112222"
            value={formData.phoneNumber}
            onChange={(e) => { setFormData({ ...formData, phoneNumber: e.target.value })}}
          />
        </FormControl>

        <FormControl id="subject" isRequired>
          <FormLabel>件名</FormLabel>
          <Input
            name="subject"
            placeholder="〇〇について"
            value={formData.subject}
            onChange={(e) => { setFormData({ ...formData, subject: e.target.value })}}
          />
        </FormControl>

        <FormControl id="content" isRequired>
          <FormLabel>お問い合わせ内容</FormLabel>
          <Textarea
            name="content"
            value={formData.content}
            onChange={(e) => { setFormData({ ...formData, content: e.target.value })}}
          />
        </FormControl>
        <Button colorScheme="teal" variant="outline" size="md" onClick={() =>submit()}>送信</Button>
      </VStack>
    </form>
  );
}
