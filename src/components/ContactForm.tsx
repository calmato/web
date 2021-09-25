import { Button } from "@chakra-ui/button";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { VStack } from "@chakra-ui/layout";
import { Textarea } from "@chakra-ui/react";
import React from "react";

export function ContactForm() {
  return (
    <form>
      <VStack>
        <FormControl id="name" isRequired>
          <FormLabel>お名前</FormLabel>
          <Input placeholder="山田太郎" name="name" />
        </FormControl>

        <FormControl id="subject" isRequired>
          <FormLabel>件名</FormLabel>
          <Input placeholder="〇〇について" name="subject" />
        </FormControl>

        <FormControl id="company-name" isRequired>
          <FormLabel>会社名</FormLabel>
          <Input placeholder="Calmato" name="companyName" />
        </FormControl>

        <FormControl id="email" isRequired>
          <FormLabel>メールアドレス</FormLabel>
          <Input placeholder="info@calmato.jp" type="email" name="email" />
        </FormControl>

        <FormControl id="phone-number" isRequired>
          <FormLabel>電話番号</FormLabel>
          <Input placeholder="08011112222" type="number" name="phoneNumber" />
        </FormControl>

        <FormControl id="body" isRequired>
          <FormLabel>お問い合わせ内容</FormLabel>
          <Textarea name="body"></Textarea>
        </FormControl>
        <Button type="submit">送信</Button>
      </VStack>
    </form>
  );
}
