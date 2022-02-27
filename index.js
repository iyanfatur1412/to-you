const image = document.querySelector(".image");
const container = document.querySelector(".container");
const colAudio = document.querySelector(".col-audio");

image.addEventListener("click", function () {
				container.innerHTML = frame2();
				typing();
});


function frame2 () {
				return `
				<section class="fluid-img">
								<div class="col-img">
												<div class="img">
																<img src="bahan/bg.jpg" alt="background">
												</div>
												<div class="teks">
																<p></p>
																<p></p>
																<p></p>
												</div>
								</div>
					</section>
				`
}

function typing () {
			let teks1 = "Terima kasih untuk dukungannya selama ini.";
				let teks2 = "Aku selalu terbantu, bila saja aku tak memilikimu, aku tak tahu kedepannya akan seperti apa.";
				let teks3 = "Sekali lagi, Terima Kasih!";
				
				setType(teks1, 0);
				setTimeout(() => {
								setType(teks2, 1)
				}, 70*teks1.length+600);
				setTimeout(() => {
								setType(teks3, 2);
				}, (70*teks1.length+1000)+(70*teks2.length+1000));
				playAudio();
				setTimeout(() => {
								checkAudio();
				}, 20000)
				
}

function setType (teks, j) {
				const p = document.querySelectorAll(".teks p");
				let interval;
				let i = 0;		
								interval = setInterval(() => {
												if(interval > teks.length) {
																clearInterval(interval);
												}else {
																i++;
																p[j].innerHTML = teks.substr(0, i);
												}
								}, 70);
}

function setAudio () {
				return `
								<audio src="bahan/bendsound.mp3"></audio>
				`
}

function playAudio () {
				colAudio.innerHTML = setAudio();
				const audio = document.querySelector("audio");
				audio.play();
}

function checkAudio() {
				const audio = document.querySelector("audio");
				let interval;
				interval = setInterval(() => {
								if(audio.paused == true) {
								clearInterval(interval);
								container.innerHTML = frame4();
								}
				}, 0)
				
}

function frame4 () {
				return `
								<div class="col-end">
												<h1>I Love You</h1>
								</div>
				`
}
