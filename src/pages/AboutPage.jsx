import Card from '../components/shared/Card'

function AboutPage() {
  return (
    <Card>
      <div className='about'>
        <h1>About this project</h1>
        <p>
          App created with create-react-app to leave feedback on a product. Code
          along from React Front To Back 2022 Udemy course.
        </p>
        <p>Version: 1.0.0</p>

        <p>
          <a href='/'>Back to Home</a>
        </p>
      </div>
    </Card>
  )
}

export default AboutPage
