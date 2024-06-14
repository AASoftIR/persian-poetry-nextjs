async function fetchP(id) {
	let poem = await fetch(
		`https://api.ganjoor.net/api/ganjoor/poem/${id}?catInfo=true&catPoems=false&rhymes=true&recitations=true&images=true&songs=true&comments=true&verseDetails=true&navigation=true&relatedpoems=true`
	);

	let res = await poem.json();
	return res;
}
const page = async ({ params: { id } }) => {
	let poem = await fetchP(parseInt(id));
	if (!poem) {
		// Handle the case where the poem data is not available
		return <div>Error fetching poem data</div>;
	}
	let { verses } = poem;
	let html = ``;
	for (let i = 0; i < verses.length; i++) {
		html += `<div class="flex justify-between mx-auto w-[90%]"><span>${
			verses[i].text
		}</span><span>${verses[i + 1] && verses[i + 1].text}</span></div>`;
		i++;
	}
	return (
		<>
			<div className="rounded max-w-[50%] bg-slate-100 p-4 mx-auto mt-5 shadow">
				<h2 className="text-center">{poem.fullTitle}</h2>
			</div>
			<div
				className="flex justify-between rounded max-w-[50%] bg-gray-800 text-white p-4 mx-auto mt-5 gap-2 shadow"
				dir="rtl"
			>
				<p className="text-center max-w-[70%]">
					{poem.poemSummary ? poem.poemSummary : poem.title}
				</p>
				<img src={`https://api.ganjoor.net${poem.category.poet.imageUrl}`} />
			</div>
			<div
				className="rounded max-w-[50%] bg-gray-700 text-white p-4 mx-auto mt-5 gap-2 shadow font-nas leading-10"
				dir="rtl"
			>
				{
					<div
						className="flex justify-between flex-wrap flex-col w-full my-4"
						dangerouslySetInnerHTML={{ __html: html }}
					/>
				}
			</div>
		</>
	);
};

export default page;
