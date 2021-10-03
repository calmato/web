export interface SendEmailRequest {
  name: string; // 氏名
  companyName: string; // 会社名
  email: string; // メールアドレス
  phoneNumber: string; // 電話番号
  subject: string; // 件名
  content: string; // 本文
}
