import { Body, Controller, Get, Post, Put } from '@nestjs/common';

@Controller('users')
export class UsersController {
  private tempSessionUsersCache = [ // This serves as some data that would be fetched from the DB
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

  @Get()
  findAll(): { firstName: string, surname: string, emailAddress: string }[] {
    return this.tempSessionUsersCache;
  }

  @Put()
  saveUser(@Body() user: Partial<{ username: string, surname: string, emailAddress: string }>) {
    const newUser = {
      firstName: user?.username || '',
      surname: user?.surname || '',
      emailAddress: user?.emailAddress || '',
    }
    const userIndex = this.tempSessionUsersCache.findIndex(u => u.firstName === newUser.firstName);
    if (userIndex >= 0) {
      this.tempSessionUsersCache.splice(userIndex, 1);
      this.tempSessionUsersCache = [
        ...this.tempSessionUsersCache,
        newUser
      ]
    } else {
      this.tempSessionUsersCache.push(Object.assign({ firstName: '', surname: '', emailAddress: '' }, newUser))
    }
  }
}
