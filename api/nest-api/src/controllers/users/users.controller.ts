import { Controller, Get } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get()
  findAll(): {firstName: string, surname: string, emailAddress: string}[] {
    return [
      {
        firstName: 'John',
        surname: 'Doe',
        emailAddress: 'john@dvt.com',
      },
      {
        firstName: 'Tom',
        surname: 'Doe',
        emailAddress: 'tom@dvt.com',
      }
    ];
  }
}
