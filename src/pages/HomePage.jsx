
import Hero from '../components/Hero'
import HomeCards from '../components/HomeCards'
import JobListings from '../components/JobListings'
import ViewAllJobs from '../components/ViewAllJobs'

const HomePage = () => {
  return (
    <>
    <Hero title="test title" subtitle="test subtitle"/>
    <HomeCards />
    <JobListings isHome={true} />
    <ViewAllJobs />
    </>
  )
}

export default HomePage