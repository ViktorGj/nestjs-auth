import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor() {
        super({
            // here is the actual validation
            //  config for jwt strategy - documentation
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: 'SECRET' // protect this, use env variable
        })
    }

    // after validation the payload is passed here
    async validate(payload: any) {
        // possible logic here >  const user = await this.usersService.getById(payload.sub)
        return {
            id: payload.sub,
            name: payload.name
        }
    }

}