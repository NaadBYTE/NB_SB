import { Hero } from '@/components/home/hero'
import { Occasions } from '@/components/home/occasions'
import { LatestReleases } from '@/components/home/latest-releases'
import { MusicVideos } from '@/components/home/music-videos'
import { StoriesSmiles } from '@/components/home/stories-smiles'
import { CtaBand } from '@/components/cta-band'

export default function HomePage() {
  return (
    <>
      <Hero />
      <Occasions />
      <LatestReleases />
      <MusicVideos />
      <StoriesSmiles />
      <CtaBand />
    </>
  )
}
