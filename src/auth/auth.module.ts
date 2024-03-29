import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersModule } from 'src/users/users.module';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';
import { SessionSerializer } from './session.serializer';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [
    UsersModule, 
    PassportModule,
    JwtModule.register({
      secret: 'SECRET', // put env variable and use it from there
      signOptions: { expiresIn: '60s' }
    })
  ],
  providers: [
    AuthService, 
    LocalStrategy,
    JwtStrategy
    // JwtService
  ],
  exports: [AuthService]
})
export class AuthModule {}
