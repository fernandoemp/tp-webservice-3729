export class Email {
  from: string;
  to: string;
  subject: string;
  value: string;

  Email(from?: string, to?: string, subject?: string, value?: string){
    this.from = from;
    this.to = to;
    this.subject = subject;
    this.value = value;
  }
}
