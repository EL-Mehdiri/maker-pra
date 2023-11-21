import { Cards, Footer, Intro, Price } from "./components";


export default function Home() {
  return (
    <main className="space-y-[202px] mb-[117px] ">
      <Intro />
      <Cards />
      <Price />
      <Footer />
    </main>
  )
}
