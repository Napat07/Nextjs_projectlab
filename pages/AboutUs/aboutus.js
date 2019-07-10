import Form from '../../Component/form.js'
import Head from '../../Component/head.js'
import './aboutStyle.css';

export default function About() {
  return (
  <div>
  <Head title="Contact - Project Lab" />
    <Form>
    <header className="masthead">
  <div class="container h-100">
    <div class="row h-100 align-items-center">
      <div class="col-12 text-center">
        <h1 className="font-weight-bold About-us">About Us</h1>
        <a href="#about" class="btn btn-primary js-scroll-trigger">Read More</a>
      </div>
    </div>
  </div>
</header>
<div class="container">
  <div class="row">
    <div class="col-sm-4">
      <h3>Column 1</h3>
      <p>Lorem ipsum dolor..</p>
    </div>
    <div class="col-sm-4">
      <h3>Column 2</h3>
      <p>Lorem ipsum dolor..</p>
    </div>
    <div class="col-sm-4">
      <h3>Column 3</h3> 
      <p>Lorem ipsum dolor..</p>
    </div>
  </div>
</div>
    </Form>
    </div>
  )
}