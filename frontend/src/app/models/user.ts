export class User {
  id!: string;
  email!: string;
  name!: string;
  isAdmin: boolean = false;
  token:string='';
}
