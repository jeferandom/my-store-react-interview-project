import { useState, useEffect } from 'react'
import ApiService from './services/ApiService'

import GoogleLoginForm from './components/auth/GoogleLoginForm'

import { Button } from "@/components/ui/button"
import TableDemo from "@/components/products/productsTable"

function App() {
  const [data, setData] = useState(null)

  useEffect(() => {
    ApiService.getData().then(response => setData(response))
  }, [])

  return (

    <main className="flex flex-col items-center justify-center h-screen">
      <div className="flex flex-col items-center gap-y-4">
        <div className="inline-flex items-center gap-x-4">
          <GoogleLoginForm />
          <Button>Button</Button>
         
        </div>
        <TableDemo data={data} loading={!data} />
        <Button>Button</Button>
      </div>
    </main>
  )
}

export default App
