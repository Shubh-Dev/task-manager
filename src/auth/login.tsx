import { useState } from 'react'
import { supabase } from '../utils/supabaseClient'

const Login = () => {
  const [error, setError] = useState<string | null>(null)

  const handleGoogleLogin = async () => {
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo:
            'https://iofksvgydjttdbbdbtlx.supabase.co/auth/v1/callback', // local callback URL
        },
      })

      if (error) throw error
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message)
      } else {
        // Handle unexpected errors
        setError('An unknown error occurred')
      }
    }
  }

  return (
    <div className="flex flex-col gap-3">
      <div>
        <img
          src="/assets/Frame 1171276306.svg"
          alt="half circle shape"
          className="ml-auto"
        />
      </div>

      <div>
        <img src="/assets/Frame 1171276305.svg" alt="half circle shape" />
      </div>
      <div>
        <div className="w-4/6 mx-auto flex flex-col gap-2">
          <img
            src="/assets/Group 1171276161.svg"
            alt="headline"
            className="mx-auto"
          />
          <img
            src="/assets/Group 1171276163.svg"
            alt="text"
            className="mx-auto"
          />
          <img
            src="/assets/Group 1171276160.svg"
            alt="google login"
            className="mx-auto mt-2 w-5/6"
            onClick={handleGoogleLogin}
          />
        </div>
      </div>

      <div className="mt-8">
        <img
          src="/assets/Frame 1171276304.svg"
          alt="circles"
          className="mx-auto"
        />
      </div>
    </div>
  )
}

export default Login
