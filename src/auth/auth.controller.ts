import { Controller, Post } from '@nestjs/common/';
import { AuthService } from './auth.service';

@Controller('auth'),
export class AuthController{
  constructor(private authservice: AuthService) {}

  @Post('signup')
  signup () {
    return 'am signed up'
  }

  @Post('signin')
  signin() {
    return 'AM sigined in'
  }
}