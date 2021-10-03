import { NextApiRequest, NextApiResponse } from 'next'
import moment from 'moment'
import sgMail, { MailDataRequired, ResponseError } from '@sendgrid/mail'
import { SendEmailRequest } from '../../../types/api'

const errSendgrid = 'sendgrid error'
const errUnknown = 'unknown error'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // 問い合わせ用のメール送信しか実装しないため、POST送信以外はエラーで返す
  if (req.method !== 'POST') {
    const err = new Error('api: unimplemented')
    res.status(501).send(err)
    return
  }

  const apiKey: string = process.env.SENDGRID_API_KEY || ''
  if (apiKey === '') {
    const err = new Error('api: invalid sendgrid api key')
    res.status(400).send(err)
    return
  }

  sgMail.setApiKey(apiKey)
  const msg: MailDataRequired = newSendgridMessage(req.body)

  try {
    const out = await sgMail.send(msg)
    res.status(200).send({})
  } catch (err) {
    if (err instanceof ResponseError) {
      res.status(500).send({ message: errSendgrid, detail: err.response.body })
      return
    }

    res.status(500).send({ message: errUnknown, detail: err })
  }
}

function newSendgridMessage(body: SendEmailRequest): MailDataRequired {
  const now: moment.Moment = moment()
  const email: string = process.env.SENDGRID_EMAIL || ''
  return {
    to: body.email,
    bcc: email,
    from: email,
    subject: newSubject(),
    text: newContentWithText(body, now),
    html: newContentWithHTML(body, now),
  }
}

function newSubject(): string {
  return `[Calmato] お問い合わせありがとうございます`
}

function newContentWithText(body: SendEmailRequest, now: moment.Moment): string {
  return `※このメールはシステムからの自動返信です

${body.name} 様

Calmatoへお問い合わせありがとうございます。

以下の内容でお問い合わせを受付致しました。
後日、担当者よりご連絡いたしますので今しばらくお待ちくださいませ。

-------□■□ お問い合わせ内容 □■□-------
お名前　　　　: ${body.name}
貴社名　　　　: ${body.companyName}
メールアドレス: ${body.email}
電話番号　　　: ${body.phoneNumber}

件名: ${body.subject}
日時: ${now.format('YYYY/MM/DD HH:mm:ss')}
内容: ${body.content}
-----------------------------------

$ Calmato 担当者
$ Email: calmato.dev@gmail.com`
}

function newContentWithHTML(body: SendEmailRequest, now: moment.Moment): string {
  return `
<p>※このメールはシステムからの自動返信です<p>

<p>${body.name} 様</p>

<p>
  Calmatoへお問い合わせありがとうございます。<br />
  以下の内容でお問い合わせを受付致しました。<br />
  後日、担当者よりご連絡いたしますので今しばらくお待ちくださいませ。
</p>

<h3>-------□■□ お問い合わせ内容 □■□-------</h3>

<table>
  <tbody>
    <tr>
      <td>お名前</td>
      <td>${body.name}</td>
    </tr>
    <tr>
      <td>貴社名</td>
      <td>${body.companyName}</td>
    </tr>
    <tr>
      <td>メールアドレス</td>
      <td>${body.email}</td>
    </tr>
    <tr>
      <td>電話番号</td>
      <td>${body.phoneNumber}</td>
    </tr>
    <tr>
      <td>件名</td>
      <td>${body.subject}</td>
    </tr>
    <tr>
      <td>日時</td>
      <td>${now.format('YYYY/MM/DD HH:mm:ss')}</td>
    </tr>
    <tr>
      <td>内容</td>
      <td>${body.content}</td>
    </tr>
  </tbody>
</table>

<h3>-----------------------------------</h3>

$ Calmato 担当者<br />
$ email: calmato.dev@gmail.com <br />
$ url: https://www.calmato.jp`
}
