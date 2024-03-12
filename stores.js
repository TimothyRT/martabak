var storesData = {
    'names': [
      "The Pilgrim Pekanbaru",
      "The Pilgrim MOI",
      "The Pilgrim Beachwalk Bali",
      "The Pilgrim FCL Bandung"
    ],

    'images': [
      "Mal-Pekanbaru",
      "MOI",
      "Beachwalk",
      "Bandung"
    ],

    'addresses': [
      "Jl. Jend. Sudirman No.123, Kota Tinggi, Kec. Pekanbaru Kota, Kota Pekanbaru, Riau 28112",
      "Jl. Boulevard Bar. Raya No.12, RT.18/RW.19, Klp. Gading Bar., Kec. Klp. Gading, Jkt Utara, Daerah Khusus Ibukota Jakarta 14240",
      "Jl. Pantai Kuta, Kuta, Kec. Kuta Sel., Kabupaten Badung, Bali 80361",
      "Jl. Peta No.241, Suka Asih, Kec. Bojongloa Kaler, Kota Bandung, Jawa Barat 40232"
    ],
    
    'phone_nums': [
      "(0761) 853123",
      "(0761) 962125",
      "(0361) 868124",
      "(022) 6328595"
    ],

    'g-maps': [
      "https://maps.app.goo.gl/eKTjtJXXxMcxJFn9A",
      "https://maps.app.goo.gl/c6a8ZCqTuB5NGDR19",
      "https://maps.app.goo.gl/xmMD1Ao2uZ1TQrsFA",
      "https://maps.app.goo.gl/7skHE5eZ8RfZCpQs5"
    ],

    'choosers': [
      "pekanbaruChooser",
      "jakartaChooser",
      "baliChooser",
      "bandungChooser"
    ]
  };

function myFunction(input) {
    let locations = 4;

    for (let i = 0; i < locations; i++) {
        document.getElementById(storesData["choosers"][i]).classList.remove("active");
    }

    document.getElementById(storesData["choosers"][input]).classList.add("active");
    document.getElementById("infobox-title").innerHTML = storesData["names"][input];
    document.getElementById("infobox-map-url").href = storesData["g-maps"][input];
    document.getElementById("infobox-img").src = "assets/" + storesData["images"][input] + ".jpg";
    document.getElementById("infobox-address").innerHTML = storesData["addresses"][input];
    document.getElementById("infobox-phone-num").innerHTML = storesData["phone_nums"][input];
}