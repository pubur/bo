var burgerMenuDom = document.getElementById('burgerMenu');
var sidebarMask = document.getElementById('sidebarMask');
var addScreenDemo = document.getElementById('addScreenDemo');
var addScreenMask = document.getElementById('addScreenMask');
var sidebarOpen = false;
burgerMenuDom.addEventListener('click', function () {
  sidebarOpen = !sidebarOpen;
  document.getElementById('burgerIcon').classList.toggle('open');
  document.getElementById('sidebar').classList.toggle('open');
  sidebarMask.style.display = sidebarOpen ? 'block' : 'none';
});
sidebarMask.addEventListener('click', function () {
  sidebarMask.style.display = 'none';
  document.getElementById('burgerIcon').classList.remove('open');
  document.getElementById('sidebar').classList.remove('open');
  sidebarOpen = false;
});
document.getElementById('addScreenCloseBtn').addEventListener('click', function () {
  document.getElementById('addScreen').style.display = 'none';
});
document.getElementById('qrClose').addEventListener('click', function () {
  document.getElementById('qrCodePage').classList.remove('open');
});
document.querySelector('.box').addEventListener('click', function () {
  document.getElementById('qrCodePage').classList.add('open');
});
document.querySelector('.contact-us-btn').addEventListener('click', function () {
  document.getElementById('qrCodePage').classList.add('open');
});
document.querySelectorAll('.ad-link').forEach(function (val) {
  val.addEventListener('click', function (e) {
    var type = 'advert';

    if (e.target.closest('a').classList.contains('banner')) {
      type = 'banner';
    } else if (e.target.closest('a').classList.contains('carousel')) {
      type = 'carousel';
    }

    fetch("".concat(apiUrl, "/count/").concat(type, "default.htm").concat(e.target.closest('a').dataset.id)).then(function (res) {
      return res.json();
    }).then(function (jsonData) {
      console.log(jsonData);
    });
  });
});
document.querySelectorAll('.ad-link-full').forEach(function (val) {
  val.addEventListener('click', function (e) {
    fetch("".concat(apiUrl, "/count/advert/").concat(e.target.closest('.full-box').dataset.id)).then(function (res) {
      return res.json();
    }).then(function (jsonData) {
      console.log(jsonData);
    });
  });
});

var mobile = function () {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent) || navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1;
}();

var mobile_bs = {
  versions: function () {
    var u = navigator.userAgent;
    return {
      trident: u.indexOf('Trident') > -1,
      // IE内核
      presto: u.indexOf('Presto') > -1,
      // opera内核
      webKit: u.indexOf('AppleWebKit') > -1,
      // 蘋果、google内核
      gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1,
      // 火狐内核
      mobile: !!u.match(/AppleWebKit.*Mobile.*/) || !!u.match(/AppleWebKit/) && u.indexOf('QIHU') && u.indexOf('QIHU') > -1 && u.indexOf('Chrome') < 0,
      // 是否為移動端
      ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
      // ios 终端
      android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1,
      // android终端或者uc browser
      iPhone: u.indexOf('iPhone') > -1,
      //是否為 iPhone 或者 QQHD browser
      iPad: u.indexOf('iPad') > -1 || navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1,
      //是否 iPad
      webApp: u.indexOf('Safari') == -1 //是否 web 應用程序

    };
  }()
};


if (mobile_bs.versions.iPhone || mobile_bs.versions.iPad) {
  document.getElementById('addScreenCloseBtn').classList.add('ios');
  document.getElementById('iosCloseBtn').addEventListener('click', function () {
    addScreenDemo.classList.remove('open');
    addScreenMask.classList.remove('open');
  });
  addScreenMask.addEventListener('click', function () {
    addScreenDemo.classList.remove('open');
    addScreenMask.classList.remove('open');
  });
} else {
  document.getElementById('itemGroup').classList.add('andro');
}