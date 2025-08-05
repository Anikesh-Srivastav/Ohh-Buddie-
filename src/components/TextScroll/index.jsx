'use client';
import Paragraph from "./Paragraph";
import Word from './Word';
import Character from './Character'
const paragraph = "Ohh! Buddie is a bold and energetic fashion-forward brand redefining the way style meets speed. Built around the concept of ultra-fast delivery, Ohh! Buddie delivers trendy, curated fashion essentials right to your doorstep within just 69 minutes. The name itself captures attention — Ohh! reflects the surprise and excitement, while Buddie creates a sense of friendliness and connection. Whether it’s last-minute plans or a sudden fashion urge, Ohh! Buddie ensures you’re never out of style. With a sleek aesthetic, Gen-Z tone, and a commitment to making fashion accessible in real time, Ohh! Buddie isn’t just a brand — it’s your instant style partner."

export default function Home() {

  const words = paragraph.split(" ")
  return (
    <main>
        <div style={{height: "100vh"}}></div>
        <Paragraph paragraph={paragraph}/>
        <div style={{height: "100vh"}}></div>
        <Word paragraph={paragraph}/>
        <div style={{height: "100vh"}}></div>
        <Character paragraph={paragraph} />
        <div style={{height: "100vh"}}></div>
    </main>
  )
}