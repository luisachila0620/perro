import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
	return (
		<div className="title">
			<h1 className="color">RAT TERRIER</h1>
			<p className="paragraph">
				the rat terrier is a small dog that was developed in early times
				to hunt and eliminate rats, mice, and small rourers it was a
				breed us by wealthy people and became a very useful dog to get
				grid of small mamals, today the rat terrier is use with the same
				porpouse and also it is a family dog and pet, this dog requires
				a lot of attention and needs to be trained and disipline, is a
				very friendly dog and very active, and above all it is very
				friendly dog and a good pet.
			</p>
			<img
				className="image"
				src="https://www.thesprucepets.com/thmb/7tmbGB0_PE4bxyrln3TlMFVGBC8=/2114x1189/smart/filters:no_upscale()/GettyImages-681825056-3022f936de744885879af2016b27680c.jpg"
			/>
			<div>
				<button>more information</button>
			</div>
		</div>
	);
}
