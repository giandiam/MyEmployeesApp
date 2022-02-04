import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET,
            authorization: {
                params: {
                    prompt: "consent",
                    access_type: "offline",
                    response_type: "code"
                }
            }
        }),
    ],
    callbacks: {
        async signIn({ user, account, profile, email, credentials }) {
            //console.log(user, account, profile, email, credentials);
            const isAllowedToSignIn = true
            if (isAllowedToSignIn) {
              return true
            } else {
              // Return false to display a default error message
              return false
              // Or you can return a URL to redirect to:
              // return '/unauthorized'
            }
          }
    },
    secret: process.env.SECRET
})