import React from 'react'
import logo from './logo.png';
 

function Footer() {
    return (
        <div>


<footer>
<div class="container-fluid padding">
	<div class="row text-center padding">
		<div class="col-md-4">
        <a class="navbar-brand" href="#"><img src={logo} alt="Logo" /></a>
			<hr class="light"/>
			<p>076-640-7131</p>
			<p>manojprabaharan5@gmail.com</p>
			<p>thamaraikulam,admpan</p>
			<p>mannar,srilanka</p>
		</div>

		<div class="col-md-4">
			<hr class="light"/>
			<h5>Our hours</h5>
			<hr class="light"/>
			<p>give the time</p>
			<p>give the time</p>
			<p>give the time</p>
		</div>

		<div class="col-md-4">
			<hr class="light"/>
			<h5>service area</h5>
			<hr class="light"/>
			<p>give the place</p>
			<p>give the place</p>
			<p>give the place</p>
			<p>give the place</p>
		</div>

		<div class="col-12">
			<hr class="light-100"/>
			<h5>&copy; P.Manojkumar</h5>	
		</div>
	</div>
</div>
</footer>
</div>
    )
}
export default Footer