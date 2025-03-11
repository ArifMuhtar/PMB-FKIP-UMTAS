$(document).ready(function () {
    var navbar = $("nav");
    var logoPutih = $("nav img.putih");
    var logoHitam = $("nav img.hitam");
    var tombolMenu = $(".tombol-menu");
    var menu = $("nav .menu ul");
    var navbarHeight = $("nav").outerHeight(); // Ambil tinggi navbar

    // 🔹 Efek scroll untuk navbar dan logo
    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            navbar.addClass("scrolled");
            logoPutih.css("opacity", "0");
            logoHitam.css("opacity", "1");
        } else {
            navbar.removeClass("scrolled");
            logoPutih.css("opacity", "1");
            logoHitam.css("opacity", "0");
        }
    });

    // 🔹 Toggle menu untuk tampilan mobile
    tombolMenu.click(function () {
        menu.slideToggle(); // Efek slide agar lebih smooth
    });

    // 🔹 Menutup menu jika item di dalamnya diklik (hanya di layar kecil)
    menu.find("li a").click(function () {
        if ($(window).width() < 990) {
            menu.slideUp();
        }
    });

    // 🔹 Pastikan menu tampil atau tersembunyi sesuai ukuran layar
    $(window).resize(function () {
        if ($(window).width() > 989) {
            menu.show(); // Selalu tampil jika layar besar
        } else {
            menu.hide(); // Sembunyikan jika layar kecil
        }
    }).resize(); // Panggil saat halaman pertama kali dimuat

    // 🔹 Smooth scroll untuk navigasi
    $("a[href^='#']").click(function (event) {
        event.preventDefault();
        var target = $(this.getAttribute("href"));

        if (target.length) {
            $("html, body").animate(
                {
                    scrollTop: target.offset().top - navbarHeight // Sesuaikan dengan tinggi navbar
                },
                500 // Scroll lebih cepat (500ms)
            );
        }
    });

    // 🔹 Pastikan video tetap fullscreen
    function resizeVideo() {
        let video = document.querySelector("header video");
        video.style.width = window.innerWidth + "px";
        video.style.height = window.innerHeight + "px";
    }

    window.addEventListener("resize", resizeVideo);
    resizeVideo(); // Panggil saat halaman pertama kali dimuat

    $(document).ready(function () {
        var navbar = $("nav");
        var navbarHeight = navbar.outerHeight(); // Ambil tinggi navbar
    
        // 🔹 Smooth scroll untuk semua link navbar & footer
        $("a[href^='#']").click(function (event) {
            event.preventDefault();
            var target = $(this.getAttribute("href"));
    
            if (target.length) {
                var targetOffset = target.offset().top;
    
                // Jika target adalah footer, pastikan scroll sampai ke bawah
                if (target.is("#contact")) {
                    targetOffset = $(document).height() - $(window).height();
                }
    
                $("html, body").animate(
                    {
                        scrollTop: targetOffset - navbarHeight
                    },
                    500 // Percepat scroll menjadi 500ms
                );
            }
        });
    });

    document.addEventListener("DOMContentLoaded", function () {
        const gallery = document.querySelector(".gallery-container");
        let isDown = false;
        let startX;
        let scrollLeft;
    
        gallery.addEventListener("mousedown", (e) => {
            isDown = true;
            gallery.classList.add("active");
            startX = e.pageX - gallery.offsetLeft;
            scrollLeft = gallery.scrollLeft;
        });
    
        gallery.addEventListener("mouseleave", () => {
            isDown = false;
            gallery.classList.remove("active");
        });
    
        gallery.addEventListener("mouseup", () => {
            isDown = false;
            gallery.classList.remove("active");
        });
    
        gallery.addEventListener("mousemove", (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - gallery.offsetLeft;
            const walk = (x - startX) * 2; // Sesuaikan kecepatan scroll
            gallery.scrollLeft = scrollLeft - walk;
        });
    });    

    document.addEventListener("DOMContentLoaded", function () {
        const gallery = document.querySelector(".gallery-container");
        let isDown = false;
        let startX;
        let scrollLeft;
    
        gallery.addEventListener("mousedown", (e) => {
            isDown = true;
            gallery.classList.add("active");
            startX = e.pageX - gallery.offsetLeft;
            scrollLeft = gallery.scrollLeft;
        });
    
        gallery.addEventListener("mouseleave", () => {
            isDown = false;
            gallery.classList.remove("active");
        });
    
        gallery.addEventListener("mouseup", () => {
            isDown = false;
            gallery.classList.remove("active");
        });
    
        gallery.addEventListener("mousemove", (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - gallery.offsetLeft;
            const walk = (x - startX) * 2; // Sesuaikan kecepatan scroll
            gallery.scrollLeft = scrollLeft - walk;
        });
    });
    $(document).ready(function () {
        var navbar = $("nav");
        var menuLinks = $("nav ul li a"); // Pilih semua link navbar
        var logoPutih = $("nav img.putih");
        var logoHitam = $("nav img.hitam");
    
        function updateNavbar() {
            if ($(window).scrollTop() < 50) {
                navbar.removeClass("scrolled");
                logoPutih.css("opacity", "1");
                logoHitam.css("opacity", "0");
                menuLinks.css("color", "#ffffff"); // Warna putih di Home
            } else {
                navbar.addClass("scrolled");
                logoPutih.css("opacity", "0");
                logoHitam.css("opacity", "1");
                menuLinks.css("color", "#000000"); // Warna hitam setelah scroll
            }
        }
    
        $(window).scroll(updateNavbar);
        updateNavbar(); // Panggil saat halaman dimuat
    });
        
});
