import { useRouter } from 'next/router'
 
export default function HomeBtn() {
  const router = useRouter()
 
  return (
    <button onClick={() => router.push('/')} className="border-2 border-blue-300 shadow-sm shadow-blue-300">
      Home 
    </button >
  )
}