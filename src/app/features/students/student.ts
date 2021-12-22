export class Student {
  id: number;
  name: string;
  email: string;
  birthDay: string;

  constructor(id?: number, name?: string, email?: string, birthDay?: string) {
    this.id = id || 0;
    this.name = name || '';
    this.email = email || '';
    this.birthDay = birthDay || '';
  }
}
