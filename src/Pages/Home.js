import React from 'react'
import background1 from './Background/background1.jpg';     
import background2 from './Background//background2.jpg';     
import background3 from './Background//background3.jpg';  
import hotel1 from './Background/hotel1.jpg'   
import hotel2 from './Background/hotel2.jpg'   
import hotel3 from './Background/hotel3.jpg'   
import profile1 from './Background/profile1.jpg'   

function Home() {
    return (
        <div>
        
<div id="demo" class="carousel slide" data-ride="carousel">

	
	<ul class="carousel-indicators">
	  <li data-target="#slides" data-slide-to="0" class="active"></li>
	  <li data-target="#slides" data-slide-to="1"></li>
	  <li data-target="#slides" data-slide-to="2"></li>
	</ul>
  
	
	<div class="carousel-inner">
	  <div class="carousel-item active">
		<img src={background1} alt="Los Angeles"/>
		<div class="carousel-caption">
			<h1 class="display-2"> TRAVEL GUIDE</h1>
			<h3>Hotel reservationt</h3>
			<button type="button" class="btn btn-outline-light btn-lg">LOGIN</button>
			<button type="button" class="btn1 btn btn-primary btn-lg">REGISTER</button>
		</div>
	  </div>
	  <div class="carousel-item">
		<img src={background2} alt="Chicago"/>
	  </div>
	  <div class="carousel-item">
		<img src={background3} alt="New York"/>
	  </div>
	</div>
  
	
	<a class="carousel-control-prev" href="#demo" data-slide="prev">
	  <span class="carousel-control-prev-icon"></span>
	</a>
	<a class="carousel-control-next" href="#demo" data-slide="next">
	  <span class="carousel-control-next-icon"></span>
	</a>
  
  </div>
<hr class="my-4"/>
<div class="container-fluid padding">
	<div class="row welcome text-center">
		<div class="col-12">
			<h2 class="display-4">Featured Hotels</h2>
		</div>
		<hr/>
	</div>
</div>
<section>
    <div class="container">
    	<div class="row">
  			<div class="col-md-4 mt-4">
    		    <div class="card profile-card-5">
    		        <div class="card-img-block">
    		            <img class="card-img-top" src={hotel1} alt="hotel1"/>
    		        </div>
                    <div class="card-body pt-0">
                    <h5 class="card-title">Hotel Name</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
					<a href="Booking" class="btn btn-primary btn-sm">Book Now</a>
					
                  </div>
                </div>
    		</div>

			<div class="col-md-4 mt-4">
    		    <div class="card profile-card-5">
    		        <div class="card-img-block">
    		            <img class="card-img-top" src={hotel3} alt="hotel1"/>
    		        </div>
                    <div class="card-body pt-0">
                    <h5 class="card-title">Florence Garza</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary btn-sm">Take a look</a>
                  </div>
                </div>
    		</div>

			<div class="col-md-4 mt-4">
    		    <div class="card profile-card-5">
    		        <div class="card-img-block">
    		            <img class="card-img-top" src={hotel2} alt="hotel1"/>
    		        </div>
                    <div class="card-body pt-0">
                    <h5 class="card-title">Florence Garza</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary btn-sm">Take a look</a>
                  </div>
                </div>
    		</div>

			
		</div>
	</div>
</section>
<hr class="my-4"/>

<div class="container-fluid padding">
	<div class="row welcome text-center">
		<div class="col-12">
			<h2 class="display-4">Meet the team</h2>
		</div>
		<hr/>
	</div>
</div>

<div class="container">
		<div class="row text-center">
			<div class="col-md-4 mt-4">
				<div class="card profile-card-1">
    		        <img src={background1} alt="profile-sample1" class="background"/>
    		        <img src={profile1} alt="profile-image" class="profile"/>
                    <div class="card-content">
                    <h2>P.Manojkumar<small>Engineer</small></h2>
						<div class="icon-block"><a href="#"><i class="fab fa-facebook"></i></a><a href="#"> <i class="fab fa-twitter"></i></a><a href="#"> <i class="fab fa-google-plus-g"></i></a></div>
                    </div>
                </div>
			</div>
			<div class="col-md-4 mt-4">
				<div class="card profile-card-1">
    		        <img src={background1} alt="profile-sample1" class="background"/>
    		        <img src={profile1} alt="profile-image" class="profile"/>
                    <div class="card-content">
                    <h2>Savannah Fields<small>Engineer</small></h2>
						<div class="icon-block"><a href="#"><i class="fab fa-facebook"></i></a><a href="#"> <i class="fab fa-twitter"></i></a><a href="#"> <i class="fab fa-google-plus-g"></i></a></div>
                    </div>
                </div>
			</div>
			<div class="col-md-4 mt-4">
				<div class="card profile-card-1">
    		        <img src={background1} alt="profile-sample1" class="background"/>
    		        <img src={profile1} alt="profile-image" class="profile"/>
                    <div class="card-content">
                    <h2>Savannah Fields<small>Engineer</small></h2>
						<div class="icon-block"><a href="#"><i class="fab fa-facebook"></i></a><a href="#"> <i class="fab fa-twitter"></i></a><a href="#"> <i class="fab fa-google-plus-g"></i></a></div>
                    </div>
                </div>
			</div>
		</div>
		<hr class="my-4"></hr>
	</div>

	<div class="container-fluid padding">
	<div class="row text-center padding">
		<div class="col-12">
			<h2>Connect</h2>
		</div>

		<div class="col-12 social padding">
			<a href="#"><i class="fab fa-facebook"></i></a>
			<a href="#"><i class="fab fa-twitter"></i></a>
			<a href="#"><i class="fab fa-google-plus-g"></i></a>
			<a href="#"><i class="fab fa-instagram"></i></a>
			<a href="#"><i class="fab fa-youtube"></i></a>
		</div>
	</div>
	<hr class="my-4"></hr>
</div>

</div>
    )
}
export default Home