import Image from "next/image"

export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 bg-primary/90 flex flex-col items-center justify-center z-50">
      <div className="mb-8">
        <Image
          src="/favicon.jpeg"
          alt="Heirstead Probate & Legal Affairs Logo"
          width={150}
          height={150}
          className="rounded-2xl"
        />
      </div>
      <div className="text-center">
        <div
          className="inline-block h-16 w-16 animate-spin rounded-full border-4 border-solid border-white border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
          role="status"
        >
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            Loading...
          </span>
        </div>
        <h2 className="mt-4 text-2xl font-bold text-white">Loading...</h2>
        <p className="text-white/80">Please wait while we prepare your content</p>
      </div>
    </div>
  )
}
