import { Button } from "@chakra-ui/button";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { VStack } from "@chakra-ui/layout";
import { Textarea, useToast, UseToastOptions } from "@chakra-ui/react";
import React, { useCallback, useState } from "react";
import { ContactRequest } from "../types";

/**
 * fetchにリトライ処理を追加した非同期関数
 * @param input
 * @param n リトライ処理の最大回数
 * @param init
 * @returns
 */
async function fetchRetry(input: RequestInfo, n: number, init?: RequestInit): Promise<Response> {
  try {
    return await fetch(input, init);
  } catch (e) {
    if (n === 1) throw e;
    return fetchRetry(input, n - 1, init);
  }
}

export function ContactForm() {
  const toast = useToast();
  const [formData, setFormData] = useState<ContactRequest>({
    name: "",
    companyName: "",
    email: "",
    phoneNumber: "",
    subject: "",
    content: "",
  });

  const addToast = useCallback(
    (status: UseToastOptions["status"], title: string) => {
      return toast({ title, status, isClosable: true });
    },
    [toast]
  );

  const submit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const apiUrl: string = process.env.NEXT_PUBLIC_CONTACT_API || "";
      const method: string = "POST";
      const headers: HeadersInit = {
        "Content-Type": "application/json",
        Accept: "application/json",
      };

      await fetchRetry(apiUrl, 3, { method, headers, body: JSON.stringify(formData) })
        .then((res: Response) => {
          console.log({ status: res.status, body: res.body });
          addToast("success", "送信しました");
        })
        .catch((err: Error) => {
          console.log({ err });
          addToast("error", "送信に失敗しました");
        });
    },
    [addToast, formData]
  );

  const onChangeHandler = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    setFormData((current: ContactRequest) => ({
      ...current,
      [e.target.name]: e.target.value,
    }));
  }, []);

  return (
    <form onSubmit={submit}>
      <VStack>
        <FormControl id="name" isRequired>
          <FormLabel>お名前</FormLabel>
          <Input name="name" placeholder="山田太郎" value={formData.name} onChange={onChangeHandler} />
        </FormControl>

        <FormControl id="company-name" isRequired>
          <FormLabel>会社名</FormLabel>
          <Input name="companyName" placeholder="Calmato" value={formData.companyName} onChange={onChangeHandler} />
        </FormControl>

        <FormControl id="email" isRequired>
          <FormLabel>メールアドレス</FormLabel>
          <Input
            type="email"
            name="email"
            placeholder="info@calmato.jp"
            value={formData.email}
            onChange={onChangeHandler}
          />
        </FormControl>

        <FormControl id="phone-number" isRequired>
          <FormLabel>電話番号</FormLabel>
          <Input
            type="number"
            name="phoneNumber"
            placeholder="08011112222"
            value={formData.phoneNumber}
            onChange={onChangeHandler}
          />
        </FormControl>

        <FormControl id="subject" isRequired>
          <FormLabel>件名</FormLabel>
          <Input name="subject" placeholder="〇〇について" value={formData.subject} onChange={onChangeHandler} />
        </FormControl>

        <FormControl id="content" isRequired>
          <FormLabel>お問い合わせ内容</FormLabel>
          <Textarea name="content" value={formData.content} onChange={onChangeHandler} />
        </FormControl>

        <Button type="submit" colorScheme="teal" variant="outline" size="md">
          送信
        </Button>
      </VStack>
    </form>
  );
}
