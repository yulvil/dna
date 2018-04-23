// Converts
//    GEDmatch Matching Segment Search v2.1.2 HTML table
// into
//    csv or tsv textarea
function convert(sep) {
	var arr = /Kit:\s*(\w+)\s*\((\w+)\)\s*\(([^)]+)\)/.exec(document.body.innerHTML);
	var kit1 = arr[1];
	var name = arr[3];

	var s = "kit1,NAME,kit2,MATCHNAME,email,chr,start,end,cm,snps".split(',').join(sep) + "\n";

	var rows = document.getElementsByTagName("tr");
	for (var i = 1; i < rows.length; i++) {
		var cols = rows[i].getElementsByTagName('td');
		var a = [];
		a.push(kit1);
		a.push(name);
		a.push(cols[0].textContent); // kit2
		a.push(cols[6].textContent.replace(/,/g, "")); // MATCHNAME
		a.push(cols[8].textContent); // email
		a.push(cols[1].textContent); // chr
		a.push(cols[2].textContent.replace(/,/g, "")); // start
		a.push(cols[3].textContent.replace(/,/g, "")); // end
		a.push(cols[4].textContent); // cm
		a.push(cols[5].textContent.replace(/,/g, "")); // snps
		s += a.join(sep) + "\n";
	}

	var ta = document.createElement("textarea");
	document.body.appendChild(ta);
	ta.value = s;
}

convert(',');
convert('\t');
