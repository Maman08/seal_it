import { useRouter } from 'next/router'
 
export default function LoginBtn() {
  const router = useRouter()
 
  return (
    <button onClick={() => router.push('/login')}>
      Login
    </button>
  )
}