const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const JwtStrategy = require('passport-jwt').Strategy;
const { ExtractJwt } = require('passport-jwt');
const User = require('../models/User');
// const { secret } = require('../config');

//local strategy

passport.use(new LocalStrategy({ username: User.email }, async(email, password, done) =>
 { 
     try{
            const user = User.findByEmail(email);

            if (!user)
            {
                return done(null, false);
            }

            const isMatch = await User.comparePasswords(password, User.HashPass);
            
            if (isMatch) 
            {
                return done(null, user);
            } 


            else if (!isMatch)
            {
            return done(null, false);
            
            }
        } 

     catch(err)
     {
      return done(err, false);
     }
}
));

//JWT Strategy 

passport.use(new JwtStrategy({ jwtFromRequest: ExtractJwt.fromHeader('authorization'),
 secretOrKey: secret },
  async(payload, done) => 
  {
    try 
    {
      const user = await User.findByEmail(payload.sub);
      
      if (!user) 
      {
        return done(null, false);
      }
      
      done(null, user);
    } 
    
    catch(error)
    {
      done(error, false);
    }
  }
  
  )); 
  
   module.exports = passport;

