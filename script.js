const DOMAIN = "https://www.scbuildit.hubsinfo.net";
const COLORMAP = ["gray-500", "orange-500", "indigo-500", "green-300", "yellow-800", "green-500", "pink-500", "purple-300", "yellow-400", "blue-500", , , , , , , , "teal-400"]

const getCMAPIndex = name => {
	const index = data.map(e => e[1].some(e => e[1] === name.replace('Bread', "Bread Roll").replace("Bags", "Bag").replace('Fruit Berries', 'Fruit and Berries'))).indexOf(true)
	return index !== -1 ? index : console.log(name)
}

$('main').append(data.map(([title, elements], index) => `
	<div>
		<h1 class="text-center font-extrabold text-4xl mb-8">${title}</h1>
		<div class="grid items-center justify-center gap-5 mb-32 px-20" style="grid-template-columns: repeat(auto-fill, minmax(18em, 1fr)); grid-auto-rows: 1fr">
			${elements.map(([img, name, level, time, maxVal, mats, used, desc]) => `
				<div class="bg-white rounded-xl flex flex-col items-center p-6 pb-20 relative h-full" style="box-shadow: 0 4px 4px rgba(0, 0, 0, .25)" id="${name.toLowerCase().replace(/\s/g, "-")}">
					<h3 class="font-extrabold text-lg mb-3">LEVEL ${level}</h3>
					<div class="w-32 h-32 rounded-full bg-${COLORMAP[index]}" style="padding: .4em; box-shadow: inset 0 2px 6px rgba(0, 0, 0, .6)"><img src="${DOMAIN+img}" class="bg-white rounded-full p-5" style="box-shadow: 0 2px 4px rgba(0, 0, 0, .6)"></div>
					<h2 class="font-extrabold text-3xl pt-4 text-center leading-tight">${name}</h2>
					<div class="font-extrabold flex items-center mt-1"><img src="https://www.scbuildit.hubsinfo.net/images/icons/misc-icons/currency_coins.png" class="w-5 mr-1">${maxVal}</div>
					<p class="font-bold text-xl text-center mt-5 text-gray-900 leading-tight">${desc}</p>
					${[mats, used].map(e => elements.map(() => e.length > 0).some(e => e) ? `
						<h3 class="font-extrabold text-lg mb-3 mt-4">Used In</h3>
						<div class="flex">
							${e.map(([i, a, n]) => `
							<div class="flex items-center justify-center w-12 h-12 mx-1 rounded-full bg-${COLORMAP[getCMAPIndex(n)]}" style="box-shadow: inset 0 2px 6px rgba(0, 0, 0, .6)">
								<a href="#${n.replace('Bread', "Bread Roll").replace("Bags", "Bag").replace('Fruit Berries', 'Fruit and Berries').replace(/\s/g, "-").toLowerCase()}"><img src="${DOMAIN+i}" class="bg-white rounded-full p-2 w-10 h-10" style="box-shadow: 0 2px 4px rgba(0, 0, 0, .6)"></a>
							</div>
							`).join("")}
						</div>
					` : "").join("")}
					<h3 class="font-extrabold absolute left-50" style="bottom: 1.4em">MIN. ${time} minutes</h3>
				</div>
			`).join("")}
		</div>
	</div>
`));
